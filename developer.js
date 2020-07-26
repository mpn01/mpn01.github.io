const proffesionTable = ['frontend','java','C#','go'];
var proffesionName = document.getElementById('proffesion-name');
proffesionName.innerHTML = proffesionTable[0];
var random = Math.random();
var email = document.querySelector('.form-email-copy');
email.addEventListener('click', copyToClipboard);
var contactBtn = document.querySelector('.contact-btn');
var contact = document.getElementById('contact');
var contactCloseBtn = document.getElementById('contact-close-btn');
var btnStatus = false;

function showContact() {
    if(btnStatus == false){
        contact.style.display = 'flex';
        btnStatus = true;
        contact.style.animation = 'slideIn .5s';
    }
}
function hideContact() {
    if(btnStatus == true){
        contact.style.display = 'none';
        btnStatus = false;
        contact.style.animation = 'slideOut 1s';
    }
}

contactBtn.addEventListener('click', showContact);
contactCloseBtn.addEventListener('click', hideContact);

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

}