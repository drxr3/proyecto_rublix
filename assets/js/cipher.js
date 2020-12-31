
//función que codifica mayusculas.
// Los espacios los toma por defecto.
function encode(numb, text) {
  let result = "";
  let ascii = 0;
  // Carácteres especiales
  let specialCharactersUpper = ['Á', 'É', 'Í', 'Ó', 'Ú', 'Ñ']
  let specialCharactersLower = ['á', 'é', 'í', 'ó', 'ú', 'ñ'];
  //2) crear un loop.
  for (let i = 0; i < text.length; i++) {
    //3)aplicar codigo ascii.
    ascii = text.charCodeAt(i);
    //4)aplicar formula offset.
    if (ascii >= 65 && ascii <= 90) {
      // Mayúsculas
      ascii = (ascii - 65 + parseInt(numb)) % 26 + 65;
    }
    if (ascii >= 97 && ascii <= 122) {
      // minúsculas
      ascii = (ascii - 97 + parseInt(numb)) % 26 + 97;
    }
    // números
    if (ascii >= 48 && ascii <= 57) {
      ascii = (ascii - 48 + parseInt(numb)) % 10 + 48;
    }
    // signos de puntuación divididos según su hubicación (podría concatenarlo de alguna forma(?))
    // if(ascii >= 33 && ascii <= 126 ){
    if (ascii >= 33 && ascii <= 47) {
      ascii = (ascii - 33 + parseInt(numb)) % 15 + 33;
    } else if (ascii >= 58 && ascii <= 64) {
      ascii = (ascii - 58 + parseInt(numb)) % 7 + 58;
    } else if (ascii >= 91 && ascii <= 96) {
      ascii = (ascii - 91 + parseInt(numb)) % 6 + 91;
    } else if (ascii >= 123 && ascii <= 126) {
      ascii = (ascii - 123 + parseInt(numb)) % 4 + 123;
    }
     
    result += String.fromCharCode(ascii)
  }
  return result;
}

// Función que decondifica
function decode(numb, text) {
  let resultado = "";
  let ascii = 0;
  for (let i = 0; i < text.length; i++) {
    ascii = text.charCodeAt(i);
    // Mayusculas
    if (ascii >= 65 && ascii <= 90) {
      ascii = (ascii + 39 - parseInt(numb)) % 26 + 65;
    }
    // Minúsculas
    if (ascii >= 97 && ascii <= 122) {
      ascii = (ascii - 71 - parseInt(numb)) % 26 + 97;
    }
    // Números
    if (ascii >= 48 && ascii <= 57) {
      // ascii = (ascii - 48 + parseInt(numb)) % 10 + 48;
      ascii = (ascii - 38 - parseInt(numb)) % 10 + 48;
    }
    // signos de puntuación divididos según su hubicación (podría concatenarlo de alguna forma(?))
    if (ascii >= 33 && ascii <= 47) {
      ascii = (ascii - 18 - parseInt(numb)) % 15 + 33;
    } else if (ascii >= 58 && ascii <= 64) {
      ascii = (ascii - 51 - parseInt(numb)) % 7 + 58;
    } else if (ascii >= 91 && ascii <= 96) {
      ascii = (ascii - 85 - parseInt(numb)) % 6 + 91;
    } else if (ascii >= 123 && ascii <= 126) {
      ascii = (ascii - 119 - parseInt(numb)) % 4 + 123;
    }
    resultado += String.fromCharCode(ascii);
  }
  return resultado;
}

