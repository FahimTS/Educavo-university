setInterval(function() {
    if(document.getElementsByClassName('slider-img')[0].classList.contains('active')){
        document.getElementsByClassName('slider-img')[1].classList.add('active');
        document.getElementsByClassName('slider-img')[0].classList.remove('active');
    }else if(document.getElementsByClassName('slider-img')[1].classList.contains('active')){
        document.getElementsByClassName('slider-img')[0].classList.add('active');
        document.getElementsByClassName('slider-img')[1].classList.remove('active');
    }
},5000)

window.addEventListener('scroll', function(){
    let header = this.document.querySelector('.primanyMenu');
    header.classList.toggle('sticky', this.window.scrollY > 0);
});

// scroll up top button
$(document).ready( function(){

    $(window).scroll(function(){
      if($(this).scrollTop() > 40){
        $('.angle-arrow').fadeIn();
      }else{
        $('.angle-arrow').fadeOut();
      }
    });
  
    $('.angle-arrow').click(function(){
      $('html, body').animate({scrollTop : 0}, 800);
    });
  });

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