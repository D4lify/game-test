let heroImg = document.querySelector('#heroImg');
function _render() {
    heroImg.style.top = hero.y.toString() + 'px';
    heroImg.style.left = hero.x.toString() + 'px';
    if (isMovingLeft) {
        heroImg.setAttribute("src", "./img/heroLL.png")
    }
    if (isMovingUp) {
        heroImg.setAttribute("src", "./img/heroLU.png")
    }
    if (isMovingRight) {
        heroImg.setAttribute("src", "./img/heroLR.png")
    }
    if (isMovingDown) {
        heroImg.setAttribute("src", "./img/heroLD.png")
    }
}
