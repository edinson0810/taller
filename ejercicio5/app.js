import{calcular} from "./ejercicio5.js";

const Calcular = new calcular();


function programa() {
    let a = parseFloat(prompt("Ingrese el primer numero"));
    let b = parseFloat(prompt("Ingrese el segundo Numero"));
     let operacion = prompt("Elige la operacion:suma, resta,multiplicacion, division");

     let resultado;

     if (operacion === 'suma'){
        resultado = Calcular.suma(a, b);
     } else if (operacion === 'resta'){
        resultado = Calcular.resta(a, b);
     } else if (operacion === 'multiplicacion'){
        resultado = Calcular.multiplicar(a, b);
     }else if (opercion === 'division'){
        resultado = Calcular.division(a, b);
     }
alert(`${operacion} = ${resultado}`);

}


programa();

