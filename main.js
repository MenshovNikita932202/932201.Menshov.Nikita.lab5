'use strict'; ///строгий режим в js 

const buttons = document.querySelectorAll('.button');
const overlay = document.querySelector('.popup-bg');
const popup = document.querySelector('.popup');
const popupTitle = document.querySelector('.popup-title');
const popupText = document.querySelector('.popup-text');

buttons.forEach(b => b.addEventListener('click', e => {
  const target = e.target.closest('.box');

  const title = target.querySelector('.box-title').textContent;
  const text = target.querySelector('.box-text').textContent;

  popupTitle.querySelector('h2').textContent = title;
  popupText.textContent = text;

  overlay.classList.add('popup-bg--active');
  popup.classList.add('popup--active');
}));

overlay.addEventListener('click', e => {
  const target = e.target.closest('.popup'); /// Ищет поиск в верх по классам

  if (target) return;

  overlay.classList.remove('popup-bg--active');
  popup.classList.remove('popup--active');
});