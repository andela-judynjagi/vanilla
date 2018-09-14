

var myImage = document.querySelector('img');

myImage.onclick = () => {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/firefox-icon.png') {
        myImage.setAttribute('src', '')   
    } else {
        alert(" It is not a mozilla Image")     
    }
}
var myHeader = document.querySelector('h1');
var changeUser = document.querySelector('button');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeader.textContent = 'Hello there my name is, ' + myName;

    if(!localStorage.getItem('name')) {
        setUserName();
      } else {
        var storedName = localStorage.getItem('name');
        myHeader.textContent = 'Hello there my name is, ' + storedName;
      }
  }

  changeUser.onclick = function() {
    setUserName();
  }

var myHeader = document.querySelector('h1');

