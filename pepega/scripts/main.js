var myImage = document.querySelector('img');

myImage.onclick = function() {
  var mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/vam-ban.png') {
    myImage.setAttribute('src', 'images/jebaited.jpg');
  } else {
    myImage.setAttribute('src', 'images/vam-ban.png');
  }
}


var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Введи своё имя, рофлан.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Ты не ' + myName + ', ты peepoClown';
}

if (!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Ты не ' + storedName + ', ты peepoClown';
}

myButton.onclick = function() {
  setUserName();
}
