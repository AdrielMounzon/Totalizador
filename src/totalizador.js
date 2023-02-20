const formulario = document.querySelector("#formularioTotalizador");
const precioNeto = document.querySelector("#precioNeto");
const estado = document.querySelector("#estado")
const impuestoEstado = document.querySelector("#impuestoEstado")
const precioTotal = document.querySelector("#precioTotal")
const descuentoCantidad = document.querySelector("#descuentoCantidad")

formulario.addEventListener("submit", event => {
    event.preventDefault();
    const cantidad = Number.parseInt(document.querySelector("#cantidad").value);
    const precio = Number.parseFloat(document.querySelector("#precio").value);
    let valorImpuestoEstado = 0;
    let descuento = 0;
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

    if(cantidad >= 1000 && cantidad < 3000)
        descuento = 3;
    else if(cantidad >=3000 && cantidad < 7000)
        descuento = 5;
    else if(cantidad >=7000 && cantidad < 10000)
        descuento = 7;
    else if(cantidad >=10000 && cantidad < 30000)
        descuento = 10;
    else if(cantidad >= 30000)
        descuento = 15;
    impuestoEstado.innerHTML = "<p>" + "Impuesto del estado: " + valorImpuestoEstado + "%" + "</p>";
    precioNeto.innerHTML = "Precio neto: " + cantidad * precio;
    descuentoCantidad.innerHTML = "<p>" + "Descuento por cantidad: " + descuento + "%" + "</p>";
    precioTotal.innerHTML = "Precio total: " + cantidad * precio * (1 + (valorImpuestoEstado - descuento)/100);
});
