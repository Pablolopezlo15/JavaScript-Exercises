/**---------------------------------------------------------------------------------------------
 * @name isOdd
 * @description Devuelve si un número es impar
 * 
 * @param {number} x - El número a evaluar
 * @returns {Boolean} Devuelve true si el número {x} es impar, false sino
 *
 * @example
 *  isOdd(3) // returns true
 */

function isOdd(number){
    let resultado = true;
    if(number%2==0){
        resultado = false;
    }
    else{
        resultado = true;
    }
    return resultado;
}

console.log(isOdd(7));


/**---------------------------------------------------------------------------------------------
 * @name inRange
 * @description Devuelve si un número se encuentra dentro de un rango
 * 
 * @param {number} x - El número a evaluar si se encuentra dentro del rango
 * @param {number} min - El límite inferior del rango
 * @param {number} max - El límite superior del rango
 * @returns {Boolean} Devuelve true si el número {x} se encuentra dentro del rango definido por {min} y {max}, false sino
 *
 * @example
 *  inRange(2, -4, 10) // returns true
 */

function inRange (min,x,max){
    var resultado = false;
    for(i=min;i<max;i++){
        if(x == i){
            resultado = true;
        }

    }
    return resultado;
}

console.log(inRange(2, -7, 10));


/**---------------------------------------------------------------------------------------------
 * @name getBiggestNumber
 * @description Devuelve el número más grande de un array
 * 
 * @param {number[]} numbers - Un array de números
 * @returns {Number} El número más grande del arrray {numbers}
 *
 * @example
 *  getBiggestNumber([3, 8, 2, 1, 10]) // returns 10
 */

function getBiggestNumber(numbers) {
    if (numbers.length === 0) {
      throw new Error('El array está vacío.');
    }
  
    let biggest = numbers[0];
  
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > biggest) {
        biggest = numbers[i];
      }
    }
  
    return biggest;
}

console.log(getBiggestNumber([3, 8, 2, 26, 24])) ;
  

/**---------------------------------------------------------------------------------------------
 * @name getPercentage
 * @description Devuelve el porcentaje correspondiente de un número
 * 
 * @param {number} number - Número a obtener el porcentage
 * @param {number} percentage - Porcentaje a obtener
 * @returns {Number}
 *
 * @example
 *  getPercentage(200, 10) // returns 20
 */

function getPercentage(number, percentage){
    result = number*(percentage/100);
    return result;
}
console.log(getPercentage(200, 10));


/**---------------------------------------------------------------------------------------------
 * @name getRandomColorSequence
 * @description Devuelve una secuencia aleatoria de ciertos colores con cierta longitud
 * 
 * @param {string[]} colors - Array de colores a ser utilizados en la secuencia
 * @param {number} length - Longitud de la secuencia
 * @returns {String[]} - Secuencia aleatoria de colores disponibles en {colors}, con longitud {length}
 *
 * @example
 *  getRandomColorSequence(["red", "blue", "green"], 4) // returns ['blue', 'red', 'red', 'green']
 */


function getRandomColorSequence(colors, length) {
    if (colors.length === 0) {
        console.log("No hay ningun color");
    }
  
      sequence = [];
    for (let i = 0; i < length; i++) {
      randomIndex = Math.floor(Math.random() * colors.length);
      sequence.push(colors[randomIndex]);
    }
  
    return sequence;
}
  
console.log(getRandomColorSequence(["red", "blue", "green"],4)); 
  



/**---------------------------------------------------------------------------------------------
 * @name getRockPaperScissor
 * @description Devuelve una jugada aleatoria de piedra, papel o tijera
 * 
 * @returns {String} - Devuelve "rock", "paper" o "scissor"
 *
 * @example
 *  getRockPaperScissor() // returns "paper"
 */


function getRockPaperScissor() {
  
    array = ["Rock","Paper", "Scissor"];
    random = Math.floor(Math.random() * array.length);

    return array[random];
}
  
console.log(getRockPaperScissor()); 


/**---------------------------------------------------------------------------------------------
 * @name getRockPaperScissorRandomSequence
 * @description Devuelve una secuencia aleatoria de jugadas de piedra, papel o tijera, con cierta longitud
 *
 * @param {number} length - Longitud de la secuencia
 * @returns {String[]}
 *
 * @example
 *  getRockPaperScissorRandomSequence(4) // returns ["rock", "paper", "rock", "scissor"]
 */

function getRockPaperScissorRandomSequence(length) {

    array = ["Rock","Paper", "Scissor"];
    for (let i = 0; i < length; i++) {
        random = Math.floor(Math.random() * array.length);
        array.push(array[random]);
    }
  
    return array;
}
console.log(getRockPaperScissorRandomSequence(3)); 


