// Fig. 10.12: RandomPicture2.js

// Random image selection using arrays

window.onload = pickImage;

var pictures = new Array( "Randompics/main.jpg" , "Randompics/2013.jpg", "Randompics/2014.jpg", "Randompics/2018.jpg", "Randompics/2019.jpg", "Randompics/2020.jpg", "Randompics/2021.jpg");

function pickImage() {
     var index = Math.floor(Math.random() * pictures.length);
     document.getElementById("image").src = pictures[index];
}