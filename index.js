const preloader = $('#preloader');
setTimeout(() => {
  preloader.addClass('fade-out');
  setTimeout(() => {
    preloader.css('display', 'none');
  }, 1000);
}, 1800);

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
  if($('.other').height() != 0) {
    $('.other').height(0);
  } else {
    $('.other').height('auto');
  }
}); 


function resizeInput() {
    let input = document.getElementById("email");
    let width = input.value.length * 8 + 8; 
    input.style.width = width + "px";
}