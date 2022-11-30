// Extender String para aun posea un metodo que permita validar
// si es el anagrama de un string q pase como unico parametro

//Complejidad maxima aceptada:
//O(n)

//Boundary:
//ANSI

// Key words:
// anagram

const GLOBALSTRING: string = 'race';

function isAnagram(stringQuery: string): boolean {
  const globalSorted = GLOBALSTRING.split('').sort();
  const entrySorted = stringQuery.split('').sort();
  
  if(globalSorted.length != entrySorted.length) return false;

  globalSorted.forEach((char, index) => {
    if(char !== entrySorted[index] ){
      return false;
    }
  })
  return true;
}

function main2(){
  const stringQuery = 'care';
  console.log(isAnagram(stringQuery));
}

main2();
