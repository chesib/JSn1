// Función para cambiar el color del div al ingresar un color en el campo de entrada
function cambiarColor() {
	const colorInput = document.getElementById("colorInput").value;
	const colorDiv = document.getElementById("colorDiv");

	colorDiv.style.backgroundColor = colorInput;
}
// funcion para mostrar la cantidad de veces del producto
function cuantosProd() {
	const prodVeces = document.querySelector("#cantidad").value;
	const vecesSpan = document.querySelector("#veces");

	vecesSpan.innerHTML = prodVeces;
}
// Función para calcular y mostrar el total
function calcularTotal() {
	const cantidadInput = document.getElementById("cantidad");
	const totalDiv = document.getElementById("total");
	const precioProducto = 600000;

	let cantidad = cantidadInput.value;
	cantidad = Number(cantidad); // Convertir a número entero

	if (!isNaN(cantidad)) {
		const total = cantidad * precioProducto;
		totalDiv.textContent = `${total.toLocaleString()} CLP$`;
	}
}

// Agregar un listener para el evento 'click' en el botón
document.getElementById("btn").addEventListener("click", function () {
	cambiarColor();
	calcularTotal();
	cuantosProd();
});
