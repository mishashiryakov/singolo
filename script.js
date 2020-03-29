
//============================Screen on and off===============

const iphoneVert = document.getElementById('iphone_vert_picture');
const blackScreenVert = document.getElementById('vert');
const iphoneHor = document.getElementById('iphone_hor_picture');
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

let items = document.querySelectorAll('.slider-item');
let currentItem = 0;
let isEnabled = true;
const BG_COLOR_MAP = {
	'phones-red': '#f06c64',
	'phones-blue': '#648bf0'
}; 

const BB_COLOR_MAP = {
	'phones-red': '6px solid #ea676b',
	'phones-blue': '6px solid #4270e4'
}; 


function changeCurrentItem(n) {   
	currentItem = (n + items.length) % items.length;
}

function hideItem(direction) {
	isEnabled = false;
	items[currentItem].classList.add(direction);
	items[currentItem].addEventListener('animationend', function hideItemEventListener(event) {
		
		event.target.classList.remove('active', direction);
		event.target.removeEventListener('animationend', hideItemEventListener)
	  });
}


// var hideItemEventListener = function (direction, event) {
// 	console.log('hideItemEventListener')
// 	event.target.classList.remove('active', direction);
//   };

function showItem(direction) {
	items[currentItem].classList.add('next', direction);
	items[currentItem].addEventListener('animationend', function showItemEventListener(event) {
		// console.log('showItemEventListener');
		event.target.classList.remove('next', direction);

		event.target.classList.add('active');
		
		let contentClassName = this.getElementsByClassName('slider-content')[0].classList[1];
		// console.log(BG_COLOR_MAP[contentClassName]);
		document.getElementById('home').style.background = BG_COLOR_MAP[contentClassName];
		document.getElementById('home').style.borderBottom = BB_COLOR_MAP[contentClassName];


		event.target.removeEventListener('animationend', showItemEventListener)
		isEnabled = true;
	});
}

function nextItem(n) {
	hideItem('to-left');
	changeCurrentItem(n + 1);
	showItem('from-right');
	// items.forEach(item => item.removeEventListener('animationend', hideItemEventListener))
}

function previousItem(n) {
	hideItem('to-right');
	changeCurrentItem(n - 1);
	showItem('from-left');
}

document.querySelector('.back_btn').addEventListener('click', function() {
	if (isEnabled) {
		previousItem(currentItem);
	}
});

document.querySelector('.forward_btn').addEventListener('click', function() {
	if (isEnabled) {
		nextItem(currentItem);
	}
});


//================================скролл и якоря===================


document.addEventListener('scroll', onScroll);    

