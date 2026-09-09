import { ItemGenerator } from "./itemscontroller";

let form = document.getElementById("id-form");

form.addEventListener("submit", event => {
    event.preventDefault();

    let itemGenerator = new ItemGenerator();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    itemGenerator.addItem(data);

    if (itemGenerator.isProductComplete()) {
        form.submit();
    }
})