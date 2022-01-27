let str=prompt("Enter string")
console.log("Given String : " +str)
function alphabet_order(str)
  {
return str.split('').sort().join('');
  }
console.log(alphabet_order(str));