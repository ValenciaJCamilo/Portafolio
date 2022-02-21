/*=============== LOADING ANIMATION ===============*/
/*If we don't put this function, the navbar isn't gonna work, will be blocked*/
function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
setInterval(loader, 0);
}

window.onload = fadeOut();


