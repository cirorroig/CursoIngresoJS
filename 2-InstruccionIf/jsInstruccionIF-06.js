function mostrar()
{
	let input=document.getElementById("txtIdEdad")
	let edad= parseInt(input.value)
	if(edad>=18){
		alert("Usted es mayor de edad")
	}else if(edad>=13 & edad<=17){
		alert("Usted es adolescente")
	}else if(edad<13){
		alert("Usted es un niño")
	}

	
}//FIN DE LA FUNCIÓN