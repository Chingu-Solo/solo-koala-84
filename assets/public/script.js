// Makes cards
var main = document.getElementById("main");

var fontFamilies = ["Georgia", "Palatino Linotype", "Times New Roman"];

for (var i = 0; i < fontFamilies.length; i++) {
  var e = document.createElement("div");
  e.setAttribute("class", "card");
  e.innerHTML = `<div class="title"><h3>${fontFamilies[i]}</h3></div><div class="author"><h5>Author</h5></div><div class="example"> <h1 class="example-text">The quick brown fox.</h1></div>`;
  main.appendChild(e);
}

// Change text with the sample text
var input = document.getElementById("sample");
var text = document.querySelectorAll(".example-text");

input.addEventListener("input", function() {
  text.forEach(function(e) {
    if (input.value === "") {
      e.innerHTML = "The quick brown fox.";
    } else {
      e.innerHTML = input.value;
    }
  });
});

// Link pixel size number with slider
var pixel = document.getElementById("pixel");
var pixelSlide = document.getElementById("pixelSlide");

pixelSlide.addEventListener("input", function() {
  pixel.value = pixelSlide.value;
});

pixel.addEventListener("input", function() {
  pixelSlide.value = pixel.value;
});
