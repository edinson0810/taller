let numero = parseInt(prompt(`Ingrese el numero`));

const esPrimo = (a) => {
    let primo =  true;
    for (i = 2; i <= a; i++){
    if (a % i === 0) {
        primo= false;
        break
        }
    }
    return primo;
}

let respuesta = esPrimo(numero);

let primo = respuesta ? `Si` : `No`;

console.log(`El numero ${numero} es primo? ${primo}`);

