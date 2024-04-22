const toggleButton = document.getElementById('toggleButton');
const elementToToggle = document.getElementById('elementToToggle');

toggleButton.addEventListener('click', function() {
    if (elementToToggle.style.display === 'none') {
        elementToToggle.style.display = 'block'; // Afficher l'élément
    } else {
        elementToToggle.style.display = 'none'; // Masquer l'élément
    }
});
