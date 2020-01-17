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
  e.innerHTML = `<div style="width: 80%;"><h3 class="name" style="margin: 1em 0 0 0;">${fonts[i].name}</h3></div><div style="width: 20%"><a href="#" class="button"><i class="fas fa-plus-circle"></i></a></div><div style="width: 100%;"><h5 style="margin: 1em 0 0 0;">${fonts[i].creator}</h5></div><div class="card-child"> <h1 class="example-text" style="font-family:${fonts[i].name}; font-size: 40px;">The quick brown fox.</h1></div>`;
  main.appendChild(e);
}

// Change text with the sample text
var input = document.getElementById("sample");
var text = document.querySelectorAll(".example-text");

input.addEventListener("input", function() {
  exampleFunction();
});

// Link pixel size number with slider
var pixel = document.getElementById("pixel");
var pixelSlide = document.getElementById("pixelSlide");

pixelSlide.addEventListener("input", function() {
  slideToPixel();
});

pixel.addEventListener("input", function() {
  pixelToSlide();
});

// Search

var search = document.getElementById("search");
var titles = document.querySelectorAll(".name");
var cards = document.querySelectorAll(".card");

search.addEventListener("input", function() {
  searchFunction();
});

// Reset button

var reset = document.getElementById("reset");

reset.addEventListener("click", function() {
  exampleFunction(reset);
  pixelToSlide(reset);
  slideToPixel(reset);
  searchFunction(reset);
  layoutFunction(reset);
});

// Change layout

var layout = document.getElementById("layout");

layout.addEventListener("click", function() {
  layoutFunction();
});

// Night mode

var body = document.body;
var nightMode = document.getElementById("night-mode");

nightMode.addEventListener("click", function() {
  darkModeFunction();
});

// Back to top

var topButton = document.getElementById("backtotop_js");

document.addEventListener("scroll", function() {
  backToTop();
});

function backToTop() {
  if (window.pageYOffset > 100) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}

topButton.onclick = function() {
  document.documentElement.scrollTop = 0;
};

// Functions

function exampleFunction(reset) {
  if (!reset) {
    text.forEach(function(e) {
      if (input.value === "") {
        e.innerHTML = "The quick brown fox.";
      } else {
        e.innerHTML = input.value;
      }
    });
  } else {
    input.value = "";
    text.forEach(function(e) {
      e.innerHTML = "The quick brown fox.";
    });
  }
}

function searchFunction(reset) {
  if (!reset) {
    for (i = 0; i < titles.length; i++) {
      var selectedTitle = titles[i];

      if (
        selectedTitle.innerText
          .toUpperCase()
          .includes(search.value.toUpperCase())
      ) {
        cards[i].style.display = "";
      } else if (search.value === "") {
        cards.style.display = "";
      } else if (reset) {
        search.value = "";
        cards.style.display = "";
      } else {
        cards[i].style.display = "none";
      }
    }
  } else {
    search.value = "";
    for (i = 0; i < titles.length; i++) {
      cards[i].style.display = "";
    }
  }
}

function pixelToSlide(reset) {
  if (!reset) {
    pixelSlide.value = pixel.value;
    pixel.value = pixelSlide.value;

    text.forEach(function(e) {
      e.style.fontSize = pixel.value + "px";
    });
  } else {
    pixelSlide.value = 40;
    pixel.value = 40;

    text.forEach(function(e) {
      e.style.fontSize = pixel.value + "px";
    });
  }
}

function slideToPixel(reset) {
  if (!reset) {
    pixel.value = pixelSlide.value;
    text.forEach(function(e) {
      e.style.fontSize = pixel.value + "px";
    });
  } else {
    pixelSlide.value = 40;
    pixel.value = 40;

    text.forEach(function(e) {
      e.style.fontSize = pixel.value + "px";
    });
  }
}

function layoutFunction(reset) {
  if (!reset) {
    if (cards[0].style.width === "90%") {
      cards.forEach(function(e) {
        e.style.width = "27%";
      });

      pixelSlide.value = 40;
      pixel.value = 40;

      text.forEach(function(e) {
        e.style.fontSize = pixel.value + "px";
      });

      layout.innerHTML = `<i class="fas fa-list"></i>`;
    } else {
      cards.forEach(function(e) {
        e.style.width = "90%";
      });

      pixelSlide.value = 64;
      pixel.value = 64;

      text.forEach(function(e) {
        e.style.fontSize = pixel.value + "px";
      });

      layout.innerHTML = `<i class="fas fa-border-all"></i>`;
    }
  } else {
    cards.forEach(function(e) {
      e.style.width = "27%";
    });

    pixelSlide.value = 40;
    pixel.value = 40;

    text.forEach(function(e) {
      e.style.fontSize = pixel.value + "px";
    });

    layout.innerHTML = `<i class="fas fa-list"></i>`;
  }
}

function darkModeFunction() {
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
    nightMode.innerHTML = `<i class="fas fa-moon"></i>`;
  } else {
    body.classList.add("dark");
    nightMode.innerHTML = `<i class="fas fa-sun"></i>`;
  }
}
