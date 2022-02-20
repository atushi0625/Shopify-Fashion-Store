// Put your application javascript here

const swiper = new Swiper('.swiper', {
     // Optional parameters
     direction: 'horizontal',
     autoplay: {
          delay: 4000,
           },

     centeredSlides: true,
     loop: true,
     effect: 'slide',

     // If we need pagination
     pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
     },

     // Navigation arrows
     navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
     },

     // And if we need scrollbar
     scrollbar: {
          el: '.swiper-scrollbar'
     }
})



