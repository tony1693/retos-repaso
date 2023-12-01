// Realizar una función que imprima los números impares existentes hasta el número
// indicado como parámetro de entrada.
// La cabecera de la función tendrá el siguiente aspecto: function evenNumbers(num)

function evenNumbers(num)  {
    for (let i =1;i <= num;i++) {
        if (i % 2 !== 0){
            console.log(i);
            
        }
    }
}
evenNumbers(10);

// Realizar una función que como parámetro de entrada reciba un array y como salida
// devuelva el array revertido. No se puede utilizar el método revert de la clase array
// La cabecera de la función tendrá el siguiente aspecto: function myRevert(myArr)

const arrayNumb = [1, 2, 3, 4, 5, 6];

function myRevert(myArr) {
    let longitud = myArr.length;
    let mitadLongitud = Math.floor(longitud / 2);
  
    for (let i = 0; i < mitadLongitud; i++) {
      let temp = myArr[i];
      myArr[i] = myArr[longitud - 1 - i];
      myArr[longitud - 1 - i] = temp;
    }
  
    return myArr;
  }
   
console.log(myRevert(arrayNumb));

// Realizar una función que reciba como parámetro un array de strings que contenga
// nombres de colores y te imprima en cada caso si el color está en el arcoíris o no.
// La cabecera de la función tendrá el siguiente aspecto: function isRainbow(colors)

function isRainbow(colors) {
    const arcoíris = ["rojo", "naranja", "amarillo", "verde", "azul","violeta"];

    for (let i = 0; i < colors.length; i++) {
        const color = colors[i].toLowerCase();
        if (arcoíris.includes(color)) {
            console.log(`${colors[i]} está en el arcoíris.`);
        } else {
            console.log(`${colors[i]} no está en el arcoíris.`);
        }
    }
}

const colores = ["rojo", "negro", "azul", "verde", "rosa"];
console.log(isRainbow(colores));
 
// Realizar una función que te devuelva la suma del numero de caracteres de las palabras
// almacenadas en un array.
// La cabecera de la función tendrá el siguiente aspecto: function add(myWords)

export function add(myWords) {
    let sum = 0;
    for (let i = 0; i < myWords.length; i++) {
      sum += myWords[i].length;
    }
  
    return sum;
  }
  
  
  const words = ["Hola", "soy", "tony", "Encantado"];
  const totalCharacters = add(words);
  console.log("La suma de caracteres es:", totalCharacters);
