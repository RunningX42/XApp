// RunningX icon set — replaces emojis. 22×22 viewBox, solid-fill.
// Usage: RXIcon('run', 20, '#fff', '#c6f24e')
const RX_ICONS = {
  run: (c,a)=>`<circle cx="15" cy="4" r="2" fill="${c}"/><path d="M12 7.5c-1.1.2-2 .8-2.7 1.7L7.6 11.5a1 1 0 0 0 .2 1.3l2 1.4-1.6 3.9a.9.9 0 1 0 1.7.7l2-4.2a1.1 1.1 0 0 0-.3-1.3l-1-.8 1.2-1.5.7 1.7c.3.6.8.9 1.4 1l2.4.4a.9.9 0 0 0 .3-1.8l-2-.3-1.5-3.2a1.8 1.8 0 0 0-1.8-1.3z" fill="${c}"/><path d="M7 13l-2.5 3.4a.9.9 0 0 0 1.5 1.1l2.4-3.2L7 13z" fill="${a}"/>`,
  mobiliteit: (c,a)=>`<circle cx="11" cy="4" r="2" fill="${c}"/><path d="M6 17a5 5 0 0 1 10 0v1H6v-1z" fill="${c}"/><path d="M3 12a8 8 0 0 1 16 0" fill="none" stroke="${a}" stroke-width="1.4" stroke-linecap="round"/>`,
  rust: (c,a)=>`<rect x="4" y="10" width="12" height="6" rx="1" fill="${c}"/><rect x="14" y="7" width="5" height="5" fill="${c}"/><polygon points="14,7 17,7 14,10" fill="${a}"/><rect x="5" y="16" width="2" height="3" fill="${c}"/><rect x="13" y="16" width="2" height="3" fill="${c}"/><rect x="2" y="9" width="3" height="2" fill="${c}"/>`,
  werk: (c,a)=>`<rect x="3" y="7" width="16" height="11" rx="1" fill="${c}"/><rect x="8" y="4" width="6" height="3" fill="none" stroke="${c}" stroke-width="1.5"/><rect x="3" y="11" width="16" height="1.5" fill="${a}"/>`,
  herstel: (c,a)=>`<path d="M11 2c1 2.5 4 4 4 8a4 4 0 0 1-8 0c0-1.5.5-2.5 1.5-3.5-.5 2 .5 3 1.5 3 0-2 .5-4 1-7.5z" fill="${c}"/><path d="M11 10c.5 1.5 2 2 2 4a2 2 0 0 1-4 0c0-1 .5-1.5 1-2 0 1 .5 1.5 1 1.5 0-1 0-2 0-3.5z" fill="${a}"/>`,
  kracht: (c,a)=>`<rect x="3" y="10" width="16" height="2" fill="${c}"/><rect x="5" y="7" width="2" height="8" fill="${c}"/><rect x="15" y="7" width="2" height="8" fill="${c}"/><rect x="2" y="8" width="2" height="6" fill="${a}"/><rect x="18" y="8" width="2" height="6" fill="${a}"/>`,
  race: (c,a)=>`<circle cx="11" cy="11" r="9" fill="none" stroke="${c}" stroke-width="1.5"/><circle cx="11" cy="11" r="5" fill="none" stroke="${c}" stroke-width="1.5"/><circle cx="11" cy="11" r="2" fill="${a}"/>`,
  trail: (c,a)=>`<polygon points="2,18 8,8 12,14 15,10 20,18" fill="${c}"/><polygon points="8,8 10,11 6,11" fill="${a}"/>`,
  bolt: (c,a)=>`<polygon points="13,2 4,13 10,13 9,20 18,9 12,9" fill="${a}"/>`,
  target: (c,a)=>`<circle cx="11" cy="11" r="9" fill="none" stroke="${c}" stroke-width="1.5"/><circle cx="11" cy="11" r="5" fill="none" stroke="${c}" stroke-width="1.5"/><circle cx="11" cy="11" r="2" fill="${a}"/>`,
  check: (c,a)=>`<polyline points="4,11 9,16 18,6" fill="none" stroke="${a}" stroke-width="2.6" stroke-linecap="square" stroke-linejoin="miter"/>`,
  fire: (c,a)=>`<path d="M11 2c1 2.5 4 4 4 8a4 4 0 0 1-8 0c0-1.5.5-2.5 1.5-3.5-.5 2 .5 3 1.5 3 0-2 .5-4 1-7.5z" fill="${c}"/><path d="M11 10c.5 1.5 2 2 2 4a2 2 0 0 1-4 0c0-1 .5-1.5 1-2 0 1 .5 1.5 1 1.5 0-1 0-2 0-3.5z" fill="${a}"/>`,
};

// Returns an <svg> string
function RXIcon(type, size=22, color='currentColor', accent='#c6f24e'){
  const fn = RX_ICONS[type] || RX_ICONS.rust;
  return `<svg width="${size}" height="${size}" viewBox="0 0 22 22" style="display:block;flex-shrink:0">${fn(color,accent)}</svg>`;
}

// Emoji → icon type mapping
const EMOJI_TO_ICON = {
  '🏃':'run','🧘':'mobiliteit','🐕':'rust','🟡':'werk',
  '🏔':'trail','⚡':'bolt','🎯':'target','💪':'kracht',
  '🔥':'fire','✓':'check','🏁':'race','🌿':'herstel',
};
function emojiToIcon(emoji, size=20, color='#fff', accent='#c6f24e'){
  const type = EMOJI_TO_ICON[emoji];
  return type ? RXIcon(type, size, color, accent) : `<span style="font-size:${size*0.8}px;line-height:1">${emoji}</span>`;
}
