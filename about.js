const boton = document.getElementById("verCatalogo");
const estado = document.getElementById("estadoCatalogo");


boton.addEventListener("click", function () {
    estado.textContent = "Cargando catálogo...";
});

document.getElementById('team-tab').addEventListener('shown.bs.tab', () => {
    document.getElementById('cinta').classList.add('d-none');
    document.getElementById('tabContent').classList.remove('kesoHistory');
    document.getElementById('tabContent').classList.add('teamHistory');

});

document.getElementById('historia-tab').addEventListener('shown.bs.tab', () => {
    document.getElementById('cinta').classList.remove('d-none');
    document.getElementById('tabContent').classList.remove("teamHistory");
    document.getElementById('tabContent').classList.add("kesoHistory");
});