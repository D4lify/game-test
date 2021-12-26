function inventory() {
    
}
function playerStats() {
    document.getElementById('coordinatesX').innerHTML = 'X: ' + hero.x.toFixed(0);
    document.getElementById('coordinatesY').innerHTML = 'Y: ' + hero.y.toFixed(0);
    document.getElementById('playerName').innerHTML = name;
    document.getElementById('health').innerHTML = 'HP: ' + health.toString();
    document.getElementById('stamina').innerHTML = 'SP: ' + stamina.toString();
    document.getElementById('temp').innerHTML = temperature;
    document.getElementById('currentEnemy').innerHTML = 'CURRENT ENEMY: ' + currentEnemy;
    document.getElementById('exp').innerHTML = 'EXP: ' + exp.toFixed(0);
    if (document.getElementById('temp').innerHTML == 'CLD') {
        document.querySelector('#temp').style.color = 'blue'
    }
    if (document.getElementById('temp').innerHTML == 'CL') {
        document.querySelector('#temp').style.color = 'cyan'
    }
    if (document.getElementById('temp').innerHTML == 'NRML') {
        document.querySelector('#temp').style.color = 'green'
    }
    if (document.getElementById('temp').innerHTML == 'WRM') {
        document.querySelector('#temp').style.color = 'orange'
    }
    if (document.getElementById('temp').innerHTML == 'HT') {
        document.querySelector('#temp').style.color = 'red'
    }
}
var startCursor = setInterval(startCursor,100);
function startCursor() {
    if (map.keys[37] && document.querySelector('#picker').style.top == '142px') {
        startAll();
    }
    if (map.keys[37] && document.querySelector('#picker').style.top == 'px') {
        
    }
    if (map.keys[83]) {
        document.querySelector('#picker').style.top = '162px'
    }
    if (map.keys[87]) {
        document.querySelector('#picker').style.top = '142px'
    }
    if (gameStart == true) {
        clearInterval(startCursor)
    }
}






