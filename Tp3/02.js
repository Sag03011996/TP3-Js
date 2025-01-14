
// Crear un arreglo para almacenar las ciudades
var ciudades = [];
var ciudad;

// Solicitar al usuario el nombre de las ciudades y almacenarlas en el arreglo
while ((ciudad = prompt("Ingrese el nombre de una ciudad (o haga clic en Cancelar para terminar):")) !== null) {
    ciudades.push(ciudad);
}

// Mostrar el arreglo generado en la consola
console.log("Ciudades ingresadas:", ciudades);

// Mostrar la longitud del arreglo
console.log("Longitud del arreglo:", ciudades.length);

// Mostrar en el documento web los ítems de las posiciones primera, tercera y última
document.write("Primera ciudad: " + ciudades[0] + "<br>");
document.write("Tercera ciudad: " + (ciudades[2] || "No hay una tercera ciudad") + "<br>");
document.write("Última ciudad: " + ciudades[ciudades.length - 1] + "<br>");

// Añadir en última posición la ciudad de París
ciudades.push("París");
console.log("Ciudades después de añadir París:", ciudades);

// Escribir por pantalla el elemento que ocupa la segunda posición
document.write("Segunda ciudad (antes de reemplazarla): " + (ciudades[1] || "No hay una segunda ciudad") + "<br>");

// Sustituir el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'
if (ciudades.length > 1) {
    ciudades[1] = "Barcelona";
} else {
    ciudades[1] = "Barcelona"; // Si no hay segunda posición, se añade Barcelona en esa posición
}
console.log("Ciudades después de reemplazar la segunda ciudad por Barcelona:", ciudades);
document.write("Segunda ciudad (después de reemplazarla): " + ciudades[1] + "<br>");
