let date = new Date()
let dd = date.getDate();
let mm = date.getMonth()+1;
let yyyy = date.getFullYear();

today = mm+'-'+dd+'-'+yyyy;
console.log(today);
today = mm+'/'+dd+'/'+yyyy;
console.log(today);
today = dd+'-'+mm+'-'+yyyy;
console.log(today);
today = dd+'/'+mm+'/'+yyyy;
console.log(today);