/**---------------------------------------------------------------------------------------------
 * @name filterNumbersGreaterThan
 * @description Filtra los números de un array que sean mayor a cierto número x dejando solo los que sean menores a este
 *
 * @param {number[]} numbers - Array de números a filtrar
 * @param {number} filter - Número a partir del cuál filtrar los demás números
 * @returns {Number[]} - Array de números filtrados menores a {filter}
 *
 * @example
 *  filterNumbersGreaterThan([3, 8, 12, 1, 7, 4], 7) // returns [3, 1, 4]
 */

function filterNumbersGreaterThan(numbers, filter) {
    menores = [];
    for (let i = 0; i < numbers.length; i++) {
        if(numbers[i]<filter){
            menores.push(numbers[i]);
        }
    }
    return menores;
}
  
console.log(filterNumbersGreaterThan([3,4,8,6,5,2,4,14,52,14],7));

/**---------------------------------------------------------------------------------------------
 * @name getFactorial
 * @description Devuelve el factorial de un número
 *
 * @param {number} x - Número del cuál obtener factorial
 * @returns {Number} - Factorial de {x}
 *
 * @example
 *  getFactorial(4) // returns 24
 */

function getFactorial(x){
	var total = 1; 
	for (i=1; i<=x; i++) {
		total = total * i; 
	}
	return total; 
}

console.log(getFactorial(5));

/**---------------------------------------------------------------------------------------------
 * @name areArraysEqual
 * @description Devuelve si dos arrays son iguales (tienen los mismos ítems en el mismo orden)
 *
 * @param {[]} a 
 * @param {[]} b 
 * @returns {Boolean} - Devuelve true si ambos arrays son iguales, false sino
 *
 * @example
 *  areArraysEqual([1, 4], [1, 4]) // returns true
 */

function areArraysEqual(a, b) {
    if (a.length !== b.length) {
      return false;
    }
  
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            return false;
        }
    }
    return true;
}
console.log(areArraysEqual(["Hola","Adios","45"],["Hola","Adios","45"]));



/**---------------------------------------------------------------------------------------------
 * @name toHackerSpeak
 * @description Convierte un string a "Hacker Speak". Para hacerlo, tiene que transformar las "a" en 4, las "e" en 3, las "i"
 * en 1, las "o" en 0 y las "s" en 5
 *
 * @param {string} text 
 * @returns {String} - El texto convertido a "Hacker Speak"
 * 
 * @example
 *  toHackerSpeak("I'm a hacker now") // returns "1'm 4 h4ack3r n0w"
 */

function toHackerSpeak(text) {
    // Reemplaza las letras según las reglas
    text = text.replace(/a/g, '4');
    text = text.replace(/e/g, '3');
    text = text.replace(/i/g, '1');
    text = text.replace(/o/g, '0');
    text = text.replace(/s/g, '5');
  
    return text;
}
  

console.log(toHackerSpeak("Im a hacker now"));
  



/**---------------------------------------------------------------------------------------------
 * @name getFileExtension
 * @description Obtiene la extensión de un archivo
 *
 * @param {string} file - El nombre del archivo a obtener la extensión 
 * @returns {String} - La extensión del archivo
 * 
 * @example
 *  getFileExtension("imagen.jpg") // returns "jpg"
 */

function getFileExtension(file) {
    const parts = file.split('.');
    
    if (parts.length > 1) {
      return parts[parts.length - 1];
    } else {
      return '';
    }
}

console.log(getFileExtension("image.jpg")); 
  



/**---------------------------------------------------------------------------------------------
 * @name flatArray
 * @description Dado un array 2D, devuelve un array 1D que contiene todos los ítems 
 *
 * @param {[][]} arr - Array 2D a "aplanar" 
 * @returns {[]} - El array "aplanado"
 * 
 * @example
 *  flatArray([[1, 5, 4], [3, 10], [2, 5]]) // returns [1, 5, 6, 3, 10, 2, 5]
 */

function flatArray(arr) {
    // Utiliza el método concat() junto con el operador de propagación (...) para aplanar el array
    return [].concat(...arr);
}
  
  const array2D = [[1, 5, 4], [3, 10], [2, 5]];
  const flatArrayResult = flatArray(array2D);
  console.log(flatArrayResult); // Salida: [1, 5, 4, 3, 10, 2, 5]
  



/**---------------------------------------------------------------------------------------------
 * @name removeDuplicates
 * @description Remueve duplicados de un array 
 *
 * @param {[]} arr - Array con duplicados a remover
 * @returns {[]} - El array resultante sin duplicados
 * 
 * @example
 *  removeDuplicates([4, 5, 10, 4, 10, 2]) // returns [4, 5, 10, 2]
 */

