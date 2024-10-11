export function changeLogo(visit = true) {
  console.log(visit);

  const container = document.getElementById("smalltext");

  if (visit === false) {
    container.style.display = "none";
  } else {
    container.style.display = "block";
  }

  const logo = document.getElementById("logo-fixed");
  if (logo) {
    if (visit === false) {
      logo.setAttribute("src", "./assets/images/logo-white.png");
      console.log("Logo changes to white");
    }
    if (visit === true) {
      logo.setAttribute("src", "./assets/images/Logo.png");
      console.log("Logo changes to default");
    }
  } else {
    throw Error("element not found in logos");
  }
}
function calculateScrollPercentage() {
  const scrollTop = window.screenY || document.documentElement.scrollTop;
  const scrollHeight =
    document.documentElement.scrollHeight - window.innerHeight;
  return (scrollTop / scrollHeight) * 100;
}

export function onScrollImageScale() {
  document.addEventListener("touchmove", () => {
    let scrollPercentage = calculateScrollPercentage();
    console.log(scrollPercentage);
    const trigger = 10;

    const content = document.getElementsByClassName("heading-content");
    const image = document.getElementById("tranforming-image");

    if (content && image) {
      if (Math.floor(scrollPercentage) > trigger) {
        console.log(added);
        content[0].classList.add("scrolled-class");
        image.classList.add("scrolled-class");
      } else {
        content[0].classList.remove("scrolled-class");
        image.classList.remove("scrolled-class");
      }
    }
    // console.log(Math.floor(scrollPercentage) > trigger);
  });
}
import { changeLogo } from "./counter.js";
import { onScrollImageScale } from "./counter.js";

const pages = document.querySelectorAll("section");

function isPresent(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function checkSectioninView() {
  pages.forEach((element) => {
    if (isPresent(element)) {
      console.log(element.id);
      taskInitiater(element.id);
    }
  });
}

// Call the function to check which section is in view
document.addEventListener("touchmove", checkSectioninView);

function taskInitiater(id) {
  switch (id) {
    case "sec-zero":
      changeLogo(true);
      break;

    case "sec-one":
      changeLogo(false);
      onScrollImageScale();
      break;

    case "sec-two":
      // Add any specific logic for sec-two if needed
      break;

    default:
      changeLogo(false); // In case no sections are in view, keep logo default
  }
}
