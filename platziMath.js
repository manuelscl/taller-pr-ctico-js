const PlatziMath = {};

PlatziMath.esPar = function esPar(lista) {
    // numero / 2
    // (numero % 2)
    return !(lista.length % 2);
}
// function esImpar(lista) {
//     return lista.length % 2;
// }

PlatziMath.calcularModa = function calcularModa(lista) {
    const listaCount = {};

    for(let i = 0; i < lista.length; i++) {
        const elemento = lista[i]

        if(listaCount[elemento]) {
            listaCount[elemento] += 1;
        } else {
            listaCount[elemento] = 1;
        }
    }
    
    const listaArray = Object.entries(listaCount);
    const listaOrdenada = ordenarListaBidimensional(listaArray, 1);
    const listaMaxNumber = listaOrdenada[listaArray.length - 1];
    // console.log(listaCount, listaArray, listaOrdenada);
    // console.log(`La moda es: ${listaMaxNumber[0]}`);

    const moda = listaMaxNumber[0];
    return moda;
}

PlatziMath.calcularMediana = function calcularMediana(listaDesordenada) {
    const lista = PlatziMath.ordenarLista(listaDesordenada);
    const listaEsPar = PlatziMath.esPar(lista);

    if(listaEsPar) {
        const indexMitad1ListaPar = (lista.length / 2) - 1;
        const indexMitad2ListaPar = lista.length / 2;
        // const mitad1ListaPar = lista[(lista.length / 2) - 1];
        // const mitad2ListaPar = lista[lista.length / 2];
        const listaMitades = [];
        listaMitades.push(lista[indexMitad1ListaPar]);
        listaMitades.push(lista[indexMitad2ListaPar]);

        PlatziMath.calcularPromedio(listaMitades)
    } else {
        const indexMitadListaImpar = Math.floor(lista.length / 2);
        const medianaListaImpar = lista[indexMitadListaImpar];
        // console.log(indexMitadListaImpar);
        // console.log(medianaListaImpar);
        return medianaListaImpar;
    }
}

PlatziMath.calcularPromedio = function calcularPromedio(lista) {
    function sumarTodosElementos(valorAcumulado, valorNuevo) {
        return valorAcumulado + valorNuevo;
    }
    const sumaLista = lista.reduce(sumarTodosElementos);
    const promedio = sumaLista / lista.length;

    // const result = Array.isArray(lista)

    console.log(promedio);
    return promedio;
}

PlatziMath.ordenarLista = function ordenarLista(listaDesordenada) {
    function ordernarListaSort(valorAcumulado, valorNuevo) {
        // if(valorAcumulado > valorNuevo) {
        //     return 1;
        // } else if(valorAcumulado == valorNuevo) {
        //     return 0;
        // } else if(valorAcumulado < valorNuevo) {
        //     return -1;
        // }
        return valorAcumulado - valorNuevo;
    }
    const lista = listaDesordenada.sort(ordernarListaSort);
    // const ordenarLista = lista.sort((a,b) => a - b);

    return lista;
}

PlatziMath.ordenarListaBidimensional = function ordenarListaBidimensional(listaDesordenada, i) {
    function ordernarListaSort(valorAcumulado, valorNuevo) {
        return valorAcumulado[i] - valorNuevo[i];
    }
    const lista = listaDesordenada.sort(ordernarListaSort);
    
    return lista;
}