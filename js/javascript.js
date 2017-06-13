function elementsPosition (){
	var x = window.innerWidth;
	var y = document.getElementById('start').offsetHeight;

	var dHead = document.getElementById('header-diamond').offsetHeight;
	var dImg = document.getElementById('img-diamond').offsetHeight;
	var dCont = document.getElementById('contact-diamond').offsetHeight;
	
	var wHead = document.getElementById('header-diamond').offsetWidth;
	var wImg = document.getElementById('img-diamond').offsetWidth;
	var wCont = document.getElementById('contact-diamond').offsetWidth;

	document.getElementById('header-diamond').setAttribute('style','top:'+parseInt((y-dHead)/2)+'px; left:'+parseInt((x-2*wHead-wImg)/5)+'px');
	document.getElementById('img-diamond').setAttribute('style','top:'+parseInt((y-dImg)/2)+'px; left:'+parseInt((x-wImg)/2)+'px');
	document.getElementById('contact-diamond').setAttribute('style','top:'+parseInt((y-dCont)/2)+'px; right:'+parseInt((x-2*wCont-wImg)/5)+'px');

	var hMenu = document.getElementById('menu_1').offsetHeight;
	var wMenu = document.getElementById('menu_1').offsetWidth;

	document.getElementById('menu_1').setAttribute('style','top:'+parseInt((y-2*hMenu)/4)+'px; left:'+parseInt((x-2*wMenu)/3)+'px');
	document.getElementById('menu_2').setAttribute('style','bottom:'+parseInt((y-2*hMenu)/3)+'px; left:'+parseInt((x-2*wMenu)/3)+'px');
	document.getElementById('menu_3').setAttribute('style','top:'+parseInt((y-2*hMenu)/4)+'px; right:'+parseInt((x-2*wMenu)/3)+'px');
	document.getElementById('menu_4').setAttribute('style','bottom:'+parseInt((y-2*hMenu)/3)+'px; right:'+parseInt((x-2*wMenu)/3)+'px');

}

window.onresize = elementsPosition;
elementsPosition();

function clickDiamond(target){
	document.getElementById(target).scrollIntoView();
	window.location.hash = target;
}

function scrollTo(to){
	var t=document.getElementById('to');

}

var slideIndex = 0;
showSlides();

var slideTime;

function currentSlide(n) {
  slideIndex = n;
  clearTimeout(slideTime);
  showSlides();
}

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("me_description");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1;}
    slides[slideIndex-1].style.display = "flex"; 
    slideTime=setTimeout(showSlides, 15000); 
    for(var k = 0; k<dots.length; k++){
    	dots[k].className = dots[k].className.replace(/active/,'');
    }
    dots[slideIndex-1].classList.add('active');
}

function projectDetails(id) {
	var title, desc;
	if(id[id.length-1]!='a'){
		title = document.getElementById(id);
		desc = document.getElementById(id + 'a');

	}else{
		title = document.getElementById(id.substr(0,id.length-1));
		desc = document.getElementById(id);
	}
//						  [            if               ]? true : false ;
	toggleClass(title);
	toggleClass(desc);
}

//menu visible <->invisible
document.getElementById('menu-button').addEventListener('click',function(){
	var menuV = document.getElementById('menu');
	if(menuV.style.visibility != 'visible'){
		this.classList.add('menu-button_open');
		document.getElementById('menu').style.visibility = 'visible';
	}
	else{
		this.classList.remove('menu-button_open');
		document.getElementById('menu').style.visibility = 'hidden';
	}
} );

//hide menu after click on link
var menuL = document.getElementsByClassName('menu-link');
var hideAfter = function(){
	document.getElementById('menu-button').classList.remove('menu-button_open');
	document.getElementById('menu').style.visibility = 'hidden';
};
for (var i = 0; i<menuL.length; i++){
	menuL[i].addEventListener('click', hideAfter, false);
}

function toggleClass(object){
	var classes = object.getAttribute('class');
	var output;
	output = classes.replace('invisible','visible');
	if(output == classes)
		output = classes.replace('visible','invisible');
	object.setAttribute('class',output);
}
