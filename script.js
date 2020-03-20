// const MENU = document.getElementById('menu');


// MENU.addEventListener('click', (event) => {   //переключение активного класса для нав бара
//     MENU.querySelectorAll('a').forEach(el => el.classList.remove('selected'));

//     event.target.classList.add('selected');
// })

//============================Screen on and off

const iphoneVert = document.getElementById('iphone_vert');
const blackScreenVert = document.getElementById('vert');
const iphoneHor = document.getElementById('iphone_hor');
const blackScreenHor = document.getElementById('hor');

iphoneVert.addEventListener('click', (event) => {

	blackScreenVert.classList.contains('on') ?
		blackScreenVert.classList.remove('on') :
		blackScreenVert.classList.add('on');

})

blackScreenVert.addEventListener('click', (event) => {

	blackScreenVert.classList.contains('on') ?
		blackScreenVert.classList.remove('on') :
		blackScreenVert.classList.add('on');

})


iphoneHor.addEventListener('click', (event) => {

	blackScreenHor.classList.contains('on') ?
		blackScreenHor.classList.remove('on') :
		blackScreenHor.classList.add('on');

})

blackScreenHor.addEventListener('click', (event) => {

	blackScreenHor.classList.contains('on') ?
		blackScreenHor.classList.remove('on') :
		blackScreenHor.classList.add('on');

})


//==================slider===========================================
let items = document.querySelectorAll('.slider .item');
let currentItem = 0;
let isEnabled = true;

function changeCurrentItem(n) {   
	currentItem = (n + items.length) % items.length;
}

function hideItem(direction) {
	isEnabled = false;
	items[currentItem].classList.add(direction);
	items[currentItem].addEventListener('animationend', function() {
		this.classList.remove('active', direction);
	});
}

function showItem(direction) {
	items[currentItem].classList.add('next', direction);
	items[currentItem].addEventListener('animationend', function() {
		this.classList.remove('next', direction);
		this.classList.add('active');
		isEnabled = true;
	});
}

function nextItem(n) {
	hideItem('to-left');
	changeCurrentItem(n + 1);
	showItem('from-right');
}

function previousItem(n) {
	hideItem('to-right');
	changeCurrentItem(n - 1);
	showItem('from-left');
}

document.querySelector('.back').addEventListener('click', function() {
	if (isEnabled) {
		previousItem(currentItem);
	}
});

document.querySelector('.forward').addEventListener('click', function() {
	if (isEnabled) {
		nextItem(currentItem);
	}
});


//================================скролл и якоря===================


document.addEventListener('scroll', onScroll);    

function onScroll(event) {

	const curPos = window.scrollY;
	const divs = document.querySelectorAll('.wrapper>div'); 
	const links = document.querySelectorAll('#menu a');
	
	divs.forEach((el) => {
		
		if(el.offsetTop <= curPos  && (el.offsetTop + el.offsetHeight) > curPos) {
			links.forEach((a) => {
				a.classList.remove('selected');
				if(el.getAttribute('id') === a.getAttribute('href').substring(1)) {
					a.classList.add('selected');
				}
			})
		}
	})

}