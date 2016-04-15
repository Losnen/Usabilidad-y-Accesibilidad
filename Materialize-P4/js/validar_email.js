$(document).ready(function(){
    $('#validar').click(function() {
        // Expresion regular para validar el correo
        var regex = /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;

        // Se utiliza la funcion test() nativa de JavaScript
        if (!regex.test($('#email').val().trim())) {
            alert('La direccón de correo no es valida');
            return false;
        }
    });
});
