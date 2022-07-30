/* En una sala de cine se están estrenando 4 películas, se desea crear un
algoritmo que al ingresar un número del 1 al 4 se muestre el nombre de la
película, la categoría y su valor de entrada.
● La primera película es Batman, su categoría es acción y el valor de entrada
es 5,000.
● La segunda película es Los Vengadores, su categoría es acción y el valor de
la entrada es 10,000.
● La tercera película es SuperCool, su categoría es comedia y el valor de la
entrada es 8,000.
● Por último la cuarta película es rápido y furioso 5, subcategoría es de
aventura eso valor de entrada es 15,000 */


const peliculas = Number(prompt('Ingrese un número según la película que desea: 1 Batman, 2 los Vengadores, 3  SuperCool, 4 Rápidos y furiosos'))

const pelicula = peliculas

switch (pelicula) {
  case 1:
    console.log('La película es Batman su categoría es de Acción y su precio de entrada es de $5.000')
    break
  case 2:
    console.log('La película es Los Vengadores su categoría es de Acción y su precio de entrada es de $10.000')
    break
  case 3:
    console.log('La película es SuperCool su categoría es de Comedia y su precio de entrada es de $8.000')
    break
 case 4:
     console.log('La película es Rápido y furioso su categoría es de Aventura y su precio de entrada es de $15.000')
    break
  default:
    console.log('Ingrese una opción válida por favor')
}