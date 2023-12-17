let menuIcon = document.querySelector('#menu-icon');
let navList = document.querySelector('.navlist');

menuIcon.onclick = ()=>{
    menuIcon.classList.toggle('bx-x');
    navList.classList.toggle('open');
}

window.onscroll = ()=>{
    menuIcon.classList.remove('bx-x');
    navList.classList.remove('open');
}

const circles = document.querySelectorAll(".circle");
circles.forEach(elem=>{
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-parcent");
    var parcent = Math.floor(dots*marked/100);
    var points = "";
    var rotate = 360 / dots;

    for(i=0; i < dots; i++){
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }
    elem.innerHTML = points;


    const pointsmarked = document.querySelectorAll('.points');
    for(let i = 0; i< parcent; i++){
        pointsmarked[i].classList.add('marked');
    } 
})