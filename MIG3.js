var slideNumber = 0;
var slides = document.getElementsByClassName("mySlides");

// for (var i = 1; i < slides.length; i++) {
//     slides[i].style.display = "none";
//     // slides[i].style.opacity = "0"; 
// }

var xOpacity = 0;
var goingUp = true;
slides[slideNumber].style.display = "block";

function slideShow() {
    slides[slideNumber].style.opacity = xOpacity;

    if (goingUp == true) {
        xOpacity += 0.1;

        if (xOpacity >= 1.0) {
            goingUp = false;
        }
    }
    else {
        xOpacity -= 0.1;

        if (xOpacity <= 0) {
            goingUp = true;
            slides[slideNumber].style.display = "none";

            if (slideNumber < slides.length - 1) {
                slideNumber++;
            }
            else {
                slideNumber = 0;
            }
            slides[slideNumber].style.display = "block";
        }
    }
}
setInterval(slideShow, 150);