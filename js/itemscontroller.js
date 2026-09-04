import { productos } from "./products.js";
// La lista de productos es importada desde products.js

class ItemGenerator {
    /*
    La clase ItemGenerator es creada para el manejo de los productos por una sola entidad centralizada. 
    Tiene dos propiedades: items (un arreglo de objetos con los productos) y currentId (una variable para guardar el estado del contador)
    El constructor puede recibir o no un parámetro Id en el constructor, por default comienza en 0.
    
    addItem(product) está diseñado para recibir un objeto con las propiedades del producto, que son:
    -"name"
    -"descripcion"
    -"numeroDePersonas"
    -"relleno"
    -"cobertura"
    -"pan"
    -"img"
    -"precio"
    "createdAt"
    Y agrega el objeto al final del arreglo items.


    getItems() retorna todos los objetos contenidos en el arreglo items.

    hasRequiredProperties(product) recibe un objeto json y verifica que el objeto tenga las propiedades requeridas.
    */


    items;
    currentId;

    constructor(currentId = 0) {
        this.items = [];
        this.currentId = currentId;
    }

    hasRequiredProperties(product) {
        const requiredProperties = ["name", "descripcion", "numeroDePersonas", "relleno", "cobertura", "pan", "img", "precio", "createdAt"];
        let isComplete = true;

        if (product.createdAt == null) {
            product.createdAt = new Date().toISOString().split("T")[0];
        }

        requiredProperties.forEach(property => {
            if (Object.hasOwn(product, property) == false) {
                isComplete = false;
            }
        })

        return isComplete;
    }

    addItem(product) {
        let isComplete = this.hasRequiredProperties(product);

        if (isComplete) {
            product.id = this.currentId;
            this.items.push(product);
            this.currentId++;
        } else {
            console.log(`The product ${product} has incomplete properties. Please check it.`);
        }
    }

    getItems() {
        return this.items;
    }

}