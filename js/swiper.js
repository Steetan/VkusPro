Swiper.use([Navigation.Pagination])

const swiperWorks = new Swiper('.swiper-works', {
	loop: true,
	slidesPerView: document.documentElement.clientWidth > 580 ? 2 : 1,
	spaceBetween: 10,

	pagination: {
		el: '.swiper-pagination',
		clickable: 'true',
	},

	autoplay: {
		delay: 4000,
		disableOnInteraction: false,
	},

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
})

const swiperThanks = new Swiper('.swiper-thanks', {
	loop: true,

	pagination: {
		el: '.swiper-pagination',
		clickable: 'true',
	},

	autoplay: {
		speed: 500,
		delay: 6000,
		disableOnInteraction: true,
	},

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
})
