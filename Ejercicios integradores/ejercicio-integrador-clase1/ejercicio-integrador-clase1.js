function mostrar()
{
   let razonSocial;
   let nombre;
   let dni;
   let fecha;
   let cuit;
   let numeroRandom;

    razonSocial = prompt("Ingrese razon social");
    nombre = prompt("Ingrese nombre del titular");
    dni = dniTitular.value;
    fecha = fechaInicio.value;
    numeroRandom = Math.floor(Math.random()*10);
    cuit = "30-" + dni + "-" + numeroRandom;

    alert("Dni:" + dni + "Fecha de inicio:" + fecha + "Razon social:" + razonSocial + "Nombre del titual:" + nombre + "CUIT:" + cuit );
}
