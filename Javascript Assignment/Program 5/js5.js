function CtoF(celsius) 
{
  let c = celsius
  let F = c * 9 / 5 + 32
  console.log(c+'\xB0C is ' + F + ' \xB0F.')
}

function FtoC(fahrenheit) 
{
  let f = fahrenheit
  let C = (f - 32) * 5 / 9
  console.log(f +'\xB0C is ' + C + ' \xB0F.')
  
} 
CtoF(60);
FtoC(45);