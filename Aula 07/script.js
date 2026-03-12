const data = require('./data.json')

const pessoas = []

const pessoa1 = {
    name: "Erich",
    lastname: "Natal",
    age: 22
}

const pessoa2 = {
    name: "Igor",
    lastname: "Machado",
    age: 20
}

const pessoa3 = {
    name: "Maria",
    lastname: "Clara",
    age: 18
}

const pessoa4 = {
    name: "Leticia",
    lastname: "Costa",
    age: 20
}
const pessoa5 = {
    name: "Raphael",
    lastname: "Ferreira",
    age: 19
}

pessoas.push(pessoa1)
pessoas.push(pessoa2)
pessoas.push(pessoa3)
pessoas.push(pessoa4)
pessoas.push(pessoa5)


// const filteredPeople = pessoas.filter((p) => p.age >= 20)
// const findLeticia = pessoas.find((p) => p.name == "Leticia" )


// console.log(filteredPeople)
// console.log(findLeticia)
// console.log(pessoas.indexOf(findLeticia))

// let container = document.getElementById('container')

// function createCard(pessoa){
//     let div = document.createElement('div')
//     let span = document.createElement('span')
//     span.innerHTML = `${pessoa?.name} ${pessoa?.age} ${pessoa?.lastname} ${pessoa?.age}`
//     div.appendChild(span)

//     return div
// }

// filteredPeople.forEach(pessoa => {
//     const card = createCard(pessoa)
//     container.appendChild(card)
// })

// Método Filter -> Filtrar de um vetor com base em uma condição
// Método Find -> Encontrar um valor com base em uma condição
// Método Reduce -> Reduz o vetor para um único valor

const arr = [1,2,3,4,5]

const somaArr = arr.reduce((acc, value) => {
    return acc + value
}, 0)

console.log(somaArr)

const ageAvg = pessoas.reduce((acc, pessoa) => {
    return acc + pessoa.age / pessoas.length
}, 0)

console.log(ageAvg.toFixed(0))

// Map transforma um vetor de acordo com uma condição

const arr2 = [1,2,3,4,5]

const mappedArr = arr2.map((arr) => {
    return arr * 2
})


console.log(mappedArr)

console.log(pessoas)

const mappedPeople = pessoas.map((pessoa) => {
    return { name: pessoa.name, lastname: pessoa.lastname }
})

console.log(mappedPeople)

console.log(data.vehicles)