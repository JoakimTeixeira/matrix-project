function somarInteiros(n)
{
  if(verificarNumero(n))
  {
    if (n === 1) return 0;
    else
       return n-1 + somarInteiros(n-1);
  }  
}


function somarImpares(n)
{
  if(verificarNumero(n))
  {
    if (n === 1) return 1;
    else
      return 2*n-1 + somarImpares(n-1);
  }
}

function multiplicarInteiros(n)
{
  if(verificarNumero(n))
  {
    if (n === 1 || n === 2) return n;
    else
      return n * multiplicarInteiros(n-1);
  }
}


function verificarNumero(n)
{
  if (typeof n === 'number')
    return n;    
}


console.log("Soma de inteiros: " + somarInteiros(5));
console.log("Soma de ímpares: " + somarImpares(5));
console.log("Multiplicação de inteiros: " + multiplicarInteiros(5));