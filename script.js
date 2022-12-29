
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

const slide2Container = [...document.querySelectorAll('.slide2-container')];
const nextbtn= [...document.querySelectorAll('.next')];
const prevbtn= [...document.querySelectorAll('.prev')];

slide2Container.forEach((item,i) =>{
    let containerDimensions = item.getBoundingClientRect();
    let conatinerWidth = containerDimensions.width;

    nextbtn[i].addEventListener('click', () => {
        item.scrollLeft +=conatinerWidth;
    })

    prevbtn[i].addEventListener('click',() =>{
        item.scrollLeft -=conatinerWidth;
    })
    
})