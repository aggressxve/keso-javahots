import { productos } from "./products.js";

// Imagen de respaldo para productos sin foto (img: null en products.js)
const IMAGEN_RESPALDO = "https://cdn7.kiwilimon.com/recetaimagen/36187/640x640/44504.jpg.webp";

const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"), 10);
const producto = productos[id];

if (!producto) {
  document.querySelector(".producto-detalle").innerHTML = "<p>Producto no encontrado.</p>";
} else {
  document.getElementById("producto-nombre").textContent = producto.name;
  document.getElementById("producto-descripcion").textContent = producto.descripcion;

  document.getElementById("producto-specs").innerHTML = `
    <li>Número de personas: ${producto.numeroDePersonas}</li>
    <li>Relleno: ${producto.relleno}</li>
    <li>Cobertura: ${producto.cobertura}</li>
    <li>Pan: ${producto.pan}</li>
    <li>Precio: $${producto.precio}</li>
  `;

  const imagenPrincipal = document.getElementById("producto-imagen-principal");
  imagenPrincipal.src = producto.img || IMAGEN_RESPALDO;
  imagenPrincipal.alt = producto.name;

  // No hay galería de varias fotos en products.js todavía, así que
  // por ahora las miniaturas repiten la misma imagen principal.
  document.querySelectorAll(".miniatura").forEach(img => {
    img.src = imagenPrincipal.src;
    img.alt = producto.name;
  });

  // Otros pasteles: 3 sugerencias al azar, sin repetir el producto actual
  const otros = productos
    .map((p, i) => ({ ...p, index: i }))
    .filter(p => p.index !== id)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  document.getElementById("otros-pasteles").innerHTML = otros.map(p => `
    <a href="producto.html?id=${p.index}" class="otro-pastel">
      <img src="${p.img || IMAGEN_RESPALDO}" alt="${p.name}">
      <p>${p.name}</p>
    </a>
  `).join("");
}
