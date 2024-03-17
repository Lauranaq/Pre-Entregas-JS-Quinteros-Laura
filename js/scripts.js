//Nombre y Apellido de usuario
let nombreIngresado = prompt("Ingresa tu nombre");
while ( nombreIngresado==="" || !isNaN(nombreIngresado)){
    if (nombreIngresado === ""){
        alert ("un texto vacio no es valido");
    } else {
        alert ("No se puede ingresar campos numerico");
    }
     nombreIngresado = prompt ("Ingresa tu nombre");
}
let apellidoIngresado = prompt("Ingresa tu apellido");
while ( apellidoIngresado==="" || !isNaN(apellidoIngresado)){
    if (apellidoIngresado === ""){
        alert ("un texto vacio no es valido");
    } else {
        alert ("No se puede ingresar campos numericos");
    }
     apellidoIngresado = prompt ("Ingresa tu apellido");
}
//Saludo de bienvenida al ususario
alert("Hola, "+ nombreIngresado + " " + apellidoIngresado + ". ¡Bienvenido/a!");
console.log(nombreIngresado +" "+ apellidoIngresado);

//Solicitud de Correo electronico 
let correo = prompt ("Por favor, ingresa tu correo electronico");
console.log ("El correo electronico de " + nombreIngresado + " "+ apellidoIngresado +" es "+ correo);

//Solicitud de edad del usuario
let edad = parseInt(prompt ("Por favor, Ingresa tu edad"));

while (edad=== ""|| isNaN(edad)){    
        alert ("Debes ingresar tu edad para continuar");      
        edad = parseInt(prompt ("Por favor, Ingresa tu edad en numeros"));
}    
console.log (edad +" "+ "anos");

// Verificacion que el usuario sea mayor de 21 anos
if (edad < 21) {
    alert ("¡Lo sentimos " + nombreIngresado + "! No podemos ofrecerte nuestros servicios");
} else {
    alert ("¡Felicitaciones "+ nombreIngresado + "! Estas mas cerca de obtener tu prestamo" );

//Motivo del prestamo 
    let motivos; 
    do {
        motivos = parseInt(prompt("Por favor, selecciona el numero de la opcion: 1.Compra de un automóvil, vehículo. \
            2.Reparaciones o mejoras en el hogar.\
            3.Viaje o vacaciones.\
            4.pago o refinanciamiento de pasivos.\
            5.Otros"));
        } while (isNaN(motivos));
        

    switch (motivos) {
        case 1:
            alert ("Dispones de hasta $500000 para la compra de tu vehiculo");
            break;
        case 2:
            alert ("Dispones de hasta $300000 para destinar a tu hogar");    
            break;
        case 3:
            alert ("Dispones de hasta $200000 para tus vacaciones");
            break;    
        case 4:
            alert ("Dispones de hasta $100000 para pagar tus pasivos");
            break;    
        case 5:
            alert (" Dispones de $50000 para lo que decidas gastarlo ");
            break;     
        default:
            alert ("Motivo no valido");           
        }  
        //Monto del prestamo que desearia solicitar el usuario  
        let montoPrestamo = parseInt(prompt("Ingresa el monto del prestamo que desea solicitar"));
        while (montoPrestamo === ""|| isNaN (montoPrestamo)){
            alert ("Debes ingresar el monto que desea solicitar en numeros");
            montoPrestamo = parseInt(prompt("Ingresa el monto del prestamo que desea solicitar"));
        }
        //Consulta sobre cantidad de cuotas
        let cuotas = parseInt(prompt("Ingresa la cantidad de cuotas que desea solicitar"));
        while (cuotas === ""|| isNaN (cuotas)){
            alert ("Debes ingresar el numero de cuotas que desea solicitar");
            cuotas = parseInt(prompt("Ingresa el numero de cuotas que desea solicitar"));
        }
        //Calculo del importe de la cuota
        let tasaInteres = 0.06;
        let interesTotal = montoPrestamo * tasaInteres;
        let montoCuota = (montoPrestamo + interesTotal) / cuotas;
        alert ("el valor de tu cuota va a ser de "+ montoCuota);


        // Establezco una funcion recopilando datos para despedir al usuario
        function despedir() {
            alert("Nuestro equipo de asesores se estara comunicado con vos "+ nombreIngresado+ " " + apellidoIngresado+ " a la brevedad.");
            let verificacion = prompt ("¿Tu correo electronico es "+ correo + " ? "+" (responde por si o por no)");
            let respuesta1 = "si";
            let respuesta2 = "no";

            while (verificacion === ""|| !isNaN(verificacion)|| verificacion.toLowerCase() == respuesta2){
                if (verificacion === ""|| !isNaN(verificacion)){
                alert ("Por favor, Ingresa una respuesta valida");
                } else{
                alert ("Ingresa, nuevamente, tu correo electronico y nos contactaremos a la brevedad. Gracias");
                }
                verificacion = prompt ("Ingresa tu correo electronico");
            }
            if (verificacion.toLowerCase () == respuesta1){
                 alert (" Gracias, nos estaremos comunicando a la brevedad.")
            }
        }        
        //Despedida del usuario
        despedir();
}
 



    






