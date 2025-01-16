// Crear un array para contar las apariciones de cada suma (de 2 a 12)
var conteoSumas = Array(11).fill(0);

// Función para lanzar un dado y obtener un número aleatorio entre 1 y 6
function lanzarDado() {
    return Math.floor(Math.random() * 6) + 1;
}

// Repetir la operación 50 veces
for (var i = 0; i < 50; i++) {
    var dado1 = lanzarDado();
    var dado2 = lanzarDado();
    var suma = dado1 + dado2;
    // Incrementar el contador de la suma correspondiente
    conteoSumas[suma - 2]++;
}

// Mostrar el número de apariciones de cada suma
for (var j = 0; j < conteoSumas.length; j++) {
    console.log("Suma " + (j + 2) + ": " + conteoSumas[j] + " apariciones");
}
