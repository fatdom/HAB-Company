var Images = new Array(); 
var TransitionIncrement = 3;
var IncrementInterval = 25;
var PauseBeforeNextImage = 4500;

Images.push("url('https://fatdom.github.io/HAB-Company/images/main/cover1.jpg')");
Images.push("url('https://fatdom.github.io/HAB-Company/images/main/cover2.jpg')");
Images.push("url('https://fatdom.github.io/HAB-Company/images/main/cover3.jpg')");

var opacity = 100;
var currentImage = 0;
var topImage = Images.length - 1;
var image = document.getElementById("section-main-background");
var IE = (image.filters) ? true : false;
var timerthing;

function FadeIn() {
    opacity += TransitionIncrement;
    if( opacity >= 100 ) { opacity = 100; }
    if( IE ) { image.filters.alpha.opacity = opacity; }
    else { image.style.opacity = opacity/100; }
    if( opacity == 100 ) {
       clearInterval(timerthing);
       setTimeout("StartFadeOut()", PauseBeforeNextImage);
   }
}

function FadeOut() {
    opacity -= TransitionIncrement;
    if( opacity <= 0 ) { opacity = 0; }
    if( IE ) { image.filters.alpha.opacity = opacity; }
    else { image.style.opacity = (opacity==0) ? 0 : opacity/100; }
    if( opacity == 0 ) {
       clearInterval(timerthing);
       currentImage++;
       if( currentImage > topImage ) { 
           currentImage = 0; 
       }
        console.log(Images[currentImage]);
        image.style.backgroundImage = Images[currentImage];
        timerthing = setInterval("FadeIn()", IncrementInterval);
    }
}

function StartFadeOut() { 
    timerthing = setInterval("FadeOut()", IncrementInterval); 
}

function startSlideShowTransition() {
    setTimeout("StartFadeOut()", PauseBeforeNextImage);
}
