$(document).ready(function(){
    $("#boton1").click(function (){
        var texto= "<h3> Resultados de la búsqueda:</h3>";
        $.ajax({
                type: 'GET', //rest Type
                //crossDomain: true,
                dataType: 'json', 
                url: 'coches.json',
                //async: false,
                contentType: "application/json; charset=utf-8",
                success: function (contenido) {
                    $.each(contenido.coches, function(pos, coche){
                        $.each(coche.rutinas, function(pos, rutina){
					if (($("#busqueda").val() == rutina.origen) || ($("#busqueda").val() == rutina.destino)){

                                texto += "<h4>Vehículo:</h4>";
        						texto += "<p>Modelo: ";
        						texto += coche.modelo;
        						texto += "<br/>Conductor: ";
        						texto += coche.conductor;
        						texto += "<br/>Antigüedad: ";
        						texto += coche.antiguedad;
        						texto += "<br/>Trayecto (viajes de rutina):";
        						texto += "<ul>";
        						texto += "<li>Origen: ";
        						texto += rutina.origen;
        						texto += "</li><li>Destino: ";
        						texto += rutina.destino;
        						texto += "</li></ul>Otros viajeros:<ol>";
        						for (l in coche.otros_viajeros){
        							texto += "<li>";
        							texto += coche.otros_viajeros[l];
        							texto += "</li>";
        						}
        						texto += "</ol>Zonas de acción:<ul>";
        						for (l in coche.zonas){
        							texto += "<li>";
        							texto += coche.zonas[l];
        							texto += "</li>";
        						}
        						texto += "</ul></p>";
        					    $("#resultado_busqueda").html(texto);
                            }
                          
                        });
                    });
                }
        });
    });
});    

