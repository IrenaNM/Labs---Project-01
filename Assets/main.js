$(document).ready(function () {
  $("html, body").scrollTop(0);
  $(window).on("load", function () {
    setTimeout(function () {
      $("html, body").scrollTop(0);
    }, 0);
  });
});

// BURGER MENU

const burger = document.querySelector("#burger");
const menu = document.querySelector(".nav-menu");
const links = document.querySelectorAll(".nav-menu ul li a");
const buttonLink = document.querySelector(".btn-close");

//  |Toggle Menu
function toggleMenu() {
  burger.classList.toggle("active");
  menu.classList.toggle("active");
}

// Close Menu on Click
function closeMenu() {
  burger.classList.toggle("active");
  menu.classList.toggle("active");
}

links.forEach((link) => {
  link.addEventListener("click", closeMenu);
});
burger.addEventListener("click", toggleMenu);
buttonLink.addEventListener("click", closeMenu);

// //////////////////////////////////////////////////////////// //

// DROPDOWN MENU

const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");
const optionsList = document.querySelectorAll(".option");
const selectDiv = document.querySelector(".select-box");

// Open dropdown content on click
if (selected) {
  selected.addEventListener("click", () => {
    optionsContainer.classList.toggle("active");
  });
}
// Add selected
optionsList.forEach((o) => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");
  });
});
// Close dropdown content on click outside
window.addEventListener("click", function (e) {
  if (!selectDiv.contains(e.target)) {
    selectDiv.querySelector(".options-container").classList.remove("active");
  }
});

// CARDS
let cardsContainer = document.querySelector("#renderCards");

function createCard(card) {
  return `<div id="${card.id}" class="six-all six-${card.category} six-card bg-white">
          <div class="flip-inner">
            <a href="${card.href}" target="_blank">
            <div class="flip-front">
              <div class="six-photo">
                <img class="imgg" src="Images/${card.img}.jpg" alt="Image Project">              
              </div>
              <div class="six-body">
                <span class="yellow bold primary">Академија за ${card.category}</span>
                <h3 class="bold">${card.title}</h3>
                <p>${card.description}</p>
                <p class="date bold">Април-Октомври 2019</p>
              </div>
            </div>
            <div class="flip-back">
              <div class="relative-flip">
                <img src="Images/${card.img}.jpg" alt="Image Project">
              <p class="yellow bold primary category-flip">Академија за ${card.category}</p>
              <button class="btn btn-dangerrr white more-btn bold">Дознај повеќе</button>
              </div>
            </div>
            </a>  
          </div>             
          </div>`;
}

brainsterCards.forEach((card) => {
  cardsContainer.innerHTML += createCard(card);
});

// CARDS FILTER

const allCards = document.querySelectorAll(".six-all");
const marketing = document.getElementsByClassName("six-Маркетинг");
const programming = document.getElementsByClassName("six-Програмирање");
const design = document.getElementsByClassName("six-Дизајн");

const btnMarketing = document.querySelector(".button-marketing");
const btnProgramming = document.querySelector(".button-programming");
const btnDesign = document.querySelector(".button-design");

function showDesignCards() {
  for (let i = 0; i < allCards.length; i++) {
    allCards[i].style.display = "none";
  }
  for (let i = 0; i < design.length; i++) {
    design[i].style.display = "block";
  }
}
function showProgrammingCards() {
  for (let i = 0; i < allCards.length; i++) {
    allCards[i].style.display = "none";
  }
  for (let i = 0; i < programming.length; i++) {
    programming[i].style.display = "block";
  }
}
function showMarketingCards() {
  for (let i = 0; i < allCards.length; i++) {
    allCards[i].style.display = "none";
  }
  for (let i = 0; i < marketing.length; i++) {
    marketing[i].style.display = "block";
  }
}

btnDesign.addEventListener("click", showDesignCards);
btnProgramming.addEventListener("click", showProgrammingCards);
btnMarketing.addEventListener("click", showMarketingCards);

// BUTTONS

toggleItem(document.querySelectorAll(".button-btn"));
function toggleItem(elem) {
  for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener("click", function (e) {
      let current = this;
      for (let i = 0; i < elem.length; i++) {
        if (current != elem[i]) {
          elem[i].classList.remove("active");
        } else if (current.classList.contains("active") === true) {
          current.classList.remove("active");
          // Show cards on clik
          for (let i = 0; i < allCards.length; i++) {
            allCards[i].style.display = "block";
          }
        } else {
          current.classList.add("active");
        }
      }
      e.preventDefault();
    });
  }
}

// ONTOP BUTTON

$(window).scroll(function () {
  if ($(this).scrollTop() > 240) {
    $("#scroll-top-button").fadeIn();
  } else {
    $("#scroll-top-button").fadeOut();
  }
});

$("#scroll-top-button").click(function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, 100);
});

// PAGNATION

let resizeTimer;
// On window resize
$(window).resize(function (e) {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function () {
    executeForMobile();
    // check every 250ms
  }, 250);
});
executeForMobile();

function executeForMobile() {
  // if window width is smaller than 991px
  if ($(window).width() <= 991) {
    $(".six-all").hide();
    // show only 6
    $(".six-all").slice(0, 6).show();
    $("#loadMore").on("click", function (e) {
      e.preventDefault();
      // with click on button show 6 more
      $(".six-all:hidden").slice(0, 6).show();
      // if none left hide button
      if ($(".six-all:hidden").length == 0) {
        $("#loadMore").fadeOut();
      }
    });
  } else {
    $(".six-all").show();
  }
}
