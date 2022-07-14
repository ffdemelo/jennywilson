var menu = document.getElementById('sandwich');
var navBar = document.getElementById('nav-bar');
var toggle = true;
function windowOnResize() {
    if (window.innerWidth >= 480) {
        navBar.style.display = 'flex';
    }
    else {
        navBar.style.display = 'none';
    }
}

function changeIcon() {

    if (toggle == true) {
        menu.src = './img/icons/cross.svg';
        navBar.style.display = 'unset';
        toggle = false;
    }
    else {
        menu.src = './img/icons/menu-hamburger.svg';
        navBar.style.display = 'none';
        toggle = true;
    }
}

menu.onclick = changeIcon;
window.onresize= windowOnResize;