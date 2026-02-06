const mobileMenu = document.querySelector('.mobile-menu');
const menuBtnOpen = document.querySelector('.menu-btn-open');
const menuBtnClose = document.querySelector('.menu-btn-close');
// Вибираємо всі посилання в меню
const menuLinks = document.querySelectorAll('.mobile-menu__link');

const toggleMenu = () => {
  mobileMenu.classList.toggle('is-open');
  document.body.classList.toggle('is-scroll-disabled');
};

// Відкриття та закриття по кнопках
menuBtnOpen.addEventListener('click', toggleMenu);
menuBtnClose.addEventListener('click', toggleMenu);

// Закриття меню при натисканні на будь-яке посилання
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('is-open');
    document.body.classList.remove('is-scroll-disabled');
  });
});
