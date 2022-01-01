var articulo1 = document.getElementById("articulo1");

var mensaje1 = document.getElementById("mensaje1");

mensaje1.addEventListener('click', () => {
    articulo1.classList.toggle('hidden');
})

var mensaje2 = document.getElementById("mensaje2");
mensaje2.addEventListener("click", () => {
    articulo2.classList.toggle("hidden");
})
