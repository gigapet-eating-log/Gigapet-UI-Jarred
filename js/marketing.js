/*js*/

const mainContent = document.querySelector(".main-content");

const learnMore = document.querySelector(".learn-more");

const childHealthfacts = document.querySelector(".child-healthfacts");

const footer = document.querySelector("footer");

//When Learn More button is pressed, main-content is revealed and the page is scrolled to the content.
learnMore.addEventListener("click", function() {
  mainContent.style.display = "flex";
  footer.style.display = "flex";
  mainContent.scrollIntoView({
    behavior: "smooth"
  });
});
