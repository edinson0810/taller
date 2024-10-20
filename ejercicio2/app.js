import { contarPares, contarPrimos, esPar, esPrimo, PromedioNumerosPrimos, PromedioPar, sumarNumero } from "./ejercicio2.js";



function programa() {
    let cantidad = parseInt(prompt("ingrese la cantidad de numeros deseados"));
    let numeros = [];

    for ( let i = 0; i < cantidad; i++){
        let numero = parseInt(prompt(`Ingrese el numero ${i + 1}:`));
        numeros.push(numero);
    }
    let opcion = prompt(`Eliga la opcion:
        a. sumar los numeros
        b. Contar los numero primos
        c. Contar los numero pares
        d. Calcular el promedio de los numeros primos
        e. Calcular el promedio de numero pares`);
    if (opcion.toLowerCase() === 'a' ) {
            alert("La Suma de los numero es:" + sumarNumero(numeros));
        } else if (opcion.toLowerCase() === 'b' ) {
            alert("la cantidad de numero primos es:" + contarPrimos(numeros));
        } else if (opcion.toLowerCase() === 'c') {
            alert("la cantidad de numeros pares es:" + contarPares(numeros));  
        } else if (opcion.toLowerCase() === 'd') {
            alert("el promedio de los numero primos es:" + PromedioNumerosPrimos(numeros));
        } else if (opcion.toLowerCase() === 'e') {
            alert("el promedio de los numeros pares es:" + PromedioPar(numeros));
        } 
 }

 programa();

