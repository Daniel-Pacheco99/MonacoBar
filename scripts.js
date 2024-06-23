// Espera 8 segundos (5000 milisegundos) antes de ejecutar la función
setTimeout(function() {
    // Selecciona el elemento con la clase "intro-text"
    var introText = document.querySelector('.intro-text');
    
    // Verifica que el elemento existe antes de intentar cambiar su contenido
    if (introText) {
        // Cambia el texto dentro del párrafo
        introText.innerHTML = '¡Bienvenidos al increíble MÓNACO Bar, donde las experiencias son tan exclusivas como inolvidables! Disfruta cada momento al máximo porque lo que sucede en MÓNACO, <br> ¡ENJOY IT! 🌟';
    }
}, 8000); // Tiempo en milisegundos (8 segundos)
