var text = document.getElementById("text");
var input = document.getElementById("search");
input.addEventListener("input", function() {
  if (input.value == "") {
    text.innerHTML = "Hello World!";
  } else {
    text.innerHTML = input.value;
  }
});
