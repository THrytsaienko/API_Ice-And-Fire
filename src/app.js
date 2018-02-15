// https://anapioficeandfire.com/

import {
	http
} from './http';
import {
	ui
} from './ui';


document.querySelector('.books').addEventListener('click', getBooks);
document.querySelector('.characters').addEventListener('click', getCharacters);
document.querySelector('.houses').addEventListener('click', getHouses);
document.querySelector('.navbar-brand').addEventListener('click', clearResults);
// document.querySelector('.arrow-up').addEventListener('click', scrollToTop);

function getBooks() {
	ui.clearResults();
	http.get('https://www.anapioficeandfire.com/api/books?&pageSize=15')
		.then(data => ui.showBooks(data))
		.catch(err => console.log(err));
};

function getCharacters() {
	ui.clearResults();
	http.get('https://www.anapioficeandfire.com/api/characters?page=7&pageSize=20')
		// .then(data => console.log(data))
		.then(data => ui.showCharacters(data))
		.catch(err => console.log(err));
};

function getHouses() {
	ui.clearResults();
	http.get('https://www.anapioficeandfire.com/api/houses?page=3&pageSize=20')
		// .then(data => console.log(data))
		.then(data => ui.showHouses(data))
		.catch(err => console.log(err));
};

function clearResults(e) {
	ui.clearResults();
	e.prevebtDefault();
}

$("a[href='#top']").click(function () {
	$("html, body").animate({
		scrollTop: 0
	}, 5000);
	return false;
});


// function scrollToTop() {
// 	window.setInterval(function () {
// 		var pos = window.pageYOffset;
// 		if (pos > 0) {
// 			window.scrollTo(0, pos - 20); // how far to scroll on each step
// 		} else {
// 			window.clearInterval(scrollToTop);
// 		}
// 	}, 40); // how fast to scroll (this equals roughly 60 fps)
// }



$(function () {
	TweenMax.staggerFrom('.box', 1.5, {
		x: '-=2000',
		ease: Power2.easeOut
	}, .1);
})

$(function () {
	TweenMax.from('.all-btn', 1.5, {
		y: '-=1000',
		ease: Power2.easeOut
	}, .1);
})

$('.books').click(function () {
	let tl = new TimelineMax()
		.from($('#books'), .5, {
			x: '-=3000',
			ease: Power2.easeOut
		})
		.to($('#books'), .5, {
			x: '+=250',
			ease: Power2.easeOut
		})
		.to($('#books'), .5, {
			x: '0',
			ease: Power2.easeOut
		})
})

$('.characters').click(function () {
	let tl = new TimelineMax()
		.from($('#characters'), .5, {
			x: '+=3000',
			ease: Power2.easeOut
		})
		.to($('#characters'), .5, {
			x: '-=250',
			ease: Power2.easeOut
		})
		.to($('#characters'), .5, {
			x: '0',
			ease: Power2.easeOut
		})
})

$('.houses').click(function () {
	TweenMax.from('#houses', 1, {
		y: '+=1000',
		ease: Power2.easeOut
	}, .1);
})
