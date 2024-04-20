//Array de objetos con los tipos de prestamos 
const prestamos = [
    {
        tipo: "Prestamo1 ",
        motivo: "vehiculo",
        monto: 500000    
    },
    {
        tipo: "Prestamo2",
        motivo: "Hogar",
        monto: 300000             
    },
    {
        tipo: "Prestamo3",
        motivo: "vacaciones ",
        monto: 200000    
    },
    {
        tipo: "Prestamo4",
        motivo: "Refiananciacion de Pasivos",
        monto: 100000     
    },
    {
        tipo: "Prestamo5",
        motivo: "Otros",
        monto: 50000      
    }
];

// Array con cantidad de cuotas disponibles 
const cuotas = [ 1, 2, 3, 4, 5, 6];


//Local Storage

// Guardo mi Objeto Prestamo en el Local Storage
let prestamosJSON = JSON.stringify(prestamos);
localStorage.setItem( "prestamos", prestamosJSON);

console.log(prestamosJSON);

// Guardo mi Objeto Cuotas en el Local Storage
let cuotasJSON = JSON.stringify (cuotas);
localStorage.setItem ("cuotas", cuotasJSON);

console.log(cuotasJSON);

//JSON Prestamos convertido en objeto
let prestamosObjeto = JSON.parse(prestamosJSON);
console.log(prestamosObjeto);

//JSON Cuotas convertido en Objeto 
let cuotasObjeto = JSON.parse (cuotasJSON);
console.log(cuotasObjeto);



//Local Storage Modo Color 
const body = document.body;

let modoColorLS = localStorage.getItem ("modo-color");
if (modoColorLS === ("modo-oscuro")){
    body.classList.add("modo-oscuro")
}

const btnModoColor = document.querySelector("#modo-color");
 
btnModoColor.addEventListener("click", () => {
    body.classList.toggle("modo-oscuro");
    if (body.classList.contains("modo-oscuro")){
        localStorage.setItem("modo-color", "modo-oscuro");
    }else{
        localStorage.removeItem ("modo-color");
    }
}) 

//Funcion para calcular el valor de la cuota
function calcularValorCuota(montoPrestamo, cuotasSeleccionadas) {
    const tasaInteres = 1.15; 
    const valorCuota = (montoPrestamo * tasaInteres) / cuotasSeleccionadas;
    return valorCuota;
}


 
//FUNCION PRINCIPAL
function ejecutarProceso() {

const form = document.getElementById("formulario"); 

form.addEventListener('submit', function(e) {

    e.preventDefault();

    let nombrePedido = document.getElementById("nombre").value;
    let edadPedida = document.getElementById("edad").value;
    let motivoPedido = document.getElementById("motivo").value;
    let tipoPedido = document.getElementById("tipo").value;
    let cuotasPedidas= document.getElementById("cuotas").value;
    let mailPedido= document.getElementById("mail").value;
    console.log(nombrePedido)
    console.log(edadPedida)
    console.log(motivoPedido)
    console.log(tipoPedido)
    console.log(cuotasPedidas)
    console.log(mailPedido)
     


//NOMBRE DE USUARIO
const mensajeNombre = document.getElementById ("errorNombre");
if (nombrePedido === "") {
    mensajeNombre.innerText= "Un texto vacio no es valido";
 }else if (!isNaN(nombrePedido)){
    mensajeNombre.innerText= "No se pude ingresar campos numericos";
 }else{
    mensajeNombre.innerText= ("Bienvenido/a "+ nombrePedido);
 };

       
// Edad del Usuario
const mensajeEdad = document.getElementById ("errorEdad");

if (edadPedida === "" || isNaN(edadPedida)){
    mensajeEdad.innerText= "Debe ingresar su edad para continuar"
}else if (edadPedida< 21){
    mensajeEdad.innerText= ("¡Lo sentimos "+ nombrePedido + "! No podemos ofrecerle nuestros servicios");
}else {
    mensajeEdad.innerText= ("¡Felicitaciones "+ nombrePedido + "! Estas mas cerca de obtener tu prestamo" );
    
};
 
 // Calcular el valor de la cuota
 const valorCuota = calcularValorCuota(tipoPedido,cuotasPedidas);
 console.log (valorCuota);

 // Mostrar el resultado al usuario
 const resultadoCuota = document.getElementById("resultado");
 resultadoCuota.innerText = "El valor de cada cuota será de: $" + valorCuota.toFixed(2);

    
// Despedida del Usuario  
 const mensajeMail = document.getElementById ("errorMail");

 if (mailPedido.trim() === ""){
    mensajeMail.innerText=("Por favor no dejar el campo vacio"+ nombrePedido);
}else {
    mensajeMail.innerText= ("Nuestro equipo de asesores se estara comunicando con vos "+ nombrePedido);
} 
}) }

//llamo a la funcion ejecutar proceso
ejecutarProceso ();
