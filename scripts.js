// Espera 8 segundos (8000 milisegundos) antes de ejecutar la función
setTimeout(function() {
    // Selecciona el elemento con la clase "intro-text"
    var introText = document.querySelector('.intro-text');
    
    // Verifica que el elemento existe antes de intentar cambiar su contenido
    if (introText) {
        // Cambia el texto dentro del párrafo de introducción después de 8 segundos
        introText.innerHTML = '¡Bienvenidos al increíble MÓNACO Bar, donde las experiencias son tan exclusivas como inolvidables! Disfruta cada momento al máximo porque lo que sucede en MÓNACO, <br> ¡ENJOY IT! 🌟';
    }
}, 8000); // Tiempo en milisegundos (8 segundos)


document.addEventListener('DOMContentLoaded', function() {
    // Escucha el clic en el botón "EMPEZAR"
    document.getElementById('btn-empezar').addEventListener('click', function(event) {
        event.preventDefault(); // Evita el comportamiento predeterminado del enlace

        // Mostrar el encabezado del menú y las secciones del menú
        document.getElementById('menu-header').style.display = 'block';
        document.getElementById('menu').style.display = 'block';

        // Mostrar los enlaces rápidos
        document.getElementById('quick-links').style.display = 'flex';

        // Realizar desplazamiento suave hacia el encabezado del menú
        document.getElementById('menu-header').scrollIntoView({
            behavior: 'smooth'
        });

        // Detectar el scroll y mostrar las secciones conforme se van mostrando en la pantalla
        window.addEventListener('scroll', function() {
            const bebidas = document.getElementById('bebidas');
            const licores = document.getElementById('licores');
            const comidas = document.getElementById('comidas');
            const promociones = document.getElementById('promociones');

            const windowHeight = window.innerHeight;
            const bebidasTop = bebidas.getBoundingClientRect().top;
            const licoresTop = licores.getBoundingClientRect().top;
            const comidasTop = comidas.getBoundingClientRect().top;
            const promocionesTop = promociones.getBoundingClientRect().top;

            // Agregar la clase 'active' a las secciones conforme se muestran en la pantalla
            if (bebidasTop < windowHeight) {
                bebidas.classList.add('active');
            }

            if (licoresTop < windowHeight) {
                licores.classList.add('active');
            }

            if (comidasTop < windowHeight) {
                comidas.classList.add('active');
            }

            if (promocionesTop < windowHeight) {
                promociones.classList.add('active');
            }
        });
    });

    // Función para manejar el clic en los enlaces rápidos
    const quickLinks = document.querySelectorAll('.quick-link');
    quickLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Evita el comportamiento predeterminado del enlace

            const targetId = this.getAttribute('data-target'); // Obtener el ID de la sección objetivo
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' }); // Desplazamiento suave hacia la sección objetivo
            }
        });
    });
});
