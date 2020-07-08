const proffesionTable = ['frontend','java','goLang','backend'];
var proffesionName = document.getElementById('proffesion-name');
proffesionName.innerHTML = proffesionTable[0];
var random = Math.random();
var email = document.querySelector('.form-email-copy');
email.addEventListener('click', copyToClipboard);


if(0.25>random>0){
    proffesionName.innerHTML = proffesionTable[0];
} else if(0.50>random>0.25) {
    proffesionName.innerHTML = proffesionTable[1];
} else if(0.75>random>0.50) {
    proffesionName.innerHTML = proffesionTable[2];
} else {
    proffesionName.innerHTML = proffesionTable[3];
}

console.log(random)


function copyToClipboard() {
    document.execCommand('copy')
}