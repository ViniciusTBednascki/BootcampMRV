function arrayLength(array, length) {
  try {
    if(!array || !length) {
      throw ReferenceError("Envie o array e o tamanho");
    }

    if(!Array.isArray(array)) {
      throw TypeError("O primeiro parâmetro precisa ser um array");
    }

    if(typeof(length) != "number") {
      throw TypeError("O segundo parâmetro precisa ser um número");
    }

    if(array.length !== length) {
      throw RangeError("O tamanho do array é diferente do número informado")
    }

    return array
  } catch(e) {
    switch (true) {
      case e instanceof ReferenceError:
          console.log("Este erro é um ReferenceError");
          console.log(e.message)
        break;
    
      case e instanceof TypeError:
          console.log("Este erro é um TypeError");
          console.log(e.message)
        break;
    
      case e instanceof RangeError:
          console.log("Este erro é um RangeError");
          console.log(e.message)
        break;
    
      default:
          console.log("Tipo de erro não esperado: " + e);
        break;
    }
  }
}

const array = [4, 5, 123, 5123];

// console.log(arrayLength());
// console.log(arrayLength(array));
// console.log(arrayLength(123, "5"));
// console.log(arrayLength(array, 3));
console.log(arrayLength(array, 4));