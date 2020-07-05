const proffesionTable = ['frontend','java'];
var proffesionName = document.getElementById('proffesion-name');
proffesionName.innerHTML = proffesionTable[0];
var random = Math.random();

if(random<0.5){
    proffesionName.innerHTML = proffesionTable[0];
} else {
    proffesionName.innerHTML = proffesionTable[1];
}
