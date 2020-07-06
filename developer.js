const proffesionTable = ['frontend','java','go','backend'];
var proffesionName = document.getElementById('proffesion-name');
proffesionName.innerHTML = proffesionTable[0];
var random = Math.random();

if(0.25>random>0){
    proffesionName.innerHTML = proffesionTable[0];
} else if(0.50>random>0.25) {
    proffesionName.innerHTML = proffesionTable[1];
} else if(0.75>random>0.50) {
    proffesionName.innerHTML = proffesionTable[2];
} else {
    proffesionName.innerHTML = proffesionTable[3];
}
