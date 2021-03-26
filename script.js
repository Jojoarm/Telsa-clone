const menuToggle = document.querySelector('#mobile-menu')
const menu = document.querySelector('.menu__container')
const menuRes1 = document.querySelector('.header__models-res1')
const moreOptions = document.querySelector('.header__link-more')
const lessOptions = document.querySelector('.header__links-less')
const moreMenu = document.querySelector('.menu__container-more')
const mobileMenu = document.querySelector('.menu__container-mobile')

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('is-active')
    menu.classList.toggle('show__menu')
    menuRes1.classList.toggle('show__menu')
    mobileMenu.classList.toggle('show__menu')
})

moreOptions.addEventListener('click', () => {
    menuRes1.classList.add('show__less')
    moreMenu.classList.remove('show__less')
    moreMenu.classList.add('show__menu')
} )

lessOptions.addEventListener('click', () => {
    menuRes1.classList.remove('show__less')
    moreMenu.classList.remove('show__menu')
    moreMenu.classList.add('show__less')
} )