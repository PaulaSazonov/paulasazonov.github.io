let toySlideIndex = 1;
const plusToySlides = (dot, slideshow, n) => {
  showToySlides(dot, slideshow, (toySlideIndex += n));
};

const currentToySlide = (dot, slideshow, n) => {
  showToySlides(dot, slideshow, (toySlideIndex = n));
};

const showToySlides = (dot, slideshow, n) => {
  let slideIndex = toySlideIndex;
  showSlides(dot, slideshow, n);
};

const showSlides = (dot, slideshow, n) => {
  slideIndex = n;
  console.log(slideIndex);
  let i;
  const slides = document.getElementsByClassName(slideshow);
  const dots = document.getElementsByClassName(dot);
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
};

let forumSlideIndex = 1;
const plusForumSlides = (dot, slideshow, n) => {
  showForumSlides(dot, slideshow, (forumSlideIndex += n));
};

const currentForumSlide = (dot, slideshow, n) => {
  showForumSlides(dot, slideshow, (forumSlideIndex = n));
};

const showForumSlides = (dot, slideshow, n) => {
    let slideIndex = forumSlideIndex;
    showSlides(dot, slideshow, n);
};

let trainSlideIndex = 1;
const plusTrainSlides = (dot, slideshow, n) => {
  showTrainSlides(dot, slideshow, (trainSlideIndex += n));
};

const currentTrainSlide = (dot, slideshow, n) => {
  showTrainSlides(dot, slideshow, (trainSlideIndex = n));
};

const showTrainSlides = (dot, slideshow, n) => {
    let slideIndex = trainSlideIndex;
    showSlides(dot, slideshow, n);
  };
//   const showSlides = (dot, slideshow, n) => {
//     slideIndex = n;
//     console.log(slideIndex);
//     let i;
//     const slides = document.getElementsByClassName(slideshow);
//     const dots = document.getElementsByClassName(dot);
//     if (n > slides.length) {
//       slideIndex = 1;
//     }
//     if (n < 1) {
//       slideIndex = slides.length;
//     }
//     for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex - 1].style.display = "block";
//     dots[slideIndex - 1].className += " active";
//   };
window.addEventListener(
  "DOMContentLoaded",
  showSlides("dot", "mySlides", 1),
  false
);
window.addEventListener(
  "DOMContentLoaded",
  showSlides("dot2", "mySlides2", 1),
  false
);
window.addEventListener(
  "DOMContentLoaded",
  showSlides("dot3", "mySlides3", 1),
  false
);
const scrollToAbout = () => {
  let el = document.getElementById("whoami");
  el.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
};
const scrollToWorks = () => {
  let el = document.getElementById("works");
  el.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
};
const scrollToTop = () => {
  let el = document.getElementById("navbar");
  el.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
};
