document.addEventListener("DOMContentLoaded", function() {
  // Get the learn more buttons
  const learnMoreButtons = document.querySelectorAll(".btn-learn-more");

  // Get the popup elements
  const popupOverlay = document.querySelector(".popup-overlay");
  const popupContent = document.querySelector(".popup-content");
  const popupTitle = document.querySelector("#popup-game-title");
  const popupDescription = document.querySelector("#popup-game-description");
  const galleryPrev = document.querySelector(".gallery-prev");
  const galleryNext = document.querySelector(".gallery-next");
  const galleryImages = document.querySelector(".gallery-images");
  const currentImage = document.querySelector("#gallery-current-image");

  let isPopupOpen = false;

  let currentIndex = 0;
  let galleryImagesArray = [];

  // Add event listener to each learn more button
  learnMoreButtons.forEach(function(button) {
    button.addEventListener("click", function(event) {
      event.preventDefault();
      const game = this.getAttribute("data-game");
      const gameTitle = this.parentNode.getAttribute("data-title");
      const gameDescription = this.parentNode.getAttribute("data-description");
      const gameImages = this.parentNode.querySelectorAll("img");

      // Update the popup content
      popupTitle.innerText = gameTitle;
      popupDescription.innerText = gameDescription;

      // Update the gallery images
      galleryImagesArray = Array.from(gameImages).map(image => image.src);

      // Show the first image in the gallery
      currentIndex = 0;
      showGalleryImage(currentIndex);

      // Show the popup
      popupOverlay.style.display = "block";
      popupContent.style.display = "block";
    });
  });

  

// Close the popup when the close button is clicked
const popupClose = document.querySelector(".popup-close");
popupClose.addEventListener("click", function(event) {
  event.preventDefault();
  closePopup();
});


  function closePopup() {
    popupOverlay.style.display = "none";
    popupContent.style.display = "none";
  }

  // Handle gallery image navigation
  galleryPrev.addEventListener("click", function(event) {
    event.preventDefault();
    currentIndex = (currentIndex - 1 + galleryImagesArray.length) % galleryImagesArray.length;
    showGalleryImage(currentIndex);
  });

  galleryNext.addEventListener("click", function(event) {
    event.preventDefault();
    currentIndex = (currentIndex + 1) % galleryImagesArray.length;
    showGalleryImage(currentIndex);
  });

  // Function to show the current image in the gallery
  function showGalleryImage(index) {
    const prevIndex = (index - 1 + galleryImagesArray.length) % galleryImagesArray.length;
    const nextIndex = (index + 1) % galleryImagesArray.length;

    currentImage.src = galleryImagesArray[index];
    currentImage.classList.add("current-image");

    galleryImages.innerHTML = `
      <img src="${galleryImagesArray[prevIndex]}" alt="" class="prev-image">
      <img src="${galleryImagesArray[nextIndex]}" alt="" class="next-image">
    `;
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-links a');
  const navbarHeight = document.querySelector('header').offsetHeight;

  navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        const targetOffsetTop = target.offsetTop - navbarHeight;
        window.scrollTo({
          top: targetOffsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  // Get the video element
  const video = document.getElementById("mainVideo");

  // Define the range near the end of the video
  const endRange = 0.1; // Adjust this value as needed

  // Seek the video to the desired starting point when it nears the end
  video.addEventListener("timeupdate", function() {
    const remainingTime = video.duration - video.currentTime;
    if (remainingTime <= endRange) {
      video.currentTime = 0.82;
      video.play();
    }
  });

});


const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

  // Function to close the hamburger menu
  function closeHamburgerMenu() {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');

    if (navLinks.classList.contains('open')) {
      navLinks.classList.remove('closed');
    } else {
      navLinks.classList.add('closed');
    }
  }

  // Event listener for hamburger click
  hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');

    if (navLinks.classList.contains('open')) {
      navLinks.classList.remove('closed');
    } else {
      navLinks.classList.add('closed');
    }
  });

  // Event listener for navLinks click
  navLinks.addEventListener('click', function(event) {
    // Check if the clicked element is an anchor tag
    if (event.target.tagName === 'A') {
      // Close the hamburger menu
      closeHamburgerMenu();
    }
});

window.onbeforeunload = () => {
  for(const form of document.getElementsByTagName('form')) {
    form.reset();
  }
}