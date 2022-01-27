function rev(str) {
    let newStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr;
}
const str = prompt('Enter a string: ');
const result = rev(str);
console.log(result);