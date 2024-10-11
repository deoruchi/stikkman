const pages = document.querySelectorAll(".view");

export function isPresent(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

export function changeLogo(visit = true) {
  console.log(visit);

  const container = document.getElementById("smalltext");
  const logo = document.getElementById("logo-fixed");
  const menu_bar = document.getElementById("menu");
  if (logo && container) {
    if (visit === false) {
      console.log("logo c");
      logo.setAttribute("src", "./assets/images/logo-white.png");
      container.style.display = "none";
      menu_bar.classList.add("visible");
    }
    if (visit === true) {
      logo.setAttribute("src", "./assets/images/Logo.png");
      container.style.display = "block";
      menu_bar.classList.remove("visible");
    }
  }
}

function checkSectionisPresent() {
  pages.forEach((page) => {
    if (isPresent(page)) {
      console.log(true, page.id);
      taskInitiater(page.id);
    }
  });
}

function setLabelImage() {
  iconLabel.forEach((element) => {
    element.style.display = "none";
  });
  imageContact.forEach((element) => {
    element.style.width = "30%";

    element.style.margin = "5px";
  });
  contactFloat.style.right = "10%";
  contactFloat.style.paddingInline = "0px";
  contactFloat.style.borderRadius = "5px";
  contactFloat.style.width = "80px";
}
function resetLabelImage() {
  iconLabel.forEach((element) => {
    element.style.display = "block";
  });
  imageContact.forEach((element) => {
    element.style.width = "15%";
    element.style.margin = "10px";
  });
  contactFloat.style.right = "20%";
  contactFloat.style.paddingInline = "5px";
  contactFloat.style.borderRadius = "50px";
  contactFloat.style.width = "100%";
}

const iconLabel = document.querySelectorAll(".icon-label");
const imageContact = document.querySelectorAll(".image-width");
const contactFloat = document.querySelector(".float-contact-container");
function taskInitiater(id) {
  switch (id) {
    case "sec-zero":
      changeLogo(true);
      resetLabelImage();
      break;
    case "sec-one":
      changeLogo(false);
      resetLabelImage();
      break;
    case "sec-two":
      setLabelImage();
      break;
    case "sec-three":
      setLabelImage();
      break;
    case "sec-four":
      setLabelImage();
      break;
    default:
      changeLogo(false); // In case no sections are in view, keep logo default
  }
}

document.addEventListener("scroll", checkSectionisPresent);
