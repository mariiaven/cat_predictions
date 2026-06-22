const fortunes = [
  { icon: '☀️', text: 'Pusiel says the morning sun will bring a cozy surprise.' },
  { icon: '🌿', text: 'Pusiel says a calm moment will arrive while you savor a quiet drink.' },
  { icon: '🎁', text: 'Pusiel says unexpected kindness is headed your way.' },
  { icon: '🌙', text: 'Pusiel says tonight holds a gentle dream and a soft reminder to rest.' },
  { icon: '✨', text: 'Pusiel says a small spark of joy will brighten your day.' },
  { icon: '🍂', text: 'Pusiel says change is near — embrace it with warm curiosity.' },
  { icon: '🧡', text: 'Pusiel says someone will appreciate your true self today.' },
  { icon: '🎨', text: 'Pusiel says creativity is flowing; let your ideas take shape.' },
];

const cat = document.getElementById('cat');
const message = document.getElementById('fortuneMessage');

cat.addEventListener('click', () => {
  const fortune = fortunes[Math.floor(Math.random() * fortunes.length)];
  message.textContent = fortune.text;
});
