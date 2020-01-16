var text = document.getElementById("text");
var pixel = document.getElementById("pixel");
var pixelSlide = document.getElementById("pixelSlide");
var input = document.getElementById("sample");
input.addEventListener("input", function() {
  if (input.value == "") {
    text.innerHTML = "Hello World!";
  } else {
    text.innerHTML = input.value;
  }
});

pixelSlide.addEventListener("input", function() {
  pixel.value = pixelSlide.value;
});

pixel.addEventListener("input", function() {
  pixelSlide.value = pixel.value;
});
