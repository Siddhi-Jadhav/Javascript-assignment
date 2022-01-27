const similar = (arr, values) => arr.filter(v => values.includes(v));
console.log(similar([1, "Siddhi", 3, 8, 9, "Hello", 5], [1, 2, 4, 9, "Hello", 5]));