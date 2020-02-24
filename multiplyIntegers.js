function multiplyIntegers(n)
{
  var sum = 1,
      count = 0,
      i = 1;

  if(verifyNumber(n))
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


function verifyNumber(n)
{
  if (typeof n === 'number')
    return n;    
}

console.log(multiplyIntegers(5));
