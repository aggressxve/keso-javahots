import { ItemGenerator } from './itemscontroller.js';

let itemGenerator = new ItemGenerator();
let dataElements = {
    nombreProductoEl: document.getElementById("NombreProducto"),
    descripcionEl: document.getElementById("Descripcion"),
    rellenoEl: document.getElementById("Relleno"),
    coberturaEl: document.getElementById("Cobertura"),
    panEl: document.getElementById("Pan"),
    precioEl: document.getElementById("Precio"),
    numeroPersonasEl: document.getElementById("NumeroPersonas"),
    imgEl: document.querySelector('input[type="file"]'),
}
const submitButton = document.getElementById("submitButton");

submitButton.addEventListener("click", () => {
    let data = {
        NombreProducto: dataElements.nombreProductoEl.value,
        Descripcion: dataElements.descripcionEl.value,
        Relleno: dataElements.rellenoEl.value,
        Cobertura: dataElements.coberturaEl.value,
        Pan: dataElements.panEl.value,
        Precio: dataElements.precioEl.value || 0,
        NumeroPersonas: dataElements.numeroPersonasEl.value || 0,
        img: dataElements.imgEl.value || null
    };

    data.Precio = parseFloat(data.Precio);
    data.NumeroPersonas = parseInt(data.NumeroPersonas);

    let itemAdded = itemGenerator.addItem(data);
    if (itemAdded) {
        alert("Pastel añadido!");
        console.log(itemGenerator.getItems());
    } else {
        alert("No se pudo agregar el pastel!")
    }
})
