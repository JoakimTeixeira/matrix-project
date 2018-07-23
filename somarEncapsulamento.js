function somarInteiros(n)
{
  var sum = 0,
      count = 0,
      i = 0;

  if(verificarNumero(n))
  {    
    while (count < n)
    {      
      sum = sum + i;  
      count++;
      i++;
    }
    return sum;
  } 
}


function somarImpares(n)
{
  var sum = 0,
      count = 0,
      i = 0;

  if(verificarNumero(n))
  {    
    while (count < n)
    {
      if (i % 2 === 1)
      {
        sum = sum + i;
        count++;
      }
      i++;
    }
    return sum;
  }
}


function verificarNumero(n)
{
  if (typeof n === 'number')
    return n;    
}


console.log("Soma de inteiros: " + somarInteiros(5));
console.log("Soma de ímpares: " + somarImpares(5));