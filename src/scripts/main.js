'use strict';

const menuOpen = document.querySelector('.header__menu');
const nav = document.querySelector('.page__nav');
const menuClose = document.querySelector('.nav__close-btn');
const navLink = document.querySelector('.nav__list');

document.addEventListener('DOMContentLoaded', function() { // Аналог $(document).ready(function(){
  // Если должен быть найден один элемент
  nav.setAttribute('hidden', true);
});

menuOpen.addEventListener('click', () => {
  nav.removeAttribute('hidden');
  nav.classList.add('page__nav-is-active');
});

menuClose.addEventListener('click', () => {
  nav.classList.remove('page__nav-is-active');
});

navLink.addEventListener('click', () => {
  nav.classList.remove('page__nav-is-active');
});

const form = document.querySelector('.contact-form');
const inputs = document.querySelectorAll('.contact-form__input');
const textarea = document.querySelector('.contact-form__textarea');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  for (const input of inputs) {
    input.value = '';
  }

  textarea.value = '';
});
