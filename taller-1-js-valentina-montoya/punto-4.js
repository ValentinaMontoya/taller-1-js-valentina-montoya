/* Hacer un algoritmo que calcule e imprima los números primos comprendidos
entre 1 y 100. */

console.log('Números primos')

let primos = []
let veces = 0
let limite = 100

let cantidadMultiplos = 0
for (let i = 1; i <= limite; i++){
    for (let j = 1; j <= i; j++){
        veces++
        if (i % j === 0){
            cantidadMultiplos++
            if (cantidadMultiplos > 2) break
        }
    }
    if (cantidadMultiplos === 2){
        primos.push(i)
    }
    cantidadMultiplos = 0
}
console.log(primos)
console.log({ veces })
console.log({ limite })