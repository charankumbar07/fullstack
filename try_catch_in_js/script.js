let a = prompt("Enter first number");

let b = prompt("Enter second number");

let sum = parseInt(a) + parseInt(b);

if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Enter only numbers")
}
else {
    console.log("sum is", sum);
}
function main() {
    
    try {
        console.log("sun is",sum*x);
        return true;
    } catch (error) {
        console.log("Somthing Want Worng");
        return false;
    } finally{
        console.log("Executed files are closed")
    }
}

main();