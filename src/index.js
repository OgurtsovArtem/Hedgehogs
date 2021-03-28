/* eslint-disable max-len */
import './index.css';
import './images/icons/_sprite.svg';

// TEMPORARY CODE
//= ===================================================================================================================================
// HEADER
//= ===================================================================================================================================
const headerButton = document.querySelector('.button__burger');

const navigation = document.querySelector('.header__nav');

const buttonSubOpen = [...document.querySelectorAll('.header__button-arrow')];

function openSubMenu(e) {
  e.target.parentElement.classList.toggle('active');
}

(function addListener() {
  if (buttonSubOpen.lingth !== 0) {
    buttonSubOpen.forEach((item) => {
      item.addEventListener('click', openSubMenu);
    });
  }
}());

function openMenu() {
  headerButton.classList.toggle('active');
  navigation.classList.toggle('active');
  document.body.classList.toggle('fixed');
}

headerButton.addEventListener('click', openMenu);
//= ===================================================================================================================================
// SLIDER
//= ===================================================================================================================================
const slides = document.querySelector('.slider__card');
const container = document.querySelector('.slider__cards');
const buttonBack = document.querySelector('.button__back');
const buttonNext = document.querySelector('.button__next');

const cardWidth = slides.offsetWidth;

function nextSlide() {
  container.scrollLeft += cardWidth;
}
function previousSlide() {
  container.scrollLeft -= cardWidth;
}

buttonNext.addEventListener('click', nextSlide);
buttonBack.addEventListener('click', previousSlide);

// HEADER
//= ===================================================================================================================================
// Для управления меню выбираем класс [.header__nav] добваляем ему active.
// Для управления бургером выбираем класс [.button__burger] добваляем ему active.

// Чтобы при клике на стрелку открывалось подменю выбираем все кнопки с классом [.header__button-arrow] и добавляем класс active РОДИТЕЛЬСКОМУ(.parentElement) элементу.
// Также меню открывается при наведении, но на текущий момент это просто заглушка и hover повешан на id конкретного блока.
//= ===================================================================================================================================

// SLIDER
//= ===================================================================================================================================
// Для [.slider__container] есть возможность скрыть кнопки и принять вид для мобильной версии для этого нужно добавить класс _phoneScreen =>
// [.slider__container._phoneScreen] или добавить  _phoneScreen тегу body, перед этим разкомментируйте код в файле slider__container.
// Сейчас сотит заглушка на 920px

// /* Добавить отрисовку ifnfo компонентов при мобильной версии */
// /* Анимировать слайдер для pc */
// /* Добивить возмомжность скролить хедер и фиксировать страницу при открытии навигации */
//= ===================================================================================================================================
