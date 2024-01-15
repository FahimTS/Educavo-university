// canvas slide js
let humburger = document.querySelector('.three_dots')
let canvas = document.querySelector(".right_menu_toggle");

humburger.addEventListener('click', () => {
  humburger.classList.toggle('active');
  canvas.classList.toggle('active');
})
document.querySelector('#nav_close').addEventListener('click', () => {
  humburger.classList.remove('active');
  canvas.classList.remove('active');
})
// menu bar
let menu = document.querySelector('.menu');
let rsToggle = document.querySelector('.rs_menu_toggle');

rsToggle.addEventListener('click', () => {
  menu.classList.toggle('activeBar');
  rsToggle.classList.toggle('activeBar');
})