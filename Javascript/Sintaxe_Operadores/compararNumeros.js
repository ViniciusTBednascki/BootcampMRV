function compararNumeros(primeiroNumero, segundoNumero) {
  const resultadoSaoIguais = verificarSeSaoIguais(primeiroNumero, segundoNumero)
  const resultadoComparacaoSoma = verificarSomaDosNumeros(primeiroNumero, segundoNumero)
  console.log(`${resultadoSaoIguais} ${resultadoComparacaoSoma}`)
}

function verificarSeSaoIguais(primeiroNumero, segundoNumero) {
  const resultadoComparacao = primeiroNumero == segundoNumero ? '' : "não"
  return `Os números ${primeiroNumero} e ${segundoNumero} ${resultadoComparacao} são iguais.`

}

function verificarSomaDosNumeros(primeiroNumero, segundoNumero) {
  const soma = primeiroNumero + segundoNumero
  const resultadoComparacao10 = soma < 10 ? "menor que" : soma > 10 ? "maior que" : "igual a"
  const resultadoComparacao20 = soma < 20 ? "menor que" : soma > 20 ? "maior que" : "igual a"

  return `Sua soma é ${soma}, que é ${resultadoComparacao10} 10 e ${resultadoComparacao20} 20.`
}

compararNumeros(6,5)