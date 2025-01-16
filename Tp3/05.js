// Definir la función que recibe una cadena de texto como parámetro
function analizarCadena(cadena) {
    // Verificar si la cadena está formada solo por mayúsculas
    if (cadena === cadena.toUpperCase()) {
        return "La cadena está formada solo por mayúsculas.";
    }
    // Verificar si la cadena está formada solo por minúsculas
    else if (cadena === cadena.toLowerCase()) {
        return "La cadena está formada solo por minúsculas.";
    }
    // La cadena está formada por una mezcla de mayúsculas y minúsculas
    else {
        return "La cadena está formada por una mezcla de mayúsculas y minúsculas.";
    }
}

// Ejemplo de uso de la función
var texto = "Hola Mundo"; // Puedes cambiar este valor para probar otras cadenas
var resultado = analizarCadena(texto);

// Mostrar el resultado por pantalla
console.log(resultado)