/* Elaborar un algoritmo que genere un arreglo de N elementos usando la función
random, de igual forma se pueble usando esta misma función y encuentre el
valor y la posición del mayor elemento resultante. */

const posiciones = Number(
    prompt('Ingrese el número de la posición que desea ver en el arreglo')
  );
  
  let valMax = 0,
    posiMax = 0;
  
  const nElementos = new Array(posiciones);
  
  for (let i = 0; i < nElementos.length; i++) {
    nElementos[i] = Math.random() * 100;
    if (nElementos[i] > valMax) {
      valMax = nElementos[i];
      posiMax = i;
    }
  }
  
  for (let j in nElementos) {
    console.log(`[${Math.trunc(nElementos[j])}], posición: ${j}`);
  }
  
  console.log(
    `El número mayor que se encuentra en el arreglo es ${Math.trunc(
      valMax
    )} y está en la posicion ${posiMax}`
  );