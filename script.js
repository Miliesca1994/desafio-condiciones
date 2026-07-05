const imagen = document.getElementById("imagen");

imagen.addEventListener("click", function(){

    if(imagen.style.border === ""){
        imagen.style.border = "2px solid red";
    }else{
        imagen.style.border = "";
    }

});

const boton = document.getElementById("verificar");

boton.addEventListener("click", function(){

let sticker1 = Number(document.getElementById("sticker1").value);
let sticker2 = Number(document.getElementById("sticker2").value);
let sticker3 = Number(document.getElementById("sticker3").value);

let total = sticker1 + sticker2 + sticker3;

const resultado = document.getElementById("resultado");

if(total <= 10){
    resultado.innerHTML = "Llevas " + total + " stickers";
}else{
    resultado.innerHTML = "Llevas demasiados stickers";
}

});