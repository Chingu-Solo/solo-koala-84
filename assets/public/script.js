// Makes cards
var main = document.getElementById("main");

var fonts = [
  {
    name: "Georgia",
    creator: "Microsoft Corporation"
  },
  {
    name: "Palatino",
    creator: "Linotype"
  },
  {
    name: "Times New Roman",
    creator: "Monotype"
  },
  {
    name: "Arial",
    creator: "Monotype"
  },
  {
    name: "Arial Black",
    creator: "Monotype"
  },
  {
    name: "Comic Sans MS",
    creator: "Microsoft Corporation"
  },
  {
    name: "Impact",
    creator: "URW++"
  },
  {
    name: "Lucida Sans",
    creator: "Monotype"
  },
  {
    name: "Tahoma",
    creator: "Microsoft Corporation"
  },
  {
    name: "Trebuchet MS",
    creator: "Microsoft Corporation"
  },
  {
    name: "Verdana",
    creator: "Microsoft Corporation"
  },
  {
    name: "Courier New",
    creator: "Microsoft Corporation"
  },
  {
    name: "Lucida Console",
    creator: "Monotype"
  }
];

for (var i = 0; i < fonts.length; i++) {
  var e = document.createElement("div");
  e.setAttribute("class", "card flex");
  e.innerHTML = `<div style="width: 80%;"><h3 class="name" style="margin: 1em 0 0 0;">${fonts[i].name}</h3></div><div style="width: 20%"><a href="#" class="button"><i class="fas fa-plus-circle"></i></a></div><div style="width: 100%;"><h5 style="margin: 1em 0 0 0;">${fonts[i].creator}</h5></div><div> <h1 class="example-text" style="font-family:${fonts[i].name};">The quick brown fox.</h1></div>`;
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

  text.forEach(function(e) {
    e.style.fontSize = pixelSlide.value + "px";
  });
});

pixel.addEventListener("input", function() {
  pixelSlide.value = pixel.value;

  text.forEach(function(e) {
    e.style.fontSize = pixel.value + "px";
  });
});

// Search

var search = document.getElementById("search");
var titles = document.querySelectorAll(".name");
var cards = document.querySelectorAll(".card");

var txtValue;

search.addEventListener("input", function() {
  for (i = 0; i < titles.length; i++) {
    var selectedTitle = titles[i];
    console.log(
      selectedTitle.innerText.toUpperCase().includes(search.value.toUpperCase())
    );

    if (
      selectedTitle.innerText.toUpperCase().includes(search.value.toUpperCase())
    ) {
      cards[i].style.display = "";
    } else if (search.value === "") {
      cards.style.display = "";
    } else {
      cards[i].style.display = "none";
    }
  }
});
