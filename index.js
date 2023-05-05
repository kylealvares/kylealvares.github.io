AOS.init();

const preloader = $('#preloader');
setTimeout(() => {
  preloader.css('animation', 'fadeOut 1s ease-out');
  setTimeout(() => {
    preloader.hide();
  }, 1000);
}, 1800);

setTimeout(() => {
  $('nav a.box-link').css('transition-delay', '0s');
}, 1000);

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('nav').classList.add('loaded');
});

const featuresEl = document.querySelector(".box-wrap");
const featureEls = document.querySelectorAll(".box");

featuresEl.addEventListener("pointermove", (ev) => {
  featureEls.forEach((featureEl) => {
    const rect = featureEl.getBoundingClientRect();
    featureEl.style.setProperty("--x", ev.clientX - rect.left);
    featureEl.style.setProperty("--y", ev.clientY - rect.top);
  });
});

const showMore = $('#more-experience button');

showMore.click(e => {
  if(showMore.text() === 'Show More') {
    showMore.text('Show Less');
    $('#leadership').slideDown();
  } else {
    showMore.text('Show More');
    $('#leadership').slideUp();
  }
});


function resizeInput() {
  let input = document.getElementById("email");
  let width = input.value.length * 8 + 8;
  input.style.width = width + "px";
}