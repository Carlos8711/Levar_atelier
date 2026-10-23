document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.section-container');

    function switchSection(targetSectionId) {
       
        navButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-target') === targetSectionId) {
                btn.classList.add('active');
            }
        });


        sections.forEach(section => {
            section.classList.remove('active');
            if (section.id === targetSectionId) {
                section.classList.add('active');
                section.scrollTop = 0;
            }
        });
    }

    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetSectionId = button.getAttribute('data-target');
            switchSection(targetSectionId);
        });
    });

 
    const heroActionBtn = document.querySelector('.btn-hero-action');
    if (heroActionBtn) {
        heroActionBtn.addEventListener('click', () => {
            const targetSectionId = heroActionBtn.getAttribute('data-target');
            switchSection(targetSectionId); 
        });
    }

});
