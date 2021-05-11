var btn1 = document.querySelector(".btn1");
var img = document.getElementById("star");


btn1.addEventListener('click',()=>{
    img.src="imgb/img.jpg";
    img.style.height="500px";
    setTimeout(()=>{
        img.src="imgb/VR.png";
        img.style.height="634px";
        },5000)
})
