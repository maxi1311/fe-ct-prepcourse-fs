/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
    
   var arreglo = [];
   for (var clave in objeto) {
      arreglo.push([clave, objeto[clave]]);
      
   }

      return arreglo;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:

   let nuevo = {};

   for (let i = 0; i < string.length; i++){
     let letra = string[i];
      if(nuevo[letra] == undefined ){
            nuevo[letra] = 1;
      } else {
         nuevo[letra]++;
      } 
   }
    return nuevo;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:

   let mayuscula = "" ;
   let minuscula = "";
      for (let i = 0; i < string.length; i++){
      if( string[i] === string[i].toUpperCase() ){
         mayuscula += string[i];
      } else {
         minuscula += string[i];
      }
   }
   return mayuscula + minuscula
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
  
   let nuevo = [];

   frase.split("").map(function (ele){
         nuevo.unshift(ele);
      })
   
      return nuevo.join("").split(" ").reverse().join(" ")
}     


function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   
   let nuevo = [numero.toString().split("").reverse().join("")];
   let nuevo1 ="";
   

   
   if (nuevo == numero){
      nuevo1 = "Es capicua";
   }  else {
      nuevo1 = "No es capicua";          
   }     
   return nuevo1;
}   


function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
  
   let nuevoString = "";

   for (let i = 0; i < string.length; i++) {
      if (string[i]!== "a" && string[i]!== "b" &&string[i]!== "c") {
         nuevoString +=  (string[i]);
      }
   }   
      return nuevoString ;
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:

   function comparar(a, b) {
      return a.length - b.length;
   }

      return arrayOfStrings.sort(comparar);
  
}


function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   
   let nuevo = [];

   array1.map(function(e){
      if( array2.includes(e)){ nuevo.push(e)}});

      return nuevo;
   
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
