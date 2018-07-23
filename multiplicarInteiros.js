function multiplicarInteiros(n)
{
  var sum = 1,
      count = 0,
      i = 1;

  if(verificarNumero(n))
  {    
    while (count < n)
    {      
      sum = sum * i;  
      count++;
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

console.log(multiplicarInteiros(5));