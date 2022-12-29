


var sildeIndex=0;
showSlides();

function showSlides(){
    var i;
    var slides= document.getElementsByClassName("slide");
    for(i =0; i< slides.length; i++){
        slides[i].style.display="none";
    }

    sildeIndex++;
    if(sildeIndex>slides.length){
        sildeIndex = 1
    }
    slides[sildeIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000);
}