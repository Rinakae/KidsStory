 const videoSlider = new Swiper('.swiper', {   
  loop: true,
  centeredSlides: true,
  slidesPerView: 3,  

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    speed: 1000,
  },

  speed: 1000, 

 
});

export default videoSlider;