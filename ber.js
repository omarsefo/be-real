var btn1 = document.querySelector(".btn1");
var img = document.getElementById("star");


btn1.addEventListener('click',()=>{
    img.src="imgb/img.jpg";
    img.style.height="500px";
    setTimeout(()=>{
        img.src="imgb/VR.png";
        img.style.height="634px";
        },5000)
});

const menup = document.getElementById('menu');
const closep = document.getElementById('close-menu');
const openp = document.getElementById('menu-btn');
var as1 =document.getElementsByTagName('a')[1];
var as2 =document.getElementsByTagName('a')[2];
var as3 =document.getElementsByTagName('a')[3];
var as4 =document.getElementsByTagName('a')[4];
var as5 =document.getElementsByTagName('a')[5];
var as6 =document.getElementsByTagName('a')[6];
var as7 =document.getElementsByTagName('a')[7];

window.addEventListener('load',close);
document.addEventListener('load',close);
openp.addEventListener('click',show);
closep.addEventListener('click',close);
    as1.addEventListener('click',close);
    as2.addEventListener('click',close);
    as3.addEventListener('click',close);
    as4.addEventListener('click',close);
    as5.addEventListener('click',close);
    as6.addEventListener('click',close);
    as7.addEventListener('click',close);
function show() {
    menup.style.display ='block';
    menup.style.left ='0';
}
function close() {
    menup.style.left ='-150%';
}
