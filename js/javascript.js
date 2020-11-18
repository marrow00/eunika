function elementsPosition (){
	const menuDiamond = document.getElementById('menu_1');
	const homeDiamond = document.getElementById('img-diamond');
	const data={
		top: homeDiamond.offsetTop,
		left: homeDiamond.offsetLeft,
		height: homeDiamond.offsetHeight,
		hMenu: menuDiamond.offsetHeight,
		wMenu: menuDiamond.offsetWidth
	};
	const coordinates={
		x: parseInt(data.left - data.wMenu),
		y1: parseInt(data.top - data.hMenu/2),
		y2: parseInt(data.top - data.hMenu/2 + data.height)
	};
	coordinates.y1 < 0 ? 1 : coordinates.y1;
	menuDiamond.setAttribute('style', `top:${coordinates.y1}px; left:${coordinates.x}px;`);
	document.getElementById('menu_2').setAttribute('style', `top:${coordinates.y2}px; left:${coordinates.x}px;`);
	document.getElementById('menu_3').setAttribute('style', `top:${coordinates.y1}px; right:${coordinates.x}px;`);
	document.getElementById('menu_4').setAttribute('style', `top:${coordinates.y2}px; right:${coordinates.x}px;`);
}
window.onresize = elementsPosition;
elementsPosition();

let slideIndex = 0;
var slideTime;
function showSlides() {
    let i;
    const slides = document.getElementsByClassName("description");
    const dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1;}
    slides[slideIndex-1].style.display = "flex"; 
    slideTime=setTimeout(showSlides, 35000); 
    for(var k = 0; k<dots.length; k++){
    	dots[k].className = dots[k].className.replace(/active/,'');
    }
    dots[slideIndex-1].classList.add('active');
}
showSlides();
function currentSlide(n) {
	slideIndex = n;
	clearTimeout(slideTime);
	showSlides();
}

const menuButton = document.getElementById('menu-button');
const menuList = document.getElementById('menu');
const menuItems = menuList.children;
menuButton.addEventListener('click',function(){
	if(menuList.style.width != '100%'){
		this.classList.add('menu-button_open');
		menuList.style.width = '100%';
	}else{
		this.classList.remove('menu-button_open');
		menuList.style.width = '0';
	}
} );
const hideAfter = function(){
	menuButton.classList.remove('menu-button_open');
	menuList.style.width = '0';
};
for (let i = 0; i<menuItems.length; i++){
	menuItems[i].addEventListener('click', hideAfter, false);
}
