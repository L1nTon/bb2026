const advisoryArticles = document.querySelectorAll('.advisory article[data-url]');

advisoryArticles.forEach(article => {
    article.addEventListener('click', () => {
        const url = article.getAttribute('data-url');
        window.open(url, '_blank'); 
    });
});