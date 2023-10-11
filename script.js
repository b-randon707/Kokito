
  
  function goToHome() {
    window.location.href = 'index.html';  // Replace 'home.html' with the actual URL of your home page
  }
  
  function goToMenu() {
    window.location.href = 'menu.html';  // Replace 'menu.html' with the actual URL of your menu page
  }
  
  let slideIndex = 0;
  showSlides();
  
  function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slide");
  
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
  
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }    
  
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 3000); // Change image every 4 seconds
  }