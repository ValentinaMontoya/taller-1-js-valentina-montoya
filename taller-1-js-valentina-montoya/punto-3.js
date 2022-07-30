/* Escribir un algoritmo para calcular el índice de masa corporal de una
persona. */

const peso = Number(prompt('Ingrese su peso en Kl'))
const altura = Number(prompt('Ingrese su altura en metros'))

let resultado =  (peso/(altura * altura)).toFixed(2)


alert(`Su Indice de masa corporal es: ${resultado} `)