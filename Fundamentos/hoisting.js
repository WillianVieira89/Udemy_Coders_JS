//hoisting é a elevação da variavel var
console.log('a =', a)
var a = 2
console.log('a =', a)

//hoisting não funciona na variavel let causa erros
console.log('b =', b)
let b = 3
console.log('b =', b)