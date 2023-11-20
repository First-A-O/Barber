var menuBtn = document.getElementById('menuBtn');
var sideNav = document.getElementById('sideNav');
var menu = document.getElementById('menu');

sideNav.style.right = "-250px";

menuBtn.addEventListener('click', function(){
    if (sideNav.style.right == "-250px"){
        sideNav.style.right = '0';
        menu.src == "images/star.svg";
    } else{
        sideNav.style.right = '-250px';
        menu.src = "images/star.svg";
    }
});