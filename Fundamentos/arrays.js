const valores = [7.7, 8.9, 6.3, 9.2] // valores dentro de [] consiste uma array
console.log(valores[0], valores [3])
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste') // adciona novos elementos no array
console.log(valores)

console.log(valores.pop()) // retira o ultimo item do array
delete valores [5] // retira o item indicado no [] do array
console.log(valores)

console.log(typeof valores)


