//datos
const nombres ="mary";
const  clave ="1234";

//capturamos la informacion del DOM
let nomIng=document.getElementById("usuario");
let claveIng=document.getElementById("contraseña");
let boton=document.getElementById("btn-ingresar");

//escuchamos el evento 
boton.AddEventListener("click",function(){
    alert(nomIng.value);
});
