// -------------------------animation------------------ 
AOS.init({
    disable: 'mobile',
    duration:1000,
});

// ---------------------header-------------
let header = document.querySelector('.header');
let headerItem = document.querySelector('.header-item');
let headerList = document.querySelector('.heade-list');
function cl(x){
    document.querySelectorAll('section')[x].classList.add('d-none')
};

headerItem.addEventListener('click',function(){
    document.querySelector('.header-item>span').classList.toggle('d-none');
    document.querySelector('.header-item>i').classList.toggle('d-none');
    document.querySelector('.header-list').classList.toggle('d-none');
    cl(0);cl(1);cl(2);cl(3)
    if(document.querySelector('.header-item>span').classList.contains('d-none')){
        
    }else{
        document.querySelector('.home').classList.remove('d-none')
    }
});

function a(){
    document.querySelector('.header-list').classList.add('d-none');
    document.querySelector('.header-item>span').classList.remove('d-none');
    document.querySelector('.header-item>i').classList.add('d-none');
};

document.addEventListener('click',function(r){
    if(r.target.getAttribute('href')=="#home"){
        document.querySelector('.home').classList.remove('d-none');
        document.querySelector('.about').classList.add('d-none');
        document.querySelector('.portfolio').classList.add('d-none');
        document.querySelector('.contact').classList.add('d-none');
        a()
    }else if(r.target.getAttribute('href')=="#about"){
        document.querySelector('.about').classList.remove('d-none');
        document.querySelector('.home').classList.add('d-none');
        document.querySelector('.portfolio').classList.add('d-none');
        document.querySelector('.contact').classList.add('d-none');
        a()
    }else if(r.target.getAttribute('href')=="#portfolio"){
        document.querySelector('.portfolio').classList.remove('d-none');
        document.querySelector('.home').classList.add('d-none');
        document.querySelector('.about').classList.add('d-none');
        document.querySelector('.contact').classList.add('d-none');
        a()
    }else if(r.target.getAttribute('href')=="#contact"){
        document.querySelector('.contact').classList.remove('d-none');
        document.querySelector('.home').classList.add('d-none');
        document.querySelector('.portfolio').classList.add('d-none');
        document.querySelector('.about').classList.add('d-none');
        a()
    }
});

// ------------------------about tab-------------
let tabItem1 = document.querySelector('.education');
let tabContent1 = document.querySelector('#education');
let tabItem2 = document.querySelector('.experience');
let tabContent2 = document.querySelector('#experience');

tabItem1.addEventListener('click',function(e){
    if(this.classList.contains('active')){

    }else{
        tabItem2.classList.remove('active');
        this.classList.add('active');
        tabContent2.classList.remove('active1');
        tabContent1.classList.add('active1')
    }
});

tabItem2.addEventListener('click',function(e){
    if(this.classList.contains('active')){

    }else{
        tabItem1.classList.remove('active');
        this.classList.add('active');
        tabContent1.classList.remove('active1');
        tabContent2.classList.add('active1')
    }
}) ;


// ----------------------project-------------
let portfolio= document.querySelector('.portfolio');
let prOne = document.querySelector('.prOne');
let prTwo = document.querySelector('.prTwo');
let prThree = document.querySelector('.prThree');
let prFour = document.querySelector('.prFour');
let prFive = document.querySelector('.prFive');
let prSix = document.querySelector('.prSix');
let btnOne = document.querySelector('.btn-one');
let btnClose = document.querySelectorAll('.close');

function open (x){
    portfolio.classList.add('hide');
    x.classList.remove('hide')
};

function close (y){
    portfolio.classList.remove('hide');
    y.classList.add('hide','fadeOut')
    
};

document.addEventListener('click',function(e){
    if(e.target.classList.contains('btn-one')){
        open(prOne);
        header.classList.add('d-none')
    }else if(e.target.classList.contains('btn-two')){
        open(prTwo);
        header.classList.add('d-none')
    }
    else if(e.target.classList.contains('btn-three')){
        open(prThree);
        header.classList.add('d-none')
    }
    else if(e.target.classList.contains('btn-four')){
        open(prFour);
        header.classList.add('d-none')
    }
    else if(e.target.classList.contains('btn-five')){
        open(prFive);
        header.classList.add('d-none')
    }
    else if(e.target.classList.contains('btn-six')){
        open(prSix);
        header.classList.add('d-none')
    }
    else if(e.target.classList.contains('closeOne')){
        console.log('0ne')
        close(prOne);
        header.classList.remove('d-none')
    }
    else if(e.target.classList.contains('closeTwo')){
        close(prTwo);
        header.classList.remove('d-none')
    }
    else if(e.target.classList.contains('closeThree')){
        close(prThree);
        header.classList.remove('d-none')
    }
    else if(e.target.classList.contains('closeFour')){
        close(prFour);
        header.classList.remove('d-none')
    }
    else if(e.target.classList.contains('closeFive')){
        close(prFive);
        header.classList.remove('d-none')
    }
    else if(e.target.classList.contains('closeSix')){
        close(prSix);
        header.classList.remove('d-none')
    }
});