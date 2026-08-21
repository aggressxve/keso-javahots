const boton = document.getElementById("verCatalogo");
const estado = document.getElementById("estadoCatalogo");

boton.addEventListener("click", function () {
    estado.textContent = "Cargando catálogo...";
});

document.getElementById('team-tab').addEventListener('shown.bs.tab', () => {
    document.getElementById('cinta').classList.add('d-none');
});

document.getElementById('historia-tab').addEventListener('shown.bs.tab', () => {
    document.getElementById('cinta').classList.remove('d-none');

});