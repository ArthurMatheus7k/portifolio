document.addEventListener('DOMContentLoaded', function() {
    // Função para verificar se um elemento está visível na viewport
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.75 &&
            rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) * 0.25
        );
    }

    // Elementos que serão animados
    const aboutSection = document.getElementById('about');
    const profileImage = document.querySelector('.profile-image');
    const aboutContent = document.querySelector('.about-content');

    // Função para adicionar as animações
    function handleScrollAnimation() {
        if (isElementInViewport(aboutSection)) {
            // Adicionar classes de animação
            profileImage.classList.add('animate-from-left');
            aboutContent.classList.add('animate-from-right');
        } else {
            // Remover classes quando fora da viewport para reiniciar a animação
            profileImage.classList.remove('animate-from-left');
            aboutContent.classList.remove('animate-from-right');
        }
    }

    // Verificar no scroll e na carga inicial
    window.addEventListener('scroll', handleScrollAnimation);
    handleScrollAnimation(); // Verificar ao carregar a página
}); 