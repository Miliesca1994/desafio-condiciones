const imagen = document.getElementById("imagen");

imagen.addEventListener("click", function(){

    if(imagen.style.border === ""){
        imagen.style.border = "2px solid red";
    }else{
        imagen.style.border = "";
    }

});