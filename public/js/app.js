let hamburgerIcon = document.querySelector("#hamburger-icon");
let headerResponsiveMenuTopClose = document.querySelector("#header-responsive-menu-top-close");
let headerResponsiveMenu = document.querySelector("#header-responsive-menu");

hamburgerIcon.addEventListener("click", function () {
  headerResponsiveMenu.classList.remove("-left-full");
  headerResponsiveMenu.classList.add("left-0");
});

headerResponsiveMenuTopClose.addEventListener("click", function () {
  headerResponsiveMenu.classList.add("-left-full");
  headerResponsiveMenu.classList.remove("left-0");
});

let featuresLink = document.querySelectorAll("#features-link");
let featuresSectionContainer = document.querySelectorAll("#features-section-container");

featuresLink.forEach(function (item, index) {
  item.addEventListener('click', function () {
    featuresLink.forEach(function (item, index) {
      item.classList.remove("border-[#FA5959]");
      featuresSectionContainer[index].classList.remove("flex")
      featuresSectionContainer[index].classList.add("hidden")
    });

    item.classList.add("border-[#FA5959]")
    featuresSectionContainer[index].classList.add("flex")
    featuresSectionContainer[index].classList.remove("hidden")
  })
})

let questionItemTop = document.querySelectorAll("#question-item-top")
let questionItemText = document.querySelectorAll("#question-item-text")
let questionItemTitle = document.querySelectorAll("#question-item-title")
let questionBtn = document.querySelectorAll("#question-btn")
let rotate = document.querySelectorAll(".rotate")
let color = document.querySelectorAll(".color")
let blue = document.querySelectorAll(".blue")


questionItemTop.forEach(function (item, index) {
  item.addEventListener('click', function () {
    questionItemText[index].classList.toggle("max-h-[0px]")
    questionItemText[index].classList.toggle("max-h-[200px]")
    questionItemTitle[index].classList.toggle("text-[#FA5959]")
    questionItemTitle[index].classList.toggle("text-[#242A45]")
  })
})
questionItemTop.forEach(function (app, main) {
  app.addEventListener('click', function () {
    questionBtn[main].classList.toggle("rotate")
    questionBtn[main].classList.toggle("#question-btn")
    questionBtn[main].classList.toggle("text-[#5267DF]")
    questionBtn[main].classList.toggle("text-[#FA5959]")
    questionBtn[main].classList.add("color")
    questionBtn[main].classList.remove("blue")
  })
})