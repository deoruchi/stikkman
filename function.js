// Intersection observer for sec-one
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target.id === "sec-one") {
          transformImage(true); // Trigger image transformation
        }
      } else {
        if (entry.target.id === "sec-one") {
          transformImage(false); // Reset image transformation
        }
      }
    });
  },
  {
    threshold: 1, // Trigger when 50% of the section is visible
  }
);

// Observe sec-one
const sectionOne = document.getElementById("sec-one");
const sectionOneContent = document.querySelector(".sec-two-content");
observer.observe(sectionOne);

// Image transformation logic
function transformImage(isInView) {
  const image = document.getElementById("transform-image");
  if (isInView) {
    image.style.transition = "transform 0.5s ease-in-out 0.3s"; // Delay transformation
    image.style.transform = "scale(1) translateY(-100px)";
    sectionOneContent.style.opacity = 0.2;
  } else {
    image.style.transition = "transform 0.5s ease-in-out"; // Reset transformation
    image.style.transform = "scale(1) translateY(-50px)";
    sectionOneContent.style.opacity = 1;
  }
}

// Intersection observer for sec-three
const observer2 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target.id === "sec-three") {
          showImage(); // Show image
        }
      } else {
        if (entry.target.id === "sec-three") {
          hideImage(); // Hide image
        }
      }
    });
  },
  {
    threshold: 0, // Trigger when the section is visible
  }
);

// Observe sec-three
const sectionThree = document.getElementById("sec-three");
observer2.observe(sectionThree);
const image = document.querySelector(".image-1");

// Show and hide image functions
function showImage() {
  if (image) {
    image.classList.add("visible-image");
  }
}

function hideImage() {
  if (image) {
    image.classList.remove("visible-image");
  }
}
