var btn1 = document.querySelector(".btn1");
var img = document.getElementById("star");


btn1.addEventListener('click',()=>{
    img.src="imgb/img.jpg";
    setTimeout(()=>{
        img.src="imgb/VR.png";
        },5000)
})
