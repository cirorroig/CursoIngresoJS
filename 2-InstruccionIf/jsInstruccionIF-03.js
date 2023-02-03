function mostrar()
{
	let input=document.getElementById("txtIdEdad")
	let edad=parseInt(input.value)
	if(edad>=18){
		alert("Usted es mayor de edad");
	}else{
		alert("Usted es menor de edad")
	} 
}//FIN DE LA FUNCIÓN