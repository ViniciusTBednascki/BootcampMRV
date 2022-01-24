function substituirPares(array) {
  if(!array || !Array.isArray(array) || array.length == 0) { return "informe um array com pelo menos um número"; }

  array.forEach((elemento, index) => {
    if(typeof(elemento) != "number") { return "o array deve conter apenas números"; }

    if(elemento != 0 && elemento%2 == 0) {
      array[index] = 0;
    }
  })
}

let array = [1, 2, 3, 4];
substituirPares(array);
console.log(array);