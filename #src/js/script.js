@@include('alert.js');
@@include('isMobile.js');

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
