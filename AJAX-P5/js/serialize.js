$(document).ready(function(){
    $("#serializar").click(function(){
        $("#d").text($("#formulario").serialize());
    });    
});