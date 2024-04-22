const toggleButton = document.getElementById('toggleButton');
const elementToToggle = document.getElementById('elementToToggle');

toggleButton.addEventListener('click', function() {
    if (elementToToggle.style.display === 'none') {
        elementToToggle.style.display = 'block'; // Afficher l'élément
        toggleButton.textContent = 'Masquer'; // Changer le texte du bouton
    } else {
        elementToToggle.style.display = 'none'; // Masquer l'élément
        toggleButton.textContent = 'Afficher'; // Changer le texte du bouton
    }
});
