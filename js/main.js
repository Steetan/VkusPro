initMap()

const menuBurger = document.querySelector('.menu-burger')
const menu = document.querySelector('.menu')
const menuLink = document.querySelectorAll('.menu__link')

menuLink.forEach(function (event) {
	event.addEventListener('click', function (e) {
		e.preventDefault()
		if (event.classList.contains('menu__link--about')) {
			menuLinkScroll('.about')
		}
		if (event.classList.contains('menu__link--works')) {
			menuLinkScroll('.works')
		}
		if (event.classList.contains('menu__link--thanks')) {
			menuLinkScroll('.thanks')
		}
		if (event.classList.contains('menu__link--contacts')) {
			menuLinkScroll('.contacts')
		}
	})
})

function menuLinkScroll(link) {
	document.querySelector(link).scrollIntoView({
		behavior: 'smooth',
		block: 'nearest',
	})
	document.querySelector('.menu__list').classList.toggle('menu__list--active')
	document.querySelector('.menu').classList.toggle('menu--active')
	menuBurger.classList.toggle('menu-burger--open')
	menu.classList.contains('menu--active')
}

menuBurger.addEventListener('click', function (e) {
	document.querySelector('.menu').classList.toggle('menu--active')

	document.querySelector('.menu__list').classList.toggle('menu__list--active')

	menuBurger.classList.toggle('menu-burger--open')
})
