/*const persona = {
    nombre: "Jony",
    edad: 38
}

console.log(persona)

function obtenDobleEdad(edad) {
    return 2* edad
}

const dobleEdad = obtenDobleEdad(persona.edad)

console.log(dobleEdad);

function obtenArray(edad) {
    let arrayNums = [];
    for (let i = 0; i < 10; i++) {
        const numero = edad + i;
        console.log(numero)
        arrayNums = [...arrayNums, numero]
    }
    return arrayNums
}
const array = obtenArray(persona.edad)
console.log(array)*/

function fibonacci(num) {
    const secuencia = [0, 1];
    for (let i = 2; i < num; i++) {
        secuencia[i] = secuencia[i - 1] + secuencia[i - 2];
    }
    return secuencia.splice(0, num)
}

console.log(fibonacci(6));