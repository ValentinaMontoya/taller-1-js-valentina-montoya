/* El presidente de la república ha decidido estimular a todos los estudiantes
de una universidad mediante la asignación de becas mensuales, para esto
se tomarán en consideración los siguientes criterios:
Para alumnos mayores de 18 años con promedio mayor o igual a 9, la
beca será de $200.000; con promedio mayor o igual a 7.5, de $100.000;
para los promedios menores de 7.5 pero mayores o iguales a 6.0, de
$50.000; a los demás se les enviará una carta de invitación a que estudien
más en el próximo ciclo escolar.
A los alumnos de 18 años o menores de esta edad, con promedios
mayores o iguales a 9, se les dará $300.000; con promedios menores a 9
pero mayores o iguales a 8, $200.000; para los alumnos con promedios
menores a 8 pero mayores o iguales a 6, se les dará $100.000, y a los
alumnos que tengan promedios menores a 6 se les enviará la carta de
invitación. */


const beca = Number(prompt('Ingresa 1 si eres mayor de 18 años y tu promedio es mayor a 9, 2 si eres mayor de 18 años y tu promedio es mayor a 7.5, 3 si eres mayor de 18 años y tu promedio es menor a 7.5 pero es mayor a 6.0, 4 si tu edad es 18 o menor a 18 años y tu promedio es 9, 5 si tu edad es 18 o menor a 18 años y tu promedio es menor a 9 pero mayor o igual a 8, 6 si tu edad es 18 o menor a 18 años y tu promedio es menor a 8 pero mayor o igual a 6, 7 si tu edad es mayor a 18 años o si tienes 18 o eres menor a 18 años y tu promedio es muy bajo'))

const becas = beca

switch (becas) {
  case 1:
    console.log('Edad: mayor a 18, Promedio: mayor o igual a 9, Valor de Beca: $200.000')
    break
  case 2:
    console.log('Edad: mayor a 18, Promedio: mayor o igual a 7.5, Valor de Beca: $100.000')
    break
  case 3: 
  console.log('Edad: mayor a 18, Promedio: menor a 7.5 pero mayor o igual a 6.0, Valor de Beca: $50.000')
    break
  case 4:
  console.log('Edad: 18 o menor a 18, Promedio: 9, Valor de Beca: $300.000')
    break
  case 5:
  console.log('Edad: 18 o menor a  18, Promedio: menor a 9 pero mayor o igual a 8, Valor de Beca: $200.000')
    break
  case 6: 
  console.log('Edad: 18 o menor a 18, Promedio: menor 8 pero mayor o igual a 6, Valor de Beca: $100.000')
    break
  case 7:
   console.log('Se te enviara una carta de invitació para el próximo ciclo escolar')
    break
  default:
  console.log('Ingrese un número valido por favor')
}
