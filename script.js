const navToggle = document.querySelector('.mobile-nav-toggle');
const primaryNav = document.querySelector('.primary-navigation');

navToggle.addEventListener('click', () => {
  const isVisible = primaryNav.getAttribute('data-visible') === 'true';

  navToggle.setAttribute('aria-expanded', String(!isVisible));

  if (isVisible) {
    primaryNav.removeAttribute('data-visible');
  } else {
    primaryNav.setAttribute('data-visible', 'true');
  }
});


//carousel

const carousel = document.querySelector('.customers__list');
const [prevBtn, nextBtn] = document.querySelectorAll('.customers__arrow');

function getScrollAmount() {
  const item = carousel.querySelector('.customers__item');
  if (!item) return 0;
  const gap = parseFloat(getComputedStyle(carousel).gap) || 0;
  return item.getBoundingClientRect().width + gap;
}

function updateButtons() {
  const { scrollLeft, scrollWidth, clientWidth } = carousel;
  prevBtn.disabled = scrollLeft <= 1;
  nextBtn.disabled = scrollLeft + clientWidth >= scrollWidth - 1;
}

prevBtn.addEventListener('click', () => {
  carousel.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
});

nextBtn.addEventListener('click', () => {
  carousel.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
});


carousel.addEventListener('scroll', updateButtons, { passive: true });
window.addEventListener('resize', updateButtons);


updateButtons();