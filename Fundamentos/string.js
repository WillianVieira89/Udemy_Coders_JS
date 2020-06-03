const escola = "Cod3r"

console.log(escola.charAt(4)) // charAt(*) retorna o indice solicitado dentro da string
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3))  // charCodeAt(*) retorna o indice solicitado da string pelo Unicode
console.log(escola.indexOf('3'))

console.log(escola.substring(1))
console.log(escola.substring(0, 3))

console.log('Escola '.concat(escola).concat("!"))
console.log('Escola ' + escola + "!")
console.log(escola.replace(3,'e'))

console.log('Ana,Maria,Pedro'.split(','))