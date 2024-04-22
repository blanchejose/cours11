const element = document.getElementById('element');

element.addEventListener('mouseover', function() {
    element.textContent = "rentrons a la maison";
});

element.addEventListener('mouseout', function() {
    element.textContent = "je t'aime maman !";
});
