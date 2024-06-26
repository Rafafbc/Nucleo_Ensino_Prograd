document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.links .link');

    links.forEach(link => {
        link.addEventListener('click', function() {
            const url = this.getAttribute('data-url');
            if (url) {
                window.open(url, '_blank'); // Abre o link em uma nova aba
            }
        });
    });
});
