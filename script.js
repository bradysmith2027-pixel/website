// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.side-nav a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 120) current = s.id;
  });
  navLinks.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
  });
});

// Mobile sidebar toggle
const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');
if (hamburger && sidebar) {
  hamburger.addEventListener('click', e => {
    e.stopPropagation();
    sidebar.classList.toggle('open');
  });
}
function closeSidebar() {
  if (sidebar) sidebar.classList.remove('open');
}

// Close sidebar on outside click (mobile)
document.addEventListener('click', e => {
  if (sidebar && sidebar.classList.contains('open')
      && !sidebar.contains(e.target)
      && !hamburger.contains(e.target)) {
    sidebar.classList.remove('open');
  }
});

// Fade-in on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// Project image switcher
document.querySelectorAll('.project-imgs').forEach(container => {
  const imgs = container.querySelectorAll('.project-img');
  const dots = container.querySelectorAll('.dot');
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      imgs.forEach(img => img.classList.remove('active'));
      dots.forEach(d => d.classList.remove('active'));
      imgs[i].classList.add('active');
      dot.classList.add('active');
    });
  });
});
