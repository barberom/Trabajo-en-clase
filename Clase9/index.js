function rectangulo (h,w){
    let area = h*w;
    return area;
}

let arear = rectangulo(2,3);
console.log(arear);

function triangulo (h,w){
    let area = (h*w)/2;
    return area;
}

let areat = triangulo(4,6);
console.log(areat);

function dolarHoy(pesos){
    let preciodls = pesos*1455;
    return preciodls;
}

let dls = dolarHoy(1000000);
console.log(dls);

function precioFinal(precio){
    let iva = precio + precio*0.21;
    return iva;
}

let iva = precioFinal(40000);
console.log(iva);

function mitad(num){
    let mitad = num/2;
    return mitad;
}

let half = mitad(10);
console.log(half);

function suma(num1, num2){
    return num1 + num2;
}

let sumaa = suma(2,3);
console.log(sumaa);

function resta(num1,num2){
    return num1 - num2;
}

console.log(resta(2,5));

function multiplicacion(num1,num2){
    return num1*num2;
}

console.log(multiplicacion(3,5));

function division(num1,num2){
    return num1/num2;
}

console.log(division(10,5));
