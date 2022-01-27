function random(arr) {

    const randomIndex = Math.floor(Math.random() * arr.length)
    const item = arr[randomIndex]
    return item
}
const array = [1, "hello", 5, 8,"Siddhi","Hello World",11]
const result = random(array)
console.log(result);