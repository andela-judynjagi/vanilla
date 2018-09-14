var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

images = ["images/pic1.jpg", "images/pic2.jpg", "images/pic3.jpg", "images/pic4.jpg", "images/pic5.jpg"]

/* Looping through images */

for(var i = 0; i < 5; i++){
  var newImage = document.createElement('img');
  newImage.setAttribute('src', images[i]);
  thumbBar.appendChild(newImage);
}

thumbBar.addEventListener('click', showImage)

function showImage(e){  
  if(e.target && e.target.nodeName === 'IMG'){
    var imageSource = e.target.getAttribute('src');
    displayedImage.setAttribute('src', imageSource);
  }
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', darkenLightenImage)

function darkenLightenImage(e){
  var className = btn.getAttribute('class');
  if(className === 'dark'){
    btn.setAttribute('class', 'light')
    btn.textContent = 'Lighten'
    overlay.style.background = "rgba(0,0,0,0.5)"
  } else {
    btn.setAttribute('class', 'dark')
    btn.textContent = 'Darken'
    overlay.style.background = "rgba(0,0,0,0)"
    
  }  
}

