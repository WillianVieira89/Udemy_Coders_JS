const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))// isInteger retorna number true/false
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total  = avaliacao1 * peso1 + avaliacao2 * peso2
const media  = total / (peso1 + peso2)

console.log(media.toFixed(2))// 'toFixed(*)' define o numero de casas decimais na variavel Number
console.log(media.toString(2))// 'toString(2)' define a variavel Number com código binário
console.log(typeof media)
console.log(typeof Number)// Number e uma função, number e uma resultado