$(document).ready(function(){
	$("#boton1").click(function (){
		var cad = "<h3>Coincidencias con su búsqueda:</h3>";
		$.getJSON("coches.json", function(contenido){
			$.each(contenido.coches, function(posicion, coche){
				$.each(coche.rutinas, function(posicion, rutina){
					if (($("#busqueda").val() == rutina.origen) || ($("#busqueda").val() == rutina.destino)){
						cad += "<h4>Vehículo encontrado:</h4>";
						cad += "<p>Modelo: ";
						cad += coche.modelo;
						cad += "<br/>Conductor: ";
						cad += coche.conductor;
						cad += "<br/>Antigüedad: ";
						cad += coche.antiguedad;
						cad += "<br/>Rutina:";
						cad += "<ul>";
						cad += "<li>Origen: ";
						cad += rutina.origen;
						cad += "</li><li>Destino: ";
						cad += rutina.destino;
						cad += "</li></ul>Otros viajeros:<ol>";
						for (i in coche.otros_viajeros){
							cad += "<li>";
							cad += coche.otros_viajeros[i];
							cad += "</li>";
						}
						cad += "</ol>Zonas:<ul>";
						for (i in coche.zonas){
							cad += "<li>";
							cad += coche.zonas[i];
							cad += "</li>";
						}
						cad += "</ul></p>";
					}
					$("#resultado_busqueda").html(cad);
				});
			});
		});
	});
});
