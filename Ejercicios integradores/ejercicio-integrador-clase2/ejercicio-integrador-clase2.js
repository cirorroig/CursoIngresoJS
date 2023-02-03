function mostrar()
{
   let importeInicial;
   let iva;
   let importeConIva;
   let descuento;
   let total;

   importeInicial=document.getElementById("importe").value
   importeInicial=parseInt(importeInicial);
   
   iva=importeInicial*21/100;
   descuento=importeInicial*5/100;
   importeConIva=importeInicial+iva;
   total=importeInicial+iva-descuento;

   alert(`Importe bruto: ${importeInicial}\n IVA:${iva}\n Importe con IVA:${importeConIva} \n Valor del descuento:${descuento}\n Precio final:${total}`);

}
