function menuMobile() {
  const menuMobile = document.querySelector('.fa-bars')
  const menuNav = document.querySelector('.header__menu')

  menuMobile.addEventListener('click', function(){
    menuMobile.classList.toggle('fa-times')
    menuNav.classList.toggle('active')
  })
}
menuMobile()