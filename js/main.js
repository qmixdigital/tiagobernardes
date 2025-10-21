// Menu Mobile Toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
    
    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const faqItem = this.parentElement;
            const answer = this.nextElementSibling;
            const isActive = faqItem.classList.contains('active');
            
            // Fecha todas as respostas
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });
            document.querySelectorAll('.faq-answer').forEach(item => {
                item.classList.remove('active');
            });
            
            // Abre a resposta clicada se não estava ativa
            if (!isActive) {
                faqItem.classList.add('active');
                answer.classList.add('active');
            }
        });
    });
    
    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Fecha o menu mobile após clicar
                if (navMenu) {
                    navMenu.classList.remove('active');
                }
            }
        });
    });
});
