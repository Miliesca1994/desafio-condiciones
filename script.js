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

const boton = document.getElementById("ingresar");

boton.addEventListener("click", function(){

let digito1 = document.getElementById("digito1").value;
let digito2 = document.getElementById("digito2").value;
let digito3 = document.getElementById("digito3").value;

let password = digito1 + digito2 + digito3;

const resultado = document.getElementById("resultado");

if(password === "911"){
    resultado.innerHTML = "Password 1 correcto";
}
else if(password === "714"){
    resultado.innerHTML = "Password 2 correcto";
}
else{
    resultado.innerHTML = "Password incorrecto";
}

});
