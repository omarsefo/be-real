setTimeout(function() {
    var response = confirm("Do you want to see the real UI/UX images that I copied?\nClick OK to allow pop-ups for this site and reload the page please.");
    if (response) {
        var image = new Image();
        image.src = "./imgb/img.jpg";
        image.alt = "Be real";

        var newWindow = window.open("", "_blank");
        
        newWindow.document.write("<!DOCTYPE html><html><head><title>Image Display</title></head><body>");
        newWindow.document.write("<img width='100%' src='" + image.src + "' alt='" + image.alt + "'>");
        newWindow.document.write("</body></html>");
    } else {

    }
  }, 4500);
  

// const menup = document.getElementById('menu');
// const closep = document.getElementById('close-menu');
// const openp = document.getElementById('menu-btn');
// var as1 =document.getElementsByTagName('a')[1];
// var as2 =document.getElementsByTagName('a')[2];
// var as3 =document.getElementsByTagName('a')[3];
// var as4 =document.getElementsByTagName('a')[4];
// var as5 =document.getElementsByTagName('a')[5];
// var as6 =document.getElementsByTagName('a')[6];
// var as7 =document.getElementsByTagName('a')[7];

// window.addEventListener('load',close);
// document.addEventListener('load',close);
// openp.addEventListener('click',show);
// closep.addEventListener('click',close);
//     as1.addEventListener('click',close);
//     as2.addEventListener('click',close);
//     as3.addEventListener('click',close);
//     as4.addEventListener('click',close);
//     as5.addEventListener('click',close);
//     as6.addEventListener('click',close);
//     as7.addEventListener('click',close);
// function show() {
//     menup.style.display ='block';
//     menup.style.left ='0';
// }
// function close() {
//     menup.style.left ='-150%';
// }
