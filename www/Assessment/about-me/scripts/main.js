let myImage = document.querySelector('img');

myImage.onclick = function() {
	let mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/chanon2.png') {
	myImage.setAttribute ('src','images/chanon2.png');
} 
  else {
	myImage.setAttribute ('src','images/chanon2.png');
	}
}
function setImgSrc(src) {
}

document.querySelector("h1.about-me").onclick = function() {
   let mySrc = myImage.getAttribute('src'); {
    myImage.setAttribute ('src','images/chanon2.png');
  } 
};
	


document.querySelector('li.music').onclick = function() {
    let mySrc = myImage.getAttribute('src');{
    myImage.setAttribute ('src','images/music.png');
  } 
}

document.querySelector('li.bodybuilding').onclick = function() {
    let mySrc = myImage.getAttribute('src');{
    myImage.setAttribute ('src','images/arnold.png');
  } 
}

document.querySelector('li.cooking').onclick = function() {
    let mySrc = myImage.getAttribute('src');{
    myImage.setAttribute ('src','images/cooking.png');
  } 
}




