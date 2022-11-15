function calcularPromedio(lista) {
    //sumar todos los elementos del array / cantidad de elementos, lista.length.
    
    // let sumaLista = 0;
    // for(let i = 0; i < lista.length; i++) {
    //     sumaLista = sumaLista + lista[i];
    // }

    // Usando reduce()
    // function sumarElementos(valorAcumulado, valorNuevo) {
    //     return valorAcumulado + valorNuevo;
    // }
    const sumarElementos = (valorAcumulado, valorNuevo) => valorAcumulado + valorNuevo;
    const sumaLista = lista.reduce(sumarElementos);

    const promedio = sumaLista / lista.length;
    console.log(promedio);
    return promedio;
}