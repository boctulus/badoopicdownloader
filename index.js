

/*
filename='pic.jpg'

var link = document.createElement('a');
link.href = url;
link.download = filename;
link.target = '_blank';
link.style.display = 'none';
document.body.appendChild(link);
link.click();
document.body.removeChild(link);
*/


function createBtn() {
	if (document.querySelector('#btndownload') != null)
		return

   	var contenedor = document.querySelector('.big-photo')

   	var btn = document.createElement('a')
   	btn.id='btndownload'
   	// btn.textContent='Download';
   	btn.download='image.jpg'
	btn.target='_blank'
	btn.style.position = "absolute"
	btn.style.zIndex = 100
	btn.style.top  = '50px'
	btn.style.left = '50px'

	var img = document.createElement('img');
	img.src = chrome.extension.getURL('pics/save2-32.png')

 
	btn.appendChild(img)

	contenedor.appendChild(btn)
}


window.setInterval( () => { 
	elem=document.querySelector('.js-mm-photo')

	if (elem == null || typeof elem == 'undefined')
		return

	var url=elem.src;
	if (typeof url != 'undefined'){
		//console.log(url);
	}else {
		url=document.querySelector('.js-mm-photo').style.backgroundImage;
		matchs=url.match(/https:\/\/[^"]*/g)

		if (matchs != null)
			url=matchs[0]	
		//console.log(url);
	}

	if (typeof url != 'undefined') {
		url = url.split('&')[0]

		createBtn()	
		var btn = document.querySelector('#btndownload')
		btn.href= url

		// chrome-extension://fcibcgkdgedfiifkeiephakfkmjphgff/pics/save2-32.png
		// console.log(chrome.extension.getURL('pics/save2-32.png'))
	}
	

}, 500)

//////////////////////////////////////////

function getGreetingId() {
 	return 'greeting';
}

function getGreeting() {
 	return 'Hello, World!';
}

function getGreetingElement() {
 	return document.getElementById(getGreetingId());
}

function renderGreeting() {
 	getGreetingElement().textContent = getGreeting();
}

function fireWhenDOMContentIsLoaded() {
	renderGreeting();
	console.log($('.js-mm-photo'))
}

document.addEventListener('DOMContentLoaded', fireWhenDOMContentIsLoaded);