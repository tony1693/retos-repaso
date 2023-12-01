// Realizar una función que te devuelva si existe un numero par en el array de números que
// introduces como parámetro de entrada.
// La cabecera de la función tendrá el siguiente aspecto: function hasEven(myNums)

function hasEven(myNums) {
    let i = 0;
    let found = false;
        while (i < myNums.length && !found) {
        if (myNums[i] % 2 === 0) {
            found = true;
        }
        i++;
    }

    return found;
}
const numbers = [1,3,4,5,7,9];
const result = hasEven(numbers);
console.log(result);

// Realizar una función que reciba un array de nombres y te devuelva verdadero si y solo si
// todos los nombres empiezan por M.
// La cabecera de la función tendrá el siguiente aspecto: function startWithM(myNames)

function startWithM(myNames) {
    let i = 0;
    let found = true;
        while (i < myNames.length && found) {
            if (myNames[i][0] !== "M") {
                found = false;
            }
            i++;
        }
        return found;
}
const nombre1 = ["Manolo","Maria","Paco"];
const nombre2 = ["Mario","Manuel","Macarena"];
console.log(startWithM(nombre1));
console.log(startWithM(nombre2));

