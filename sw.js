// RunningX service worker v1.7.0
const VERSION = 'rx-v1.7.0';
const CACHE = VERSION;
const ASSETS = ['./', './index.html'];

// T1: proper install + skipWaiting via message
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => c.addAll(ASSETS))
      .then(() => {
        // Do NOT skipWaiting automatically — wait for app to trigger it
        // This ensures the user sees the banner and chooses to update
      })
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// T1: listen for SKIP_WAITING message from the app
self.addEventListener('message', e => {
  if (e.data?.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);

  // Always network-first for API calls
  if (url.hostname.includes('script.google.com')) {
    e.respondWith(
      fetch(e.request).catch(() =>
        new Response('{"status":"error","message":"offline"}', {
          headers: { 'Content-Type': 'application/json' }
        })
      )
    );
    return;
  }

  // Network-first for the app itself so updates are picked up
  // Falls back to cache when offline
  e.respondWith(
    fetch(e.request)
      .then(res => {
        const clone = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, clone));
        return res;
      })
      .catch(() => caches.match(e.request))
  );
});
