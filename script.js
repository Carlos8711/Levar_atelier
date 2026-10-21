
document.addEventListener('DOMContentLoaded', () => {
    
    const navButtons = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.section-container');

    // Función unificada para cambiar de sección de forma segura
    function switchSection(targetSectionId) {
        // 1. Mover clase activa en la barra de navegación superior
        navButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-target') === targetSectionId) {
                btn.classList.add('active');
            }
        });

        // 2. Conmutar visibilidad fluida de las secciones centradas
        sections.forEach(section => {
            section.classList.remove('active');
            if (section.id === targetSectionId) {
                section.classList.add('active');
                section.scrollTop = 0;
            }
        });
    }

    // Listener para los botones del menú de navegación
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetSectionId = button.getAttribute('data-target');
            switchSection(targetSectionId);
        });
    });

    // NUEVO: Listener especial para el botón "Ver el Menú" dentro de la pantalla de Inicio
    const heroActionBtn = document.querySelector('.btn-hero-action');
    if (heroActionBtn) {
        heroActionBtn.addEventListener('click', () => {
            const targetSectionId = heroActionBtn.getAttribute('data-target');
            switchSection(targetSectionId); // Ejecuta el salto fluido hacia productos
        });
    }
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
    // [Tu lógica del formulario de contacto se queda igual al final]
});
