  //entities
  var chunk = null;
  var hero;
  var npc = [];
  var isInvOn = false;
  var stamina = 25;
  var health = 50;
  var temperature = 'NRML'; // cld/cl/nrml/wrm/ht
  var name = 'PLAYER'
  var combatLvl = 0;
  var forageLvl = 0;
  var miningLvl = 0;
  var fishingLvl = 0;
  var currentEnemy = 'NONE';
  var gameStart = false;
  var exp = 0;
window.onload = function() {
    map.keys();
    document.querySelector('#picker').style.top = '142px';
}
function startAll() {
    gameStart = true;
    map.start();
    hero = new obj(7,7,'transparent',42,42);
    chunk = 'house_1_inside';
    document.querySelector('#developer').style.display = 'none';
    document.querySelector('#title').style.display = 'none';
    document.querySelector('#ver').style.display = 'none';
    document.querySelector('.stats').style.display = 'table';
    document.querySelector('.inv').style.display = 'table';
    document.querySelector('#pressStart').style.display = 'none';
    document.querySelector('#compile_date').style.display = 'none';
    document.querySelector('#picker').style.display = 'none';
    document.querySelector('#settings').style.display = 'none';
    document.querySelector('.imgCanvas').style.display = 'table';
}
const map = {
    canvas : document.createElement("canvas"),
    keys : function() {
        window.addEventListener('keydown', function (e) {
            map.keys = (map.keys || []);
            map.keys[e.keyCode] = (e.type == "keydown");
        });
        window.addEventListener('keyup', function (e) {
            map.keys[e.keyCode] = (e.type == "keydown");            
        });
    },
    start : function() {
        this.canvas.id = 'mapCanvas';
        this.canvas.width = 84;
        this.canvas.height = 84;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateMap, 25);
    }, 
    clear : function(){
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
};




