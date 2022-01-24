function getUniqueValues(array) {
  let valuesSet = new Set(array);

  return [...valuesSet];
}

const array = [30, 30, 40, 5, 223, 2049, 3034, 5]

console.log(getUniqueValues(array));