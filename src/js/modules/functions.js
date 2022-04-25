export function isWebp() {
	//проверка поддержки Webp 
	function testWebP(callback) {

		var webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}

	testWebP((support) => {
		let className = support === true ? 'webp' : 'no-webp';
		document.documentElement.classList.add(className);
	})
}


export function ibg() {

	let ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img')) {
			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
		}
	}
}



let header__burger = document.querySelector('.menu__icon');
let header_menu = document.querySelector('.menu__body');
let back = document.querySelector('body');
let header__list = document.querySelector('.menu__list');

header__burger.onclick = function () {
	header__burger.classList.toggle('active');
	header_menu.classList.toggle('active');
	back.classList.toggle('lock');
}

header__list.onclick = function () {
	header__list.classList.remove('active');
	back.classList.toggle('lock');
}