function verificarPalindromo(frase) {
  if(!frase || typeof(frase) !== "string") { return "informe uma frase ou palavra"; }

  const fraseSemEspaco = frase.split(" ").join("");
  for(let i = 0; i < fraseSemEspaco.length/2; i++) {
    let j = (fraseSemEspaco.length-1)-i
    
    if(fraseSemEspaco[i].toLocaleLowerCase() !== fraseSemEspaco[j].toLocaleLowerCase()) {
      return false
    }
  }

  return true
}

console.log(verificarPalindromo("Essa frase e um palindromo"));
console.log(verificarPalindromo("Socorram me subi no onibus em marrocos"));