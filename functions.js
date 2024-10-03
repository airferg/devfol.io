//screen resizing

const screenWidth = window.innerWidth;
if (screenWidth < 1185){
    document.getElementById('github').style.height = '25px';
}




//home page slideshow
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

const slidesContainer = document.querySelector('.slides');


function showSlide(index) {
   

    if (index < 0) {
        currentSlide = totalSlides - 1;
    } else if (index >= totalSlides || index === 3){
        currentSlide = 0;
    } else {
        currentSlide = index;
    }

    const offset = -(currentSlide * (100 / totalSlides)) * (100 / 10);


    slidesContainer.style.transform = `translateX(${offset}%)`;
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

setInterval(function(){
    nextSlide();
}, 3000);

showSlide(currentSlide);


// Change Pages


let mysteryOrganism = document.getElementById('mystery-organism-page');
let creditCard = document.getElementById('credit-card-checker-page');
let dadBeerAdvice = document.getElementById('dad-beer-advice-generator');
let madMenace = document.getElementById('mad-menace-page');
let nightRun = document.getElementById('night-run-page');


let page1 = document.getElementById('page-1');
let page2 = document.getElementById('page-2');
let page3 = document.getElementById('page-3');
let page4 = document.getElementById('page-4');
let page5 = document.getElementById('page-5');

//make all other pages display: none;

function displayNone() {
    console.log('Hiding all pages');
    let allPages = document.querySelectorAll('.page');
    allPages.forEach(page => page.style.display = 'none');
}

function showOrganism() {
    console.log('slide clicked');
    displayNone();
    page1.style.display='block';
}

function showCredit() {
    displayNone();
    page2.style.display='block';
}

function showBeerAdvice() {
    displayNone();
    page3.style.display='block';
}

function showMadMenace() {
    displayNone();
    page4.style.display='block';
}

function showNightRun() {
    displayNone();
    page5.style.display='block';
}


mysteryOrganism.addEventListener('click', showOrganism);
creditCard.addEventListener('click', showCredit);
dadBeerAdvice.addEventListener('click', showBeerAdvice);
madMenace.addEventListener('click', showMadMenace);
nightRun.addEventListener('click', showNightRun);


// return to homepage


function returnHome() {
    displayNone();
    setTimeout(function() { 
        document.getElementById('home').style.display="block";
    }, 100);

}

document.addEventListener('keydown', function(event){
    if(document.getElementById('home').style.display==='block'){
        return null;
    }else{
    if (event.key === 'a' || event.key === 'A'){
        returnHome();
    }
}});

// click events for mystery organism page
document.getElementById('sidebar-mystery-organism').addEventListener('click', function(){
    console.log('slide clicked');
    showOrganism();
});
document.getElementById('sidebar-credit-card-checker').addEventListener('click', function(){
    showCredit();
});
document.getElementById('sidebar-dad-beer-advice-generator').addEventListener('click', function(){
    showBeerAdvice();
});
document.getElementById('sidebar-mad-menace').addEventListener('click', function(){
    showMadMenace();
});
document.getElementById('sidebar-night-run').addEventListener('click', function(){
    showNightRun();
});

//click events for credit card page
document.getElementById('sidebar-mystery-organism1').addEventListener('click', function(){
    console.log('slide clicked');
    showOrganism();
});
document.getElementById('sidebar-credit-card-checker1').addEventListener('click', function(){
    showCredit();
});
document.getElementById('sidebar-dad-beer-advice-generator1').addEventListener('click', function(){
    showBeerAdvice();
});
document.getElementById('sidebar-mad-menace1').addEventListener('click', function(){
    showMadMenace();
});
document.getElementById('sidebar-night-run1').addEventListener('click', function(){
    showNightRun();
});
//click events for beer page
document.getElementById('sidebar-mystery-organism2').addEventListener('click', function(){
    console.log('slide clicked');
    showOrganism();
});
document.getElementById('sidebar-credit-card-checker2').addEventListener('click', function(){
    showCredit();
});
document.getElementById('sidebar-dad-beer-advice-generator2').addEventListener('click', function(){
    showBeerAdvice();
});
document.getElementById('sidebar-mad-menace2').addEventListener('click', function(){
    showMadMenace();
});
document.getElementById('sidebar-night-run2').addEventListener('click', function(){
    showNightRun();
});
//click events for mad menace page
document.getElementById('sidebar-mystery-organism3').addEventListener('click', function(){
    console.log('slide clicked');
    showOrganism();
});
document.getElementById('sidebar-credit-card-checker3').addEventListener('click', function(){
    showCredit();
});
document.getElementById('sidebar-dad-beer-advice-generator3').addEventListener('click', function(){
    showBeerAdvice();
});
document.getElementById('sidebar-mad-menace3').addEventListener('click', function(){
    showMadMenace();
});
document.getElementById('sidebar-night-run3').addEventListener('click', function(){
    showNightRun();
});
//click events for night run page
document.getElementById('sidebar-mystery-organism4').addEventListener('click', function(){
    console.log('slide clicked');
    showOrganism();
});
document.getElementById('sidebar-credit-card-checker4').addEventListener('click', function(){
    showCredit();
});
document.getElementById('sidebar-dad-beer-advice-generator4').addEventListener('click', function(){
    showBeerAdvice();
});
document.getElementById('sidebar-mad-menace4').addEventListener('click', function(){
    showMadMenace();
});
document.getElementById('sidebar-night-run4').addEventListener('click', function(){
    showNightRun();
});

//about me press c

function aboutMe() {
    setTimeout(function() {
        document.getElementById('aboutme').style.display="block";
    }, 100);
}

function noAboutMe() {
    document.getElementById('aboutme').style.display='none';
}

document.addEventListener('keydown', function(event){
    if (event.key === 'c' || event.key === 'C'){
        if (document.getElementById('aboutme').style.display==='block'){
            noAboutMe();
        }else{
            aboutMe();
        }
    }
});



