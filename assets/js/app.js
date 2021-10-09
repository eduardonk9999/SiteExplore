function menuMobile() {
  const menuMobile = document.querySelector('.fa-bars')
  const menuNav = document.querySelector('.header__menu')

  menuMobile.addEventListener('click', function(){
    menuMobile.classList.toggle('fa-times')
    menuNav.classList.toggle('active')
  })
}
menuMobile()

const windowHeight = window.innerHeight * 0.5;

function animationScrollLeft() {
  const intensScroll = document.querySelectorAll('.js-scroll')
  intensScroll.forEach((item) => {
    const sectionTopPostionWindow = item.getBoundingClientRect().top
    const sectionActive = (sectionTopPostionWindow - windowHeight) < 0;

   if(sectionActive) {
     item.classList.add('active')
   }
  })
}
window.addEventListener('scroll', animationScrollLeft)

function animationScrollRight() {
  const intensScroll = document.querySelectorAll('.js-scroll-right')
  intensScroll.forEach((item) => {
    const sectionTopPostionWindow = item.getBoundingClientRect().top
    const sectionActive = (sectionTopPostionWindow - windowHeight) < 0;

   if(sectionActive) {
     item.classList.add('active')
   }
  })


}

window.addEventListener('scroll', animationScrollRight)