var slideNumber = 0;
var slide = document.getElementsByClassName("mySlides");

for (var i = 1; i < slide.length; i++) {
    slide[i].style.display = "none";
    slide[i].style.opacity = "0";
}

var xOpacity = 0;
var goingUp = true;

function slideShow() {

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
            slide[slideNumber].style.display = "none";

            if (slideNumber < slide.length - 1) {
                slideNumber++;
            }
            else {
                slideNumber = 0;
            }
            slide[slideNumber].style.display = "block";
        }
    }

    slide[slideNumber].style.opacity = xOpacity;
}
setInterval(slideShow, 100);