function onScroll(event) {

	const curPos = window.scrollY;
	const divs = document.querySelectorAll('body>div'); 
	const links = document.querySelectorAll('#menu a');
	
	divs.forEach((el) => {
		
		if(el.offsetTop <= curPos + 96  && (el.offsetTop + el.offsetHeight) > curPos) {
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


const addBorder = document.getElementById('photo');

let PICTURE_LINKS = [['./assets/images/1.jpg','ship'], ['./assets/images/2.jpg', 'smile'], 
['./assets/images/3.jpg', 'cosmos'], ['./assets/images/4.jpg', 'robot'], 
['./assets/images/5.jpg', 'animals'], ['./assets/images/6.jpg', 'factory'], 
['./assets/images/7.jpg', 'camera'], ['./assets/images/8.jpg', 'chiken'], 
['./assets/images/9.jpg', 'tower'], ['./assets/images/10.jpg', 'text'], 
['./assets/images/11.jpg', 'red monster'], ['./assets/images/12.jpg', 'note']];


const port = document.getElementById('port_li');

port.querySelectorAll('li').forEach(el => {
	el.addEventListener('click', (event) => { 
	  let isSelected = event.target.classList.contains('a_selected');

	  if(!isSelected){
		port.querySelectorAll('li').forEach(el => el.classList.remove('a_selected'));
		event.target.classList.add('a_selected');

		addBorder.innerHTML = '';
		PICTURE_LINKS.unshift(PICTURE_LINKS.pop());
		drawImages();
	  }
	})
});

// port.addEventListener('click', (event) => { 
	  
//     port.querySelectorAll('li').forEach(el => el.classList.remove('a_selected'));
// 	event.target.classList.add('a_selected');
// 	addBorder.innerHTML = '';
// 	PICTURE_LINKS.unshift(PICTURE_LINKS.pop());
// 	drawImages();
// })




function drawImages() {
	PICTURE_LINKS.forEach(picture => {
		let [link, alt] = picture;
		let img = document.createElement('img');
		img.src = link;
		img.alt = alt;
		addBorder.appendChild(img);
	})
}

drawImages();

//=============================рамка для картинок портфолио========================






addBorder.addEventListener('click', (event) => {
	
	if(!event.target.id) {
		if(event.target.classList.contains('port_border')) {
			addBorder.querySelectorAll('img').forEach(el => el.classList.remove('port_border'))
		} else {
			addBorder.querySelectorAll('img').forEach(el => el.classList.remove('port_border'));
			event.target.classList.add('port_border');}
			}
})




//================================ Модальное окно===========================

const btn = document.getElementById('submit');
const close_btn = document.getElementById('close-btn');
const message_block = document.getElementById('message-block');


btn.addEventListener('click', (event) => {
	let requiredFields = [...document.querySelectorAll("[required]")];
	
	let isValid = node => node.checkValidity();
	
	if(requiredFields.every(isValid)) {
		event.preventDefault();
		const subject = document.getElementById('subject').value.toString();
		const description = document.getElementById('description').value.toString();
		
		subject == '' ?
		document.getElementById('subj-res').innerText = 'Без темы' :
		document.getElementById('subj-res').innerText = 'Тема: ' + subject;

		description == '' ?
		document.getElementById('des-res').innerText = 'Без описания' :
		document.getElementById('des-res').innerText = 'Описание: ' + description;
		

		message_block.classList.remove('hidden');
	}
});

close_btn.addEventListener('click', () => {
	event.preventDefault();
	document.getElementById('subject').innerText = '';
	message_block.classList.add('hidden');
	document.getElementById('form').reset();
});




 //================================this is a tasty burger===========================

 const MENU = document.querySelector('.navigation');

 const HAMBURGER = document.querySelector('.hamburger');
 HAMBURGER.addEventListener('click', (event) => {
	 const elem = (event.target.classList.contains('hamburger')) ? event.target : event.target.parentNode;
	 const hamburger_modal = document.createElement('div');
	 if (elem.classList.contains('hamburger_opened')) {
		 closeHamburgerMenu();
	 } else {
		 elem.classList.add('hamburger_opened');
		 elem.parentNode.classList.add('menu_opened');
		 hamburger_modal.classList.add('hamburger_modal');
		 const hamburger_menu = document.createElement('div');
		 hamburger_menu.classList.add('hamburger_menu');            
		 hamburger_menu.appendChild(MENU.cloneNode(true));
		 hamburger_modal.appendChild(hamburger_menu);
		 document.getElementById('hamburger').insertAdjacentElement('afterend', hamburger_modal);
		 document.querySelector('.hamburger_menu ul').addEventListener('click', (event) => {
			 if (event.target.tagName === "A") {
				 closeHamburgerMenu();
			 }
		 });
		 document.body.classList.add('overflow-hidden');
	 }
 });

 const closeHamburgerMenu = () => {
	 if ((menu = document.querySelector('.hamburger_opened')) !== null ) {
		 document.body.classList.remove('overflow-hidden');
		 menu.classList.remove('hamburger_opened');
		 menu.parentNode.classList.remove('menu_opened');
		 document.body.querySelectorAll('.hamburger_modal').forEach(el => el.remove());
	 }
 };