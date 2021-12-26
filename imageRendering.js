function _render() {
    document.querySelector('#heroImg').style.top = hero.y.toString() + 'px';
    document.querySelector('#heroImg').style.left = hero.x.toString() + 'px';
    if (isMovingLeft) {
        document.querySelector('#heroImg').setAttribute("src", "./img/heroLL.png")
    }
    if (isMovingUp) {
        document.querySelector('#heroImg').setAttribute("src", "./img/heroLU.png")
    }
    if (isMovingRight) {
        document.querySelector('#heroImg').setAttribute("src", "./img/heroLR.png")
    }
    if (isMovingDown) {
        document.querySelector('#heroImg').setAttribute("src", "./img/heroLD.png")
    }
}