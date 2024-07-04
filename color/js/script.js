document.addEventListener('DOMContentLoaded', function () {
    const stars = document.querySelectorAll('.star-rating input[type="radio"]');
    const ratingValue = document.getElementById('rating-value');

    stars.forEach(star => {
        star.addEventListener('change', function () {
            ratingValue.textContent = `Vous avez noté ${this.value} étoile(s).`;
        });
    });
});