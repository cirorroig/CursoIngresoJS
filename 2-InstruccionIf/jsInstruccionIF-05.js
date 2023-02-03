function mostrar()
{
	
	let input=document.getElementById("txtIdEdad")
	let edad=parseInt(input.value)
	if(edad<13 | edad>17){
		alert("Usted no es un adolescente");
	}


}//FIN DE LA FUNCIÓN