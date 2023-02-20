const formulario = document.querySelector("#formularioTotalizador");
const resultado = document.querySelector("#resultado");

formulario.addEventListener("submit", event => {
    event.preventDefault();
    const cantidad = Number.parseInt(document.querySelector("#cantidad").value);
    const precio = Number.parseFloat(document.querySelector("#precio").value);
    resultado.innerHTML = cantidad * precio;
});
