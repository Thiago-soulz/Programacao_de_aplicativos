const pessoas = []

const pessoa = {
    name : "Erich",
    lastname: "Natal",
    age : 22 
}
const pessoa2 = {
    name : "Igor",
    lastname: "Machado",
    age : 20
}
const pessoa3 = {
    name : "Maria",
    lastname: "Clara",
    age : 18 
}
const pessoa4 = {
    name : "Thiago",
    lastname: "Vilhena",
    age : 18 
}
const pessoa5 = {
    name : "Leticia",
    lastname: "Costa",
    age : 19 
}

pessoas.push(pessoa)
pessoas.push(pessoa2)
pessoas.push(pessoa3)
pessoas.push(pessoa4)
pessoas.push(pessoa5)

const filteradpeople = pessoas.filter((p) => p.age < 20)
const findLeticia = pessoas.find((p) => p.name =="Leticia")

console.log(filteradpeople)
console.log(findLeticia)
console.log(pessoas.indexOf(findLeticia))

let container = document.getElementById('container')

function createCard(pessoa){
    let div = document.createElement('div')
    let span = document.createElement('span')
    span.innerHTML = `${pessoa.name} ${pessoa.age}`
    div.appendChild(span)

    return div
}

filteradpeople.forEach(pessoa => {const card = createCard(pessoa)
    container.appendChild(card)
})