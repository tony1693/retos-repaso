// 2. Realizar una función que dada una fecha de nacimiento te devuelva el signo zodiacal.

class Zodiac {
        Capricornio:string;
        Libra:string;
        Acuario:string;
        Sagitario:string;
        Escopio:string;
        Virgo:string;
        Leo:string;
        Cancer:string;
        Geminis:string;
        Tauro:string;
        Aries:string;
        Piscis:string;
    constructor(){
        this.Capricornio = "Capricornio";
        this.Libra = "Libra";
        this.Acuario = "Acuario";
        this.Sagitario = "Sagitario";
        this.Escopio = "Escorpio";
        this.Virgo = "Virgo";
        this.Leo = "Leo";
        this.Cancer = "Cancer";
        this.Geminis = "Geminis";
        this.Tauro = "Tauro";
        this.Aries = "Aries";
        this.Piscis = "Piscis";

        
    }

}

function obtenerSignoZodiaco(fechaNacimiento: Date):Zodiac | undefined{
    const dia = fechaNacimiento.getDate();
    const mes = fechaNacimiento.getMonth();

    if ((mes === 3 && dia >= 21) || (mes === 4 && dia <= 19)) {
        return this.Aries;
      } else if ((mes === 4 && dia >= 20) || (mes === 5 && dia <= 20)) {
        return this.Tauro;
      } else if ((mes === 5 && dia >= 21) || (mes === 6 && dia <= 20)) {
        return this.Geminis;
      } else if ((mes === 6 && dia >= 21) || (mes === 7 && dia <= 22)) {
        return this.Cancer;
      } else if ((mes === 7 && dia >= 23) || (mes === 8 && dia <= 22)) {
        return this.Leo;
      } else if ((mes === 8 && dia >= 23) || (mes === 9 && dia <= 22)) {
        return this.Virgo;
      } else if ((mes === 9 && dia >= 23) || (mes === 10 && dia <= 22)) {
        return this.Libra;
      } else if ((mes === 10 && dia >= 23) || (mes === 11 && dia <= 21)) {
        return this.Escorpio;
      } else if ((mes === 11 && dia >= 22) || (mes === 12 && dia <= 21)) {
        return this.Sagitario;
      } else if ((mes === 12 && dia >= 22) || (mes === 1 && dia <= 19)) {
        return this.Capricornio;
      } else if ((mes === 1 && dia >= 20) || (mes === 2 && dia <= 18)) {
        return this.Acuario;
      } else if ((mes === 2 && dia >= 19) || (mes === 3 && dia <= 20)) {
        return this.Piscis;
    }
}

const fechaNacimiento = new Date(1993,0,16);
const signoZodiacal = obtenerSignoZodiaco(fechaNacimiento);
console.log(signoZodiacal);

// 3. Realizar un procedimiento que dado el nombre de un país te imprima en que continente
// estás. (Max 5 países por continente).
// La cabecera del procedimiento tendrá el siguiente aspecto: function continent(country)

function obtenerContinente(pais: string): void {
    const europa:string[] = ["España", "Francia", "Suiza", "Italia", "Portugal"];
    const asia:string[] = ["China", "Japón", "India", "Corea del Sur", "Indonesia"];
    const africa:string[] = ["Marruecos", "Egipto", "Sudáfrica", "Kenia", "Senegal"];
    const americaNorte:string[] = ["Estados Unidos", "Canadá", "México", "Costa Rica", "Panamá"];
    const americaSur:string[] = ["Argentina", "Brasil", "Ecuador", "Perú", "Colombia"];
    const oceania:string[] = ["Australia", "Nueva Zelanda", "Fiyi", "Papúa Nueva Guinea", "Islas Salomón"];

    

    switch (europa) {
        case ["España", "Francia", "Suiza", "Italia", "Portugal"]:
           console.log("Este pais se adentra en Europa");
            break;
        }
    switch (asia) {
        case ["China", "Japón", "India", "Corea del Sur", "Indonesia"]:
            console.log("Este pais se adentra en Asia");
              break;
      }
    switch (americaNorte) {
        case  ["Estados Unidos", "Canadá", "México", "Costa Rica", "Panamá"]:
            console.log("Este pais se adentra en America del Norte");
              break;
      }
    switch (americaSur) {
        case  ["Argentina", "Brasil", "Ecuador", "Perú", "Colombia"]:
            console.log("Este pais se adentra en America del Sur");
              break;
      }
    switch (oceania) {
        case  ["Australia", "Nueva Zelanda", "Fiyi", "Papúa Nueva Guinea", "Islas Salomón"]:
            console.log("Este pais se adentra en Oceania");
              break;
      }
    switch (africa) {
        case  ["Marruecos", "Egipto", "Sudáfrica", "Kenia", "Senegal"]:
            console.log("Este pais se adentra en Africa");
              break;
      }
}



// Realizar una función que te imprima por consola el siguiente mensaje:
// - “El numero es par”, si el numero introducido como parámetro de entrada es par
// - “El numero es impar”, si el numero introducido como parámetro de entrada es impar
// La cabecera de la función tendrá el siguiente aspecto: function isEven(number)

export function isEven(number) {
  if (number % 2 === 0) {
    console.log("El numero es par");
  } else {
    console.log("El numero es impar");
  }
}