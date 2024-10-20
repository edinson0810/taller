 export class calcular {
    suma(a, b) {
      try {
        if (isNaN(a) || isNaN(b)) return "Los valores deben ser numeros";
        return a + b;
      } catch (error) {
        return `Error en la suma: ${error}`;
      }  
    }


resta (a, b) {
    try {
        if (isNaN(a) || isNaN(b)) return"Los valores deben ser numeros";
        return a - b;
    } catch (error) {
        return `Error en la resta: ${error}`;
    }
}


multiplicar (a, b) {
    try {
        if (isNaN(a) || isNaN(b)) return "Los valores deben ser numeros";
        return a * b;
    } catch (error) {
        return `Error en la multiplicacion: ${error}`;
    }
}
 division(a, b) {
    try {
        if (isNaN(a) || isNaN(b)) return "Los valores deben ser numeeros";
        if ( b === 0) return" No  se puede dividir por cero.";
        return a / b;
    } catch (error) {
        return `Error en la division: ${error}`;
        
    }
 }
}
