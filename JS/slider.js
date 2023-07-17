var slides = document.querySelectorAll('.slide')
var radios = document.querySelectorAll('.radio-btn')
var left = document.querySelector('.left')
var right = document.querySelector('.right')
let current_slide= 0;
var maxslides = slides.length;


right.addEventListener('click', slide_pass_right)
left.addEventListener('click', slide_pass_left)

function slide_pass_right(){

    current_slide+=1;
    if (current_slide>=maxslides){
        current_slide = 0;
    }
    slides[current_slide].scrollIntoView({inline: "center", behavior: "smooth"})
}
function slide_pass_left(){

    current_slide-=1;
    if (current_slide<0){
        current_slide = 3;
    }
    slides[current_slide].scrollIntoView({inline: "center", behavior: "smooth"})
}
