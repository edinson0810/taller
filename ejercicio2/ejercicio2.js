export function esPrimo(num) {
    let primo = true;
        for ( let i = 2; i <= num; i++){
            if (num % i === 0) return false;
            primo = false;
            break
        }
        return true;
    }

    export function esPar(num) {
        return num % 2 === 0;
    }

export function sumarNumero(...numeros) {
let suma = 0;
for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
    }
return suma;
}

 export function contarPrimos(...numeros) {
    let contarPrim = 0;
    for (let i = 0; i < numeros.length; i++){
        if (esPrimo(numeros[i])){
            contarPrim++;
        }
    }
    return contarPrim;
 }

 export function contarPares(...numeros) {
    let contadorPar = 0;
    for(let i = 0; i < numeros.length; i++){
        if(esPar(numeros[i])){
            contadorPar++;
        }
    }
   return contadorPar;
 }

 export function PromedioNumerosPrimos(...numeros){
    let sumaPrimo = 0;
    let contadorPrimos = 0;
    for ( let i = 0; i < numeros.length; i++){
        if (esPrimo(numeros[i])){
            sumaPrimo += numeros[i];
            contadorPrimos++;
        }
    }
    return contadorPrimos > 0 ? sumaPrimo / contadorPrimos : 0;}

 export function PromedioPar(...numeros){
    let sumarPares = 0;
    let contadorPares = 0;
    for (let i = 0; i< numeros.length; i++){
        if (esPar(numeros[i])){
            sumarPares += numeros[i];
            contadorPares++;
        }
    }
    return contadorPares > 0 ? sumarPares / contadorPares : 0;
 }














