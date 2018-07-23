function somarInteiros(n){
  
  var sum = 0,
      count = 0,
      i = 0;
  
  if (typeof n === 'number'){
    while (count < n){      
        sum = sum + i;  
        count++;
        i++;
    }
    return sum;
  }
}

console.log(somarInteiros(5));