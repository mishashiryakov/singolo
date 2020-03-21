// const MENU = document.getElementById('menu');


// MENU.addEventListener('click', (event) => { 

	  
//     MENU.querySelectorAll('a').forEach(el => el.classList.remove('selected'));
	
//     event.target.classList.add('selected');
// })


// document.querySelectorAll('li a')
//   .forEach(li => 
//     li.addEventListener('click', () => {
	
//       setTimeout(() => {
//         window.scrollBy(0, -95)
// 	  }, 1500)
	
//     })
//   )

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
		
		if(el.offsetTop <= curPos + 95  && (el.offsetTop + el.offsetHeight) > curPos) {
			links.forEach((a) => {
				a.classList.remove('selected');
				
				if(el.getAttribute('id') === a.getAttribute('href').substring(1)) {
					a.classList.add('selected');
					
				}
				
			})
		}
	})

}



//==================сдвиг картинок порфтолио======================


const port = document.getElementById('port_li');
const port2 = document.getElementById('portfolio');

const all = document.getElementById('all');
const web  = document.getElementById('web');
const graphic = document.getElementById('graphic');
const art = document.getElementById('art');

const picture1 = document.getElementById('picture1');
const picture2 = document.getElementById('picture2');
const picture3 = document.getElementById('picture3');

port.addEventListener('click', (event) => { 
	  
    port.querySelectorAll('li').forEach(el => el.classList.remove('a_selected'));
	event.target.classList.add('a_selected');
	
	if(all.classList.contains('a_selected')) {
		
		port2.querySelectorAll('div').forEach(el => el.classList.remove('order'))
	}	

	if(web.classList.contains('a_selected')) {
		port2.querySelectorAll('div').forEach(el => el.classList.remove('order'))
		picture1.classList.add('order');

	}

	if(graphic.classList.contains('a_selected')) {
		port2.querySelectorAll('div').forEach(el => el.classList.remove('order'));
		picture1.classList.add('order');
		picture2.classList.add('order');
	}

	if(art.classList.contains('a_selected')) {
		port2.querySelectorAll('div').forEach(el => el.classList.remove('order'));
		picture1.classList.add('order');
		picture2.classList.add('order');
		picture3.classList.add('order');
	}

})



//=============================рамка для картинок портфолио========================


const addBorder = document.getElementById('photo');
// const addBorder = document.querySelectorAll('#photo > img');
console.log(addBorder);

addBorder.addEventListener('click', (event) => {

	// if(event.target.classList.contains('port_border')) {event.target.classList.remove('port_border');}
	addBorder.querySelectorAll('img').forEach(el => el.classList.remove('port_border'));
	event.currentTarget.classList.add('port_border');
	
} )



// const MENU = document.getElementById('menu');


// MENU.addEventListener('click', (event) => { 

	  
//     MENU.querySelectorAll('a').forEach(el => el.classList.remove('selected'));
	
//     event.target.classList.add('selected');
// })