const ordenNumeros = (... numeros) => {
    for ( let i = 0; i < numeros.length; i ++){
for ( let a = 0; a < numeros.length-1; a++) {
    if( numeros[a] < numeros[a + 1]) {
        let temp = numeros [a];
        numeros[a] = numeros[a + 1];
        numeros[a + 1] = temp;
    }
}
    }
    console.table(numeros);
};

function programa() {
    let cantidad = parseInt(prompt("Ingrese la cantidad de numeros deseados"));
    let numeros = [];
    for ( let i = 0; i < cantidad; i++){
        let numero = parseInt(prompt(`Ingrese el numero ${i + 1}`));
        numeros.push(numero);
    }
    ordenNumeros(...numeros);
}

programa();