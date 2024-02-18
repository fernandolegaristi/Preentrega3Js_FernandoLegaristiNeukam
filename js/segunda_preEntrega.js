const opciones = [
  { id: 1, peso: "Kilo", precio: 10000, cantidadSabores: 4 },
  { id: 2, peso: "Tres Cuarto Kilo", precio: 9000, cantidadSabores: 3 },
  { id: 3, peso: "Medio Kilo", precio: 6000, cantidadSabores: 3 },
  { id: 4, peso: "Cuarto Kilo", precio: 3200, cantidadSabores: 2 }
];

const opcionElegida = parseInt(prompt("Indica el número del producto que deseas solicitar: \n 1. Kilo ($10.000) \n 2. Tres Cuarto Kilo ($9000) \n 3. Medio Kilo ($6000) \n 4. Cuarto Kilo ($3200)"));
if (isNaN(opcionElegida) || opcionElegida < 1 || opcionElegida > 4) {
  alert("Opción inválida. Por favor, elige una opción válida.");
} else {
  const opcionSeleccionada = opciones.find(opcion => opcion.id === opcionElegida);

  let codigoPostal = prompt("Ingresá tu código postal");
  while (!codigoPostal) {
    codigoPostal = prompt("No has ingresado ningún código postal. Por favor, ingresa uno válido.");
  }
  codigoPostal = parseInt(codigoPostal);

  let costoEnvio = 0;
  if (codigoPostal >= 1000 && codigoPostal <= 1700) {
    costoEnvio = 500;
  } else if (codigoPostal > 1700 && codigoPostal < 3000) {
    costoEnvio = 1000;
  }

  const costoTotal = opcionSeleccionada.precio + costoEnvio;

  alert("Seleccionaste: " + opcionSeleccionada.peso + " , con un costo de $" + opcionSeleccionada.precio);
  alert("En tu zona, el costo de envío es de: $" + costoEnvio);
  alert("Costo total de tu pedido es de $" + costoTotal);
}