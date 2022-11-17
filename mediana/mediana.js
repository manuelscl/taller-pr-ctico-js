function esPar(lista) {
    // numero / 2
    // (numero % 2)
    console.log(!(lista.length % 2));
    return !(lista.length % 2);
}
// function esImpar(lista) {
//     return lista.length % 2;
// }

function calcularMediana(lista) {
    const listaEsPar = esPar(lista);

    if(listaEsPar) {
        // ...
    } else {
        const indexListaImpar = Math.floor(lista.length / 2);
        const medianaListaImpar = lista[indexListaImpar];
        console.log(indexListaImpar);
        console.log(medianaListaImpar);
        return medianaListaImpar;
    }
}

function calcularPromedio(lista) {
    //sumar todos los elementos del array / cantidad de elementos, lista.length.

    function sumarElementos(valorAcumulado, valorNuevo) {
        return valorAcumulado + valorNuevo;
    }
    // const sumarElementos = (valorAcumulado, valorNuevo) => valorAcumulado + valorNuevo;
    const sumaLista = lista.reduce(sumarElementos);
    const promedio = sumaLista / lista.length;

    console.log(promedio);
    return promedio;
}