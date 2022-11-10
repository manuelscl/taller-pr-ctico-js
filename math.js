// Calcular el perímetro y/o el área de un cuadrado
console.group('CUADRADO');
const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;

const areaCuadrado = ladoCuadrado * ladoCuadrado;

function calcularCuadrado(lado) {
    return {
        perimetro: lado * 4,
        area: lado * lado
    };
}
calcularCuadrado(5);
console.log({
    ladoCuadrado,
    perimetroCuadrado,
    areaCuadrado
});
console.groupEnd('CUADRADO');

// Calcular el perímetro y/o área de un triángulo
console.group('TRIANGULO')
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTrianguloBase = 4;
const alturaTriangulo = 5.5;

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase;
const areaTriangulo = (ladoTrianguloBase * alturaTriangulo) / 2;

function calcularTriangulo(lado1, lado2, base, altura) {
    return {
        perimetro: lado1 + lado2 + base,
        area: (base * altura) / 2
    };
}
calcularTriangulo(12, 12, 4, 5.5);
console.log({
    ladoTriangulo1,
    ladoTriangulo2,
    ladoTrianguloBase,
    alturaTriangulo,
    perimetroTriangulo,
    areaTriangulo
})

console.groupEnd('TRIÁNGULO');

// Calcular el perímetro (la circunferencia) y calcular el área
// Perímetro: Diámetro * PI
// Área: Radio**2 * PI

console.group('CÍRCULO');
const radioCirculo = 3;
const diametroCirculo = radioCirculo * 2;
const PI = 3.1415;

const circunferencia = diametroCirculo * PI;
// const areaCirculo = (radioCirculo * radioCirculo) * PI;
const areaCirculo = (radioCirculo ** 2) * PI;

console.log({
    radioCirculo,
    diametroCirculo,
    PI,
    circunferencia,
    areaCirculo
});

function calcularCirculo(radio) {
    const diametro = radio * 2;
    const radioAlCuadrado = Math.pow(radio, 2);

    return {
        circunferencia: diametro * Math.PI,
        area: radioAlCuadrado * Math.PI.toFixed(3)
    };
}
console.groupEnd('CÍRCULO');
