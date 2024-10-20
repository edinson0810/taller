const palabraMas = (...palabras) => {
    let masPalabra = palabras[0];

    for(let i = 0; i < palabras.length; i++){
        if(palabras[i] > masPalabra){
            masPalabra = palabras[i];
        }
    }
    return masPalabra;
}

function principal() {
    let cantidad = parseInt(prompt("Ingrese cuantas palabras desea insertar"));
    let palabras = [];
    for ( let i = 0; i < cantidad; i++){
        let palabra = prompt(`Ingrese la palabra ${i + 1}`)
        palabras.push(palabra);
    }
     let resultado = palabraMas(...palabras);
     console.log("La palabra mayor es: " + resultado);
     
}

principal();