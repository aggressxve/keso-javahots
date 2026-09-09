export class AlertThrower {
    isSuccessful;
    successAlert = `<div class="alert alert-success" role="alert">Producto guardado correctamente!</div>`;
    errorAlert = `<div class="alert alert-warning" role="alert">El producto no puede ser guardado!</div>`;

    constructor(operationResult) {
        this.isSuccessful = operationResult;
    }

    throwAlert() {
        let target = document.getElementById("liveAlertPlaceholder");
        target.innerHTML = this.isSuccessful ? this.successAlert : this.errorAlert;
    }


}