// Script básico para PrintBord Landing Page

// Suavizar rolagem para links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Botão "Solicitar Orçamento"
const btn = document.querySelector('.btn');
if (btn) {
    btn.addEventListener('click', function() {
        alert('Entraremos em contato em breve!');
        // Aqui pode-se implementar lógica para redirecionar para um formulário
    });
}

// Log de carregamento da página
console.log('PrintBord Landing Page carregada com sucesso!');

// Animação de fade-in nos cartões de serviços
const cards = document.querySelectorAll('.servico-card');
cards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.animation = `fadeIn 0.5s ease-in-out ${index * 0.2}s forwards`;
});

// Adicionando estilo de animação
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);
