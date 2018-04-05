let init = () => {
    let box = document.getElementById('box');
    box.addEventListener('animationend', (e) => {
        if (e.animationName === 'rotateY360') {
            box.style.animationName = 'rotateX360';
        } else if (e.animationName === 'rotateX360') {
            box.style.animationName = 'rotateY360';
        }
    }, false);
}

window.addEventListener('DOMContentLoaded', init, false);