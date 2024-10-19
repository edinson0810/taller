export function america(numero) {
    let exp = /^3[4-7]\d{13}$/;
    return exp.test(numero)
    
}

export function diners(numero) {
let exp = /^3(?:0[0-5]|[68]\d)\d{11}$/;  
return exp.test(numero);
}

export function discover(numero) {
    let exp = /^6011\d{12}$/;
    return exp.test(numero);
}

export function mastercad(numero) {
    let exp = /^5[1-5]\d{14}$/;
    return exp.test(numero);
    
}

export function visa(numero) {
    let exp = /^4\d{15}$/;
    return exp.test(numero);    
}



while (true) {
    
let numero = parseInt(prompt("Ingrese el numero de tarjeta"));

try {
    if (isNaN(numero)) {
        throw new Error("Caracter no permitdo");
        
    }
    if (numero.lengt > 16) {
        throw new Error("Longuitud no Valida");
    }
    if (parseInt(numero) < 0) {
        throw new Error("No se permite numeros negativos");
        
    }
    break;
} catch (error){
alert(error.message)
}

}









