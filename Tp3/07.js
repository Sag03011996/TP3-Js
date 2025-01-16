// Función para generar y mostrar la tabla de multiplicar
function mostrarTablaMultiplicar(numero) {
    for (var i = 1; i <= 10; i++) {
        console.log(numero + " x " + i + " = " + (numero * i));
    }
}

// Solicitar al usuario ingresar un número
var numero = parseInt(prompt("Ingrese un número para ver su tabla de multiplicar:"));

// Mostrar la tabla de multiplicar del número ingresado
mostrarTablaMultiplicar(numero);
