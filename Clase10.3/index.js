let numU1 = prompt('inserte un numero')
let numU2 = prompt('inserte otro numero')

function multiplicar(num1, num2){
    let cuenta = num1 * num2
    return "El resultado de multiplicar " + num1 + " y " + num2 + " es: " + cuenta
}

console.log(multiplicar(numU1, numU2))