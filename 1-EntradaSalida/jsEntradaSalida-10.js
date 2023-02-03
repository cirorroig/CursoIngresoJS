/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe;
	let descuento;
	let importeFinal;
	let resultado;

	importe=document.getElementById("txtIdImporte").value;
	resultado=document.getElementById("txtIdResultado");

	descuento=importe*25/100;
	importeFinal=importe-descuento;
	
	resultado.value=importeFinal;
	
}
;