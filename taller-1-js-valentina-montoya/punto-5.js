/* Ingresar por pantalla un número entre 1 y 12, luego imprimir en letras el
mes al que corresponde el valor ingresado, la cantidad de días que tiene
ese mes y sus signos del zodiaco. Ejemplo: si el valor ingresado es 5,
entonces imprimir “Mayo”, “31 días”, “Tauro - Géminis”. */

const meses = Number(prompt('Ingrese un número de el 1 al 12'))

mes = meses

switch (meses){
    case 1:
        console.log('El mes es Enero tiene 31 días y sus signos son Capricornio y Acuario')
        break
      case 2:
        console.log('El mes es Febrero tiene 28 días y sus signos son Acuario y Piscis')
        break
      case 3: 
      console.log('El mes es Marzo tiene 31 días y sus signos son Piscis y Aries')
        break
      case 4:
      console.log('El mes es Abril tiene 30 días y sus signos son Aries y Tauro')
        break
      case 5:
      console.log('El mes es Mayo tiene 31 días y sus signos son Tauro y Géminis')
        break
      case 6: 
      console.log('El mes es Junio tiene 30 días y sus signo son Géminis y Cáncer')
        break
      case 7:
       console.log('El mes es Julio tiene 31 días y sus signos son Cáncer y Leo')
        break
      case 8:
        console.log('El mes es Agosto tiene 31 días y sus signos son Leo y Virgo')
        break
      case 9:
        console.log('El mes es Septiembre tiene 30 días y sus signos son Virgo y Libra')
        break
      case 10:
        console.log('El mes es Octubre tiene 31 días y sus signos son Libra y Escorpio')
        break
      case 11:
        console.log('El mes es Noviembre tiene 30 días y sus signos son Escorpio y Sagitario')
        break
      case 12:
        console.log('El mes es Diciembre tiene 31 días y sus signos son Sagitario y Capricornio')
        break
      default:
      console.log('Ingrese un número valido por favor')
    }
    


