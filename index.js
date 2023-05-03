console.clear();
const featuresEl = document.querySelector(".box-wrap");
const featureEls = document.querySelectorAll(".box");

featuresEl.addEventListener("pointermove", (ev) => {
  featureEls.forEach((featureEl) => {
    const rect = featureEl.getBoundingClientRect();
    featureEl.style.setProperty("--x", ev.clientX - rect.left);
    featureEl.style.setProperty("--y", ev.clientY - rect.top);
  });
});

// resize input field
function resizeInput() {
    // Get the input element
    var input = document.getElementById("email");

    // Get the width of the input's value
    var width = input.value.length * 8 + 8; // Adjust the multiplier to fit your font size

    // Set the width of the input element
    input.style.width = width + "px";
}