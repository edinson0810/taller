// verificar si la tarjea america tiene 15 digitos
export function america(numero) {
    let exp = /^3[4-7]\d{13}$/;
    return exp.test(numero)
    
}
// verificar si la tarjea diners tiene 14 digitos que inicie con 300, 305, 36,38
export function diners(numero) {
let exp = /^3(?:0[0-5]|[68]\d)\d{11}$/;  
return exp.test(numero);
}

// verificar si la tarjeta discover tiene 16 digitos que inicie con 6011
export function discover(numero) {
    let exp = /^6011\d{12}$/;
    return exp.test(numero);
}
// verificar si la tarjeta mastercad tiene 16 digitos que inicie con 51, 55
export function mastercad(numero) {
    let exp = /^5[1-5]\d{14}$/;
    return exp.test(numero);
    
}
// verificar si la tarjeta visa tiene 16 digitos que inicie con 4
export function visa(numero) {
    let exp = /^4\d{15}$/;
    return exp.test(numero);    
}



while (true) {
    
let numero = parseInt(prompt("Ingrese el numero de tarjeta"));

try { 
    // verificar que el caracter sea numero
    if (isNaN(numero)) {
        throw new Error("Caracter no permitdo");
        
    } 
    // verificar que no tenga mas de 16 caracteres
    if (numero.length > 16) {
        throw new Error("Longuitud no Valida");
    }
    // que el numero sea positivo
    if (parseInt(numero) < 0) {
        throw new Error("No se permite numeros negativos");
        
    }
    // se comple la funcion america da la alerta 
    if (america(numero)) {
        alert("la Tarejta es america") ;
        break;
    } 
    // se comple la funcion diners da la alerta 
    else if (diners(numero)) {
    alert("la Tarejta es diners") ;
    break;
} 
// se comple la funcion discover da la alerta 
else if (discover(numero)) {
        alert("la Tarejta es discover");
        break; 
    } 
    // se comple la funcion mastercad da la alerta 
    else if (mastercad(numero)) {
        alert("la Tarejta es mastercad") ;
        break;
    } 
    // se comple la funcion visa da la alerta 
    else if (visa(numero)) {
        alert("la Tarej     ta es visa") ;
        break;
    } else {
    //    no se cumple ninguna la funcion  da la alerta 
        alert("No pertenece a ninguna tarjeta");
        break;
    }

    break;
} catch (error){
alert(error.message)
}

}