function removeDuplicates(arr) {
    const unicos = new Set(arr);
    const uniqueArray = [...unicos];
  
    return uniqueArray;
}

    console.log(removeDuplicates([4, 5, 10, 4, 10, 2])); 
  


/**---------------------------------------------------------------------------------------------
 * @name countLetter
 * @description Devuelve la cantidad de veces que una letra aparece en un string 
 *
 * @param {string} letter - Letra a contar
 * @param {string} text - Texto sobre el que realizar la cuenta de {letter}
 * @returns {Number} - Número de veces que aparece {letter} en {text}
 * 
 * @example
 *  countLetter("a", "javascript") // returns 2
 */

function countLetter(letter, text) {
    let count = 0;
    for (let i = 0; i < text.length; i++) {
        if (text[i].toLowerCase() === letter.toLowerCase()) {
        count++;
      }
    }
  
    return count;
}
console.log(countLetter("a","javascript")); 
  

/**---------------------------------------------------------------------------------------------
 * @name canPlay
 * @description Devuelve si dada una mano de Uno y una carta en la mesa, puede jugar o tiene que retirar del mazo. Las cartas
 * tienen uno de 4 colores posibles (red, blue, green or yellow) y un número del 1 al 9. Una carta se escribe como un string
 * con color y número. Por ejemplo: "yellow 3", "red 6". Se puede jugar si la carta en la mano coincide en color o en número
 * con la carta en la mesa
 *
 * @param {string[]} hand - Array de cartas que tiene en la mano 
 * @param {string} face - Carta que está en la mesa
 * @returns {Boolean} - Devuelve true si puede jugar alguna carta, o false si tiene que retirar del mazo
 * 
 * @example
 *   canPlay(["yellow 3", "yellow 5", "red 8"], "red 2") // returns true
 *   canPlay(["yellow 3", "yellow 5", "red 8"], "blue 5") // returns true
 *   canPlay(["yellow 3", "blue 5", "red 8", "red 9"], "green 4") // returns false
 *   canPlay(["yellow 3", "red 8"], "green 2") // returns false
 */
 
function canPlay(hand, face) {
    const [faceColor, faceNumber] = face.split(' ');

    for (let card of hand) {
        const [cardColor, cardNumber] = card.split(' ');
        if (cardColor === faceColor || cardNumber === faceNumber) {
            return true;
        }
    }

    return false;
}

console.log(canPlay(["yellow 3", "yellow 5", "red 8"], "red 2")); // true
console.log(canPlay(["yellow 3", "yellow 5", "red 8"], "blue 5")); // true
console.log(canPlay(["yellow 3", "blue 5", "red 8", "red 9"], "green 4")); // false
console.log(canPlay(["yellow 3", "red 8"], "green 2")); // false




  

/**---------------------------------------------------------------------------------------------
 * @name removeWords
 * @description Dado un string y un array de palabras a remover, devuelve el string sin las palabras removidas
 *
 * @param {string} str - Texto a recortar 
 * @param {string[]} words - Palabras a remover
 * @returns {string} - Texto resultante con las palabras removidas
 * 
 * @example
 *   removeWords("This is a really bad test", ["really", "bad"]) // returns "This is a test"
 */


function removeWords(str, words) {
    const wordsArray = str.split(' ');
    const filteredWords = wordsArray.filter(word => !words.includes(word));
    const result = filteredWords.join(' ');
    return result;
}

console.log(removeWords("This is a really bad test",["really", "bad"])); 
  

/**---------------------------------------------------------------------------------------------
 * @name getRange
 * @description Dado dos números, devuelve un array con los números enteros sucesivos entre ellos, puede incluir los números 
 * iniciales o no
 *
 * @param {number} a 
 * @param {number} b
 * @param {boolean} [inclusive=true] inclusive // Parámetro opcional, valor por defecto true
 * @returns {number[]} - Array de números entre a y b, incluyendo a y b
 * 
 * @example
 *   getRange(5, 10) // returns [5, 6, 7, 8, 9 ,10]
 *   getRange(3, -2) // returns [3, 2, 1, 0, -1, -2]
 *   getRange(-5, -10, false) // returns [-6, -7, -8, -9]
 */

function getRange(a, b, inclusive = true) {
    const result = [];
    const step = a <= b ? 1 : -1;

    for (let i = a; (step > 0 ? i <= b : i >= b); i += step) {
        result.push(i);
    }

    if (!inclusive) {
        if (step > 0) {
            result.shift();
        } else {
            result.pop();
        }
    }

    return result;
}

console.log(getRange(5, 10)); // [5, 6, 7, 8, 9, 10]
console.log(getRange(3, -2)); // [3, 2, 1, 0, -1, -2]
console.log(getRange(-5, -10, false)); // [-6, -7, -8, -9]

