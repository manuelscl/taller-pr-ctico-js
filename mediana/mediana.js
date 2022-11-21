function esPar(lista) {
    // numero / 2
    // (numero % 2)
    return !(lista.length % 2);
}
// function esImpar(lista) {
//     return lista.length % 2;
// }

function calcularMediana(lista) {
    const listaEsPar = esPar(lista);

    if(listaEsPar) {
        
    } else {
        const indexMitadListaImpar = Math.floor(lista.length / 2);
        const medianaListaImpar = lista[indexMitadListaImpar];
        console.log(indexMitadListaImpar);
        console.log(medianaListaImpar);
        return medianaListaImpar;
    }
}

function calcularPromedio(lista) {
    function sumarElementos(valorAcumulado, valorNuevo) {
        return valorAcumulado + valorNuevo;
    }
    const sumaLista = lista.reduce(sumarElementos);
    const promedio = sumaLista / lista.length;

    // console.log(promedio);
    return promedio;
}