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

//                                 Funciones 

// Funcion Saludar al usuarios
const saludar = (persona)=> {
    alert("Hola, "+ persona +". ¡Bienvenido/a!");
}

// Funcion Motivos del prestamo 
function consultar(){
    let motivos; 
    
    do {
        motivos = parseInt(prompt("Por favor, selecciona el motivo del prestamo:\
        \n1.Compra de un automóvil, vehículo. \
        \n2.Reparaciones o mejoras en el hogar.\
        \n3.Viaje o vacaciones.\
        \n4.pago o refinanciamiento de pasivos.\
        \n5.Otros"));
        } while (isNaN(motivos) || motivos < 1 || motivos > 5 || motivos === "");
        

    switch (motivos) {
        case 1:
            alert ("Podemos ofrecerte el Prestamo1 de $500.000 para la compra de tu vehiculo.");
            break;
        case 2:
            alert ("Podemos ofrecerte el Prestamo2 de $300.000 para destinar a tu hogar.");    
            break;
        case 3:
            alert ("Podemos ofrecerte el Prestamo3 de $200.000 para tus vacaciones.");
            break;    
        case 4:
            alert ("Podemos ofrecerte el Prestamo4 de $100.000 para pagar tus pasivos.");
            break;    
        case 5:
            alert ("Podemos ofrecerte el Prestamo5 de $50.000 para lo que decidas gastarlo.");
            break;     
        default:
            alert ("Motivo no valido");           
        }  
}


//Funcion para obtener el monto del prestamo elegido
function montoDePrestamo (tipoSeleccionado) {
  return prestamos.find (prestamo=> prestamo.tipo === tipoSeleccionado)?.monto;
}


//Funcion para calcular el valor de la cuota 
function calcularValorCuota (monto, cuotasSeleccionadas){
    return (monto/cuotasSeleccionadas)*1.6;
}

//Funcion despedir al Usuario
 function despedir (final){
    alert ("Nuestro equipo de asesores se estara comunicado con vos "+ final);
    let correo = prompt ("Ingresa tu correo electronico");
    while (correo=== ""){
        alert ("Debes completar este campo");
        correo = prompt ("Ingresa tu correo electronico, por favor");
    }
    alert ("¡Gracias,"+" "+ final + " por visitar nuestro sitio!");
 }



//FUNCION PRINCIPAL
function ejecutarProceso() {
    //NOMBRE DE USUARIO
    let nombreIngresado = prompt ("Ingrese su nombre");
    while (nombreIngresado === "" || !isNaN(nombreIngresado)){
        if (nombreIngresado === ""){
            alert("Un texto vacio no es valido");
        }else {
            alert ("No se puede ingresar campos numericos");
        }
        nombreIngresado = prompt(" Ingrese su nombre, por favor");
    }
    console.log (nombreIngresado);
    
    // Saludo de binvenida al Usuario
    saludar (nombreIngresado);
    
    
    // Edad del Usuario
    let edad = parseInt (prompt ("Ingrese su edad"));
    while (edad === "" || isNaN(edad)){
            alert ("Debe ingresar su edad para continuar");      
            edad = parseInt(prompt ("Por favor, Ingrese su edad en numeros"));
    }   
    console.log(edad +" "+ "anos");
    
    // Verifico que el usuario sea mayor de 21 años
    if (edad < 21){
        alert ("¡Lo sentimos "+ nombreIngresado + "! No podemos ofrecerle nuestros servicios");
    } else{
        alert ("¡Felicitaciones "+ nombreIngresado + "! Estas mas cerca de obtener tu prestamo" );
    
    // Consulto el motivo del prestamo
    consultar();
    
    // Pedir al usuario que elija el tipo de préstamo
    let tipoSeleccionado = prompt("Por favor, elija el tipo de préstamo:\n1. Prestamo1 (Vehiculo)\n2. Prestamo2 (Hogar)\n3. Prestamo3 (Vacaciones) \n4. Prestamo4 (Pasivos) \n5. Prestamo5 (Otros).");
    while (tipoSeleccionado === ""|| isNaN(tipoSeleccionado) || tipoSeleccionado < 1 || tipoSeleccionado > 5){
        alert ("Ingrese el numero correspondiente al prestamo que desea solicitar");
        tipoSeleccionado = parseInt(prompt ("Por favor, elija el tipo de préstamo:\n1. Prestamo1 (Vehiculo)\n2. Prestamo2 (Hogar)\n3. Prestamo3 (Vacaciones) \n4. Prestamo4 (Pasivos) \n5. Prestamo5 (Otros)."));
    }
    
    // Pedir al usuario que elija la cantidad de cuotas
    let cuotasSeleccionadas = prompt("Por favor, elija la cantidad de cuotas:\n" + cuotas.join('\n'));
    while (cuotasSeleccionadas=== " "|| isNaN (cuotasSeleccionadas) || cuotasSeleccionadas < 1 || cuotasSeleccionadas > 6){
        alert ("Debe ingresar un numero de cuotas valido");
        cuotasSeleccionadas = parseInt(prompt("Por favor, ingrese el numero de cuotas"));
    };
    
    // Obtener el monto del préstamo seleccionado por el usuario
    const montoPrestamo = montoDePrestamo(prestamos[parseInt(tipoSeleccionado) - 1].tipo);
    
    // Calcular el valor de la cuota
    const valorCuota = calcularValorCuota(montoPrestamo, parseInt(cuotasSeleccionadas));
    
    // Mostrar el resultado al usuario
    alert("El valor de cada cuota será de: $" + valorCuota.toFixed(2));
    
    // Despedida del Usuario
    despedir(nombreIngresado);
    }

}
//llamo a la funcion ejecutar proceso
ejecutarProceso ();
