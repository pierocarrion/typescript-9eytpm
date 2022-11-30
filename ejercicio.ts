// Crear un metodo no enumerable que extienda la capacidad de los arrays
// dicho metodo sera sumOfTwowNums, consisitira en validar si existen dos numeros
// cualesquiera en el array cuya suma sea igual que el unico paramentro que se le pasara
// al metodo.

// Boundary:
// Array de enteros, parametro entero

//Complejidad maxima aceptada (peor caso):
// O(n)

// Keywords:
// sum of two nums
const ARR: number[] = [1, 2, 3, 4, 5, 6];
let MEMO = new Set();

function dp(index: number): void {
  if (index === ARR.length) return;
  for (let i = 0; i < ARR.length; i++) {
    if (ARR[index] !== ARR[i]) {
      MEMO.add(ARR[index] + ARR[i]);
    }
  }
  dp(index + 1);
}

function sumOfTwoNums(numberQuery: number): boolean {
  if (MEMO.has(numberQuery)) {
    return true;
  }
  return false;
}

function main() {
  dp(ARR[0]); //Executed only the first time

  //Here should be a bucle of infinite queries
  var numberQuery = 10;
  console.log(sumOfTwoNums(numberQuery));
}

main();
