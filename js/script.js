/* Скрипт слайдера */
const slider = tns({
	container: '.gallery_slide',
	items: 2,
	slideBy: 'page',
	controls: false,
	navPosition: "bottom",
	speed: 1500,
	responsive: {
		340: {
			items: 1,
		},
		470: {
			nav: true,
		},
		767: {
			items: 2,
			nav: true,
		}
	}
});

document.querySelector('.prev').addEventListener('click', function () {
	slider.goTo('prev');
});
document.querySelector('.next').addEventListener('click', function () {
	slider.goTo('next');
});

const nextSlider = tns({
	container: '.feedback__slider',
	items: 1,
	slideBy: 'page',
	controls: false,
	navPosition: "bottom",
	speed: 1500,
	nav: false
});

document.querySelector('.left').addEventListener('click', function () {
	nextSlider.goTo('prev');
});
document.querySelector('.right').addEventListener('click', function () {
	nextSlider.goTo('next');
});


window.addEventListener('DOMContentLoaded', () => {
	const menu = document.querySelector('.nav__list'),
		menuItem = document.querySelectorAll('.menu_item'),
		hamburger = document.querySelector('.hamburger');

	hamburger.addEventListener('click', () => {
		hamburger.classList.toggle('hamburger_active');
		menu.classList.toggle('nav__list_active');
	});

	menuItem.forEach(item => {
		item.addEventListener('click', () => {
			hamburger.classList.toggle('hamburger_active');
			menu.classList.toggle('nav__list_active');
		})
	})
})
