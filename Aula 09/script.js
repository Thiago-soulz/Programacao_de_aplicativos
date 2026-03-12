const pessoa = require('./data.json')

console.log(pessoa)

const pessoas = pessoa.filter((p) => p.salary == 1234)
const pais = pessoa.map((p) => {
    return { name: p.name, parents: p.parents}
})

// console.log(pessoas)
console.log(pais)
