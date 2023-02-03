function mostrar()
{
	let inputEdad=document.getElementById("txtIdEdad")
	let inputEstado=document.getElementById("estadoCivil")

	let edad=parseInt(inputEdad.value)
	let estadoCivil=inputEstado.value
	
	if(edad<18 & estadoCivil!=="Soltero"){
		alert("Es muy pequeño para NO ser soltero.")
	}


}//FIN DE LA FUNCIÓN