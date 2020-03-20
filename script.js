// const MENU = document.getElementById('menu');


// MENU.addEventListener('click', (event) => {   //переключение активного класса для нав бара
//     MENU.querySelectorAll('a').forEach(el => el.classList.remove('selected'));

//     event.target.classList.add('selected');
// })





let items = document.querySelectorAll('.slider .item');
let currentItem = 0;
let isEnabled = true;

function changeCurrentItem(n) {   // slider
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



document.addEventListener('scroll', onScroll);    //делаем плавный скрол и якоря 

function onScroll(event) {

	const curPos = window.scrollY;
	const divs = document.querySelectorAll('.wrapper>div'); 
	const links = document.querySelectorAll('#menu a');
	
	divs.forEach((el) => {
		console.log(el.offsetTop);
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