console.log(salarios);

function encontrarPersona(personaEnBusqueda) {
    const persona = salarios.find(persona => persona.name == personaEnBusqueda);
    // const persona = salarios.find(() => {
    //     return persona.name == personaEnBusqueda; 
    //  });
    return persona;
}

function medianaPorPersona(nombrePersona) {
    const trabajos = encontrarPersona(nombrePersona).trabajos;

    const salarios = trabajos.map(function (elemento) {
        return elemento.salario;
    });
    // for(let i = 0; i < trabajos.length; i++) {
    //     console.log(trabajos[i].salario);
    // }
    const medianaSalarios = PlatziMath.calcularMediana(salarios);
    console.log(medianaSalarios);
}