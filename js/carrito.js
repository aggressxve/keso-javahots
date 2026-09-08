
let carrito = [
  {
    id: 1,
    nombre: "Pastel de chocolate",
    precio: 350,
    cantidad: 1,
    imagen: "images/pastel-chocolate.png"
  },
  {
    id: 2,
    nombre: "Cheesecake de fresa",
    precio: 280,
    cantidad: 2,
    imagen: "images/cheesecake-fresa.png"
  },
  {
    id: 3,
    nombre: "Cupcakes (caja de 6)",
    precio: 180,
    cantidad: 1,
    imagen: "images/cupcakes.png"
  }
];

const listaCarrito = document.getElementById("lista-carrito");
const carritoVacio = document.getElementById("carrito-vacio");
const resumenSubtotal = document.getElementById("resumen-subtotal");
const resumenTotal = document.getElementById("resumen-total");
const btnPagar = document.getElementById("btn-pagar");

function formatearPrecio(numero) {
  return "$" + numero.toLocaleString("es-MX", { minimumFractionDigits: 2 });
}

function renderCarrito() {
  listaCarrito.innerHTML = "";

  if (carrito.length === 0) {
    carritoVacio.classList.remove("d-none");
    btnPagar.disabled = true;
  } else {
    carritoVacio.classList.add("d-none");
    btnPagar.disabled = false;
  }

  carrito.forEach((producto) => {
    const subtotal = producto.precio * producto.cantidad;

    const item = document.createElement("div");
    item.className = "item-carrito d-flex align-items-center gap-3";

    item.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}" class="item-imagen">

      <div class="flex-grow-1">
        <h5 class="mb-1">${producto.nombre}</h5>
        <p class="mb-0 text-muted">${formatearPrecio(producto.precio)} c/u</p>
      </div>

      <div class="d-flex align-items-center gap-2 cantidad-control">
        <button class="btn-cantidad" data-accion="restar" data-id="${producto.id}">−</button>
        <span class="cantidad-valor">${producto.cantidad}</span>
        <button class="btn-cantidad" data-accion="sumar" data-id="${producto.id}">+</button>
      </div>

      <div class="text-end" style="min-width: 90px;">
        <p class="fw-bold mb-1">${formatearPrecio(subtotal)}</p>
        <button class="btn-eliminar" data-id="${producto.id}" aria-label="Eliminar producto">
          Eliminar
        </button>
      </div>
    `;

    listaCarrito.appendChild(item);
  });

  actualizarResumen();
}

function actualizarResumen() {
  const subtotal = carrito.reduce((acc, p) => acc + p.precio * p.cantidad, 0);
  resumenSubtotal.textContent = formatearPrecio(subtotal);
  resumenTotal.textContent = formatearPrecio(subtotal);
}

function cambiarCantidad(id, accion) {
  const producto = carrito.find((p) => p.id === id);
  if (!producto) return;

  if (accion === "sumar") {
    producto.cantidad++;
  } else if (accion === "restar") {
    producto.cantidad--;
    if (producto.cantidad <= 0) {
      carrito = carrito.filter((p) => p.id !== id);
    }
  }

  renderCarrito();
}

function eliminarProducto(id) {
  carrito = carrito.filter((p) => p.id !== id);
  renderCarrito();
}

// Delegación de eventos: un solo listener para todos los botones,
// aunque el contenido se regenere dinámicamente
listaCarrito.addEventListener("click", (e) => {
  const botonCantidad = e.target.closest(".btn-cantidad");
  const botonEliminar = e.target.closest(".btn-eliminar");

  if (botonCantidad) {
    const id = Number(botonCantidad.dataset.id);
    const accion = botonCantidad.dataset.accion;
    cambiarCantidad(id, accion);
  }

  if (botonEliminar) {
    const id = Number(botonEliminar.dataset.id);
    eliminarProducto(id);
  }
});

btnPagar.addEventListener("click", () => {
  // Aquí conectarías con tu flujo de pago real
  alert("Redirigiendo a pago...");
});

document.addEventListener("DOMContentLoaded", renderCarrito);
