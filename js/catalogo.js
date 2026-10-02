//Funcion que importa de products.js nombre, descripción y precio del producto en las cards.

import { productos } from "./products.js";


const contenedor = document.getElementById("catalogo-contenedor");

productos.forEach((p, index) => {
    contenedor.insertAdjacentHTML("beforeend", `
        <div class="catalogo-card" id="${index + 1}">
            <img src="${p.img}" class="card-img-top" alt="${p.name}">
            <div class="card-body">
                <h5 class="card-title">${p.name}</h5>
                <p class="card-text">${p.descripcion}</p>
                <p class="catalogo-card-precio">$${p.precio}</p>
                <a href="subcatalogo.html?id=${index}" class="btn btn-primary">Ver más</a>
            </div>
        </div>
    `);
});

