const formulario = document.querySelector("#formularioTotalizador");
const precioNeto = document.querySelector("#precioNeto");
const estado = document.querySelector("#estado")
const impuestoEstado = document.querySelector("#impuestoEstado")
const precioTotal = document.querySelector("#precioTotal")

formulario.addEventListener("submit", event => {
    event.preventDefault();
    const cantidad = Number.parseInt(document.querySelector("#cantidad").value);
    const precio = Number.parseFloat(document.querySelector("#precio").value);
    let valorImpuestoEstado = 0;
    if(estado.value=="UT")
        valorImpuestoEstado = 6.65;
    else if(estado.value=="NV")
        valorImpuestoEstado = 8;
    else if(estado.value=="TX")
        valorImpuestoEstado = 6.25;
    else if(estado.value=="AL")
        valorImpuestoEstado = 4;
    else if(estado.value=="CA")
        valorImpuestoEstado = 8.25;
    impuestoEstado.innerHTML = "<p>" + "Impuesto del estado: " + valorImpuestoEstado + "%" + "</p>";
    precioNeto.innerHTML = "Precio neto: " + cantidad * precio;
    precioTotal.innerHTML = "Precio total: " + cantidad * precio * (1+valorImpuestoEstado/100)
});
