document.addEventListener('DOMContentLoaded', () => {
    
    // Selección de elementos de la navegación
    const navButtons = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.section-container');

    // Lógica para cambiar de pestaña/sección de forma fija
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetSectionId = button.getAttribute('data-target');

            // 1. Quitar estado activo de todos los botones y añadirlo al clickeado
            navButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // 2. Ocultar todas las secciones y activar solo la seleccionada
            sections.forEach(section => {
                section.classList.remove('active');
                if (section.id === targetSectionId) {
                    section.classList.add('active');
                }
            });
        });
    });

    // Manejo del formulario de contacto
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const clientName = document.getElementById('name').value;
            alert(`¡Gracias, ${clientName}! Tu consulta ha sido recibida con éxito.`);
            contactForm.reset();
        });
    }
});
