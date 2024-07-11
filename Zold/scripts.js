// Función para cambiar el texto de introducción después de 8 segundos
function changeIntroText() {
    setTimeout(() => {
        const introText = document.querySelector('.intro-text');
        if (introText) {
            introText.innerHTML = '¡Bienvenidos al increíble MÓNACO Bar, donde las experiencias son tan exclusivas como inolvidables! Disfruta cada momento al máximo porque lo que sucede en MÓNACO, <br> ¡ENJOY IT! 🌟';
        }
    }, 8000);
}

// Función para manejar el clic en el botón "EMPEZAR"
function setupStartButton() {
    document.getElementById('btn-empezar').addEventListener('click', event => {
        event.preventDefault();
        document.getElementById('menu-header').style.display = 'block';
        document.getElementById('menu').style.display = 'block';
        document.getElementById('quick-links').style.display = 'flex';

        document.getElementById('menu-header').scrollIntoView({
            behavior: 'smooth'
        });

        // Mostrar secciones conforme se desplazan en la pantalla
        window.addEventListener('scroll', revealSectionsOnScroll);
    });
}

// Función para mostrar secciones del menú conforme se desplazan en la pantalla
function revealSectionsOnScroll() {
    const sections = ['bebidas', 'licores', 'comidas', 'promociones'];
    const windowHeight = window.innerHeight;

    sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < windowHeight) {
                section.classList.add('active');
            }
        }
    });
}

// Función para manejar el clic en los enlaces rápidos
function setupQuickLinks() {
    const quickLinks = document.querySelectorAll('.quick-link');
    quickLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const targetId = event.target.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// Función para cargar la tabla de licores dinámicamente
function loadLicoresTable() {
    const licores = [
        { bebida: "Aguardiente Amarillo", shot: "$7.000", precio375: "-", precio750: "$75.000", precio1000: "-" },
        { bebida: "Aguardiente Tapa Verde", shot: "$7.000", precio375: "$35.000", precio750: "$70.000", precio1000: "$90.000" },
        { bebida: "Aguardiente Tapa Azul", shot: "$8.000", precio375: "-", precio750: "$75.000", precio1000: "$95.000" },
        { bebida: "Ron Viejo de Caldas", shot: "$8.000", precio375: "-", precio750: "$85.000", precio1000: "-" },
        { bebida: "Ron Medellín 3 años", shot: "$6.000", precio375: "-", precio750: "$65.000", precio1000: "-" },
        { bebida: "Ron Medellín 5 años", shot: "$7.000", precio375: "-", precio750: "$75.000", precio1000: "-" },
        { bebida: "Ron Medellín 8 años", shot: "$9.000", precio375: "-", precio750: "$90.000", precio1000: "-" },
        { bebida: "Smirnoff de Lulo", shot: "$6.000", precio375: "-", precio750: "$60.000", precio1000: "-" },
        { bebida: "Red Label", shot: "$9.000", precio375: "-", precio750: "$90.000", precio1000: "-" },
        { bebida: "Old Parr 12 años", shot: "$17.000", precio375: "-", precio750: "$230.000", precio1000: "-" },
        { bebida: "Buchanans Delux 12 años", shot: "$26.000", precio375: "-", precio750: "$200.000", precio1000: "$260.000" },
        { bebida: "Buchanans Master", shot: "$30.000", precio375: "-", precio750: "$250.000", precio1000: "$300.000" },
        { bebida: "Craggnmore 12 años", shot: "$30.000", precio375: "-", precio750: "$300.000", precio1000: "-" },
        { bebida: "Jose Cuervo", shot: "$13.000", precio375: "-", precio750: "$130.000", precio1000: "-" },
        { bebida: "Tequila 1800 Silver", shot: "$26.000", precio375: "-", precio750: "$270.000", precio1000: "-" },
        { bebida: "Don Julio Blanco", shot: "$30.000", precio375: "-", precio750: "$330.000", precio1000: "-" },
        { bebida: "Tequila 1800 Reposado", shot: "$31.000", precio375: "-", precio750: "$330.000", precio1000: "-" },
        { bebida: "Tequila 1800 Añejo", shot: "$33.000", precio375: "-", precio750: "$350.000", precio1000: "-" }
    ];

    const tbody = document.getElementById('licores-table-body');

    licores.forEach(licor => {
        const row = document.createElement('tr');
        Object.values(licor).forEach((value, index) => {
            const cell = document.createElement('td');
            cell.textContent = value;
            if (index === 0) {
                cell.classList.add('align-left');
            }
            row.appendChild(cell);
        });
        tbody.appendChild(row);
    });
}

// Inicializar las funciones después de cargar el contenido del documento
document.addEventListener('DOMContentLoaded', () => {
    changeIntroText();
    setupStartButton();
    setupQuickLinks();
    loadLicoresTable();
});
