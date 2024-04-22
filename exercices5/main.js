$(document).ready(function() {
    $('#myForm').submit(function(event) {
        event.preventDefault();
        let name = $('#name').val();
        let email = $('#email').val();
        if (name === '' || email === '') {
            alert('Veuillez remplir tous les champs.');
            return;
        }
        this.submit();
    });
});
