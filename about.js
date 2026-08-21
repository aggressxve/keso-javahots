const boton = document.getElementById("verCatalogo");
const estado = document.getElementById("estadoCatalogo");

boton.addEventListener("click", function () {
  estado.textContent = "Cargando catálogo...";
});