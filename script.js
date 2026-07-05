//=========================
// Cambiar secciones
//=========================

function mostrar(id){

let secciones=document.querySelectorAll(".seccion");

secciones.forEach(sec=>{

sec.classList.add("oculto");

});

document.getElementById(id).classList.remove("oculto");

}

//=========================
// Parte 1
//=========================

const imagen=document.getElementById("imagen");

imagen.addEventListener("click",()=>{

if(imagen.style.border=="2px solid red"){

imagen.style.border="2px solid transparent";

}else{

imagen.style.border="2px solid red";

}

});

//=========================
// Parte 2
//=========================

document.getElementById("btnStickers").addEventListener("click",()=>{

let s1=Number(document.getElementById("sticker1").value);

let s2=Number(document.getElementById("sticker2").value);

let s3=Number(document.getElementById("sticker3").value);

let total=s1+s2+s3;

if(total<=10){

document.getElementById("resultadoStickers").innerHTML="Llevas "+total+" stickers";

}else{

document.getElementById("resultadoStickers").innerHTML="Llevas demasiados stickers";

}

});

//=========================
// Parte 3
//=========================

document.getElementById("btnPassword").addEventListener("click",()=>{

let password=

document.getElementById("num1").value+

document.getElementById("num2").value+

document.getElementById("num3").value;

if(password=="911"){

document.getElementById("resultadoPassword").innerHTML="Password 1 correcto";

}

else if(password=="714"){

document.getElementById("resultadoPassword").innerHTML="Password 2 correcto";

}

else{

document.getElementById("resultadoPassword").innerHTML="Password incorrecto";

}

});