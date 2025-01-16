// Solicitar al usuario ingresar el valor de los lados del rectángulo
var ladoA = parseFloat(prompt("Ingrese el valor del lado A del rectángulo:"));
var ladoB = parseFloat(prompt("Ingrese el valor del lado B del rectángulo:"));

// Función para calcular el perímetro del rectángulo
function calcularPerimetro(a, b) {
    return 2 * (a + b);
}

// Calcular el perímetro usando la función
var perimetro = calcularPerimetro(ladoA, ladoB);

// Mostrar el perímetro por pantalla
console.log("El perímetro del rectángulo es: " + perimetro);
