const checkpoint = 300;
 
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  
    opacity = 1 - (currentScroll / checkpoint)*0.1;
  document.querySelector(".body1").style.opacity = opacity;
  document.querySelector("header").style.opacity = 1;}

);