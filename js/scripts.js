//Nombre y Apellido de usuario
let nombreIngresado = prompt("Ingrese su nombre");
let apellidoIngresado = prompt ("Igrese su apellido");
alert("Hola, "+ nombreIngresado + " " + apellidoIngresado + ". ¡Bienvenido/a!");
console.log( nombreIngresado +" "+ apellidoIngresado);

//Edad del usuario
let edad = prompt ("ingrese su edad");

if (edad >=21) {
    alert("¡Felicitaciones "+ nombreIngresado + "! Estas mas cerca de obtener tu prestamo");
} else {
    alert("¡Lo sentimos " + nombreIngresado + "! No podemos ofrecerte nuestros servicios");
}
console.log(edad);

//Requisitos para prestamo
let respuesta1 = "si";
let respuesta2= "no";
let prestamoActivo = prompt ("solicitaste un prestamo en los ultimos 6 meses"+ " " + nombreIngresado + " "+ apellidoIngresado +"?");

if (prestamoActivo.toLowerCase() == respuesta1){
    alert("¡Lo sentimos " + nombreIngresado + "! No podemos ofrecerte nuestros servicios")
} else if (prestamoActivo.toLowerCase() == respuesta2) {
    alert("¡El prestamo ya casi es tuyo"+ " "+nombreIngresado+ "!");
}else {
    alert ("el dato ingresado es incorrecto");
}


let numero = parseInt(prompt("ingrese el monto del prestamo que desea solicitar"));
if (numero> 500000) {
    alert ("Lamentamos informarte que el monto solicitado excede la cantidad disponible para tu prestamo")
} else { alert ("solo unos pasos mas y ya podras acceder a tu prestamo");}
