// Definir la función que recibe un número entero como parámetro
function parOImpar(numero) {
    // Comprobar si el número es par o impar
    if (numero % 2 === 0) {
        return "El número " + numero + " es par.";
    } else {
        return "El número " + numero + " es impar.";
    }
}

// Ejemplo de uso de la función
var numero = 7; // Puedes cambiar este valor para probar otros números
var resultado = parOImpar(numero);

// Mostrar el resultado por pantalla
console.log(resultado);
