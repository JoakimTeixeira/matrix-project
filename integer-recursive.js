function sumIntegers(n)
{
  if(verifyNumber(n))
  {
    if (n === 1) return 0;
    else
       return n-1 + sumIntegers(n-1);
  }  
}


function sumOdd(n)
{
  if(verifyNumber(n))
  {
    if (n === 1) return 1;
    else
      return 2*n-1 + sumOdd(n-1);
  }
}

function multiplyIntegers(n)
{
  if(verifyNumber(n))
  {
    if (n === 1 || n === 2) return n;
    else
      return n * multiplyIntegers(n-1);
  }
}


function verifyNumber(n)
{
  if (typeof n === 'number')
    return n;    
}


console.log("Integers sum: " + sumIntegers(5));
console.log("Odd sum: " + sumOdd(5));
console.log("Integer multiplication: " + multiplyIntegers(5));
