const productos = [
  {
    codigo: 1,
    descripcion: "Kilo de Helado",
    precio: 10000,
    cantidadSabores: 4,
    imagen: "../img/kilo.png"
  },
  {
    codigo: 2,
    descripcion: "Tres Cuartos de Helado",
    precio: 9000,
    cantidadSabores: 3,
    imagen: "../img/tres_cuartos.jpg"
  },
  {
    codigo: 3,
    descripcion: "Medio Kilo de Helado",
    precio: 6000,
    cantidadSabores: 3,
    imagen: "../img/medio_kilo.png"
  },
  {
    codigo: 4,
    descripcion: "Cuarto Kilo de Helado",
    precio: 3200,
    cantidadSabores: 2,
    imagen: "../img/cuarto_kilo.png"
  }
];

function renderProductos() {
  
  let contenido = "";

  for (const producto of productos) {
      contenido += `<div class="col-xl-6 text-center card">
      <img src= ${producto.imagen} alt=" ${producto.peso}"/>
      <p> Cantidad en peso: ${producto.descripcion}</p> <p> Precio: $${producto.precio} </p> <p> Cantidad de sabores máximo:  ${producto.cantidadSabores}</p> <p> Código de Producto: ${producto.codigo}</p>      
      </div>`;
  }
  document.getElementById("productos").innerHTML = contenido;
}
renderProductos();

document.getElementById("confirmarPedido").addEventListener("click", () => {
  const codigoProducto = parseInt(document.getElementById("codigoProducto").value);
  const codigoPostal = parseInt(document.getElementById("codigoPostal").value);

  const productoElegido = productos.find(producto => producto.codigo === codigoProducto);
  if (!productoElegido) {
    alert("Por favor ingrese un código de producto válido.");
    return;
  }

  let costoEnvio = 0;
  if (codigoPostal >= 1000 && codigoPostal <= 1699) {
    costoEnvio = 500;
  } else if (codigoPostal >= 1700 && codigoPostal <= 2000) {
    costoEnvio = 1000;
  } else {
    alert("Por favor ingrese un código postal válido.");
    return;
  }

  const costoTotal = productoElegido.precio + costoEnvio;
  document.getElementById("totalCosto").textContent = `El costo total es: $${costoTotal}`;

  
  let historialPedidos = JSON.parse(localStorage.getItem("historialPedidos")) || [];
  historialPedidos.push({ codigoProducto, codigoPostal, costoTotal });
  localStorage.setItem("historialPedidos", JSON.stringify(historialPedidos));

  
});