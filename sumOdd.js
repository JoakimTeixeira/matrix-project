function sumOdd(n){

  var sum = 0,
      count = 0;
  i = 0;

  if(verifyNumber(n))
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

function verifyNumber(n){
  if (typeof n === 'number'){
    return n;    
  }
}

console.log(sumOdd(5));
