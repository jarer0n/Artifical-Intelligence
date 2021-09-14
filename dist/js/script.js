;
let isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};;

//!BURGER                            //

const iconMenu = document.querySelector('.menu_icon');
const menuBody = document.querySelector('.menu_body');
if(iconMenu){
    iconMenu.addEventListener("click", function(e){
        document.body.classList.toggle('lock');
        iconMenu.classList.toggle('active');
        menuBody.classList.toggle('active');
    })
}

//TODO SWIPER.................................///
const swiper = new Swiper('.swiper',{
    slidesPerView: 1,
    spaceBetween: 30,
    grabCursor: true,
    autoheight: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints:{
        
        640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          900: {
              slidesPerView: 2,
              spaceBetween: 15,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1600: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
      },
});