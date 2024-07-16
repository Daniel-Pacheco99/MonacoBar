document.getElementById('btn-empezar').addEventListener('click', function(event) {
    event.preventDefault(); // Prevenir la acción por defecto del enlace

    // Remover la clase 'hidden' de los elementos que deseas mostrar
    document.querySelector('header').classList.remove('hidden');
    document.getElementById('ThisIsMonaco').classList.remove('hidden');
    document.getElementById('Carta').classList.remove('hidden');
    document.getElementById('PróximosEventos').classList.remove('hidden');
    document.getElementById('Eventos').classList.remove('hidden');
    document.getElementById('horario-direccion').classList.remove('hidden');
    document.getElementById('mapa-txt').classList.remove('hidden');
    document.querySelector('footer').classList.remove('hidden');
});





document.getElementById("menu-btn").addEventListener("click", function() {
    var dropdown = document.getElementById("dropdown-menu");
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
});





window.onclick = function(event) {
    if (!event.target.matches('#menu-btn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display === "block") {
                openDropdown.style.display = "none";
            }
        }
    }
}








// Slide
let slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex + n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    
    // Ocultar todos los slides
    for (let slide of slides) {
        slide.style.display = "none";  
    }
    
    // Asegurar que el índice esté dentro de los límites
    if (n >= slides.length) { 
        slideIndex = 0; 
    } else if (n < 0) { 
        slideIndex = slides.length - 1; 
    } else {
        slideIndex = n;
    }
    
    // Mostrar el slide actual
    slides[slideIndex].style.display = "flex";  
}

function autoShowSlides() {
    slideIndex++;
    showSlides(slideIndex);
    setTimeout(autoShowSlides, 4000); // Cambia cada 4 segundos
}

document.addEventListener('DOMContentLoaded', (event) => {
    autoShowSlides();
});


// Slide-2 -> PróximosEventos
let slideIndex2 = 0;
showSlides2(slideIndex2);

function plusSlides2(n) {
    showSlides2(slideIndex2 += n);
}

function showSlides2(n) {
    let i;
    let slides = document.getElementsByClassName("slide-2");
    if (n >= slides.length) { slideIndex2 = 0; }
    if (n < 0) { slideIndex2 = slides.length - 1; }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex2].style.display = "block";
}

function autoShowSlides2() {
    slideIndex2++;
    showSlides2(slideIndex2);
    setTimeout(autoShowSlides2, 5000); // Cambia cada 5 segundos
}

document.addEventListener('DOMContentLoaded', (event) => {
    showSlides2(slideIndex2);
    autoShowSlides2();
});


// Slide-3 -> Eventos
let slideIndex3 = 0;
showSlides2(slideIndex3);

function plusSlides3(n) {
    showSlides3(slideIndex3 += n);
}

function showSlides3(n) {
    let i;
    let slides = document.getElementsByClassName("slide-3");
    if (n >= slides.length) { slideIndex3 = 0; }
    if (n < 0) { slideIndex3 = slides.length - 1; }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex3].style.display = "block";
}

function autoShowSlides3() {
    slideIndex3++;
    showSlides3(slideIndex3);
    setTimeout(autoShowSlides3, 5000); // Cambia cada 5 segundos
}

document.addEventListener('DOMContentLoaded', (event) => {
    showSlides3(slideIndex3);
    autoShowSlides3();
});





// Función para mostrar las subcategorías de la categoría seleccionada
function mostrarSubcategorias(categoria) {
    // Oculta todas las subcategorías
    let subcategorias = document.querySelectorAll('.subcategoria');
    subcategorias.forEach(subcategoria => {
        subcategoria.classList.remove('active');
    });

    // Muestra la subcategoría correspondiente a la categoría seleccionada
    let subcategoria = document.getElementById(`sub-${categoria}`);
    subcategoria.classList.add('active');
}





// Función para agregar puntos suspensivos si es necesario
function ajustarPuntosSuspensivos() {
    let productos = document.querySelectorAll('.producto');

    productos.forEach(producto => {
        let nombre = producto.querySelector('.nombre');
        let precio = producto.querySelector('.precio');
        let contenedor = producto.offsetWidth; // Ancho del contenedor de producto
        let nombreAncho = nombre.offsetWidth; // Ancho del nombre del producto
        let precioAncho = precio.offsetWidth; // Ancho del precio

        let puntos = '...';

        // Calcula el espacio disponible para los puntos suspensivos
        let espacioDisponible = contenedor - (nombreAncho + precioAncho);

        // Si el espacio disponible es menor que el ancho de los puntos suspensivos, añádelos
        if (espacioDisponible < puntos.offsetWidth) {
            nombre.textContent = nombre.textContent.substring(0, nombre.textContent.length - 1) + puntos;
        }
    });
}

// Ejecuta la función al cargar la página y cuando cambie el tamaño de la ventana
document.addEventListener('DOMContentLoaded', ajustarPuntosSuspensivos);
window.addEventListener('resize', ajustarPuntosSuspensivos);
