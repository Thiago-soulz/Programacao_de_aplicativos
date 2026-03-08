const users = [
    { id: 1, name: 'Ana', age: 22, salary: 3500, active: true, role: 'dev' },
    { id: 2, name: 'Carlos', age: 29, salary: 7200, active: false, role: 'manager' },
    { id: 3, name: 'Marina', age: 31, salary: 6800, active: true, role: 'designer' },
    { id: 4, name: 'João', age: 19, salary: 2500, active: true, role: 'dev' },
    { id: 5, name: 'Fernanda', age: 27, salary: 4100, active: false, role: 'designer' },
    { id: 6, name: 'Lucas', age: 35, salary: 9500, active: true, role: 'manager' },
    { id: 7, name: 'Beatriz', age: 24, salary: 3900, active: true, role: 'dev' },
    { id: 8, name: 'Rafael', age: 33, salary: 7800, active: true, role: 'data_analyst' },
    { id: 9, name: 'Juliana', age: 26, salary: 5200, active: true, role: 'data_analyst' },
    { id: 10, name: 'Bruno', age: 41, salary: 11000, active: false, role: 'manager' },
    { id: 11, name: 'Camila', age: 30, salary: 6300, active: true, role: 'designer' },
    { id: 12, name: 'Thiago', age: 28, salary: 4700, active: true, role: 'dev' },
    { id: 13, name: 'Patricia', age: 37, salary: 8800, active: true, role: 'data_analyst' },
    { id: 14, name: 'Gustavo', age: 23, salary: 3100, active: false, role: 'dev' },
    { id: 15, name: 'Larissa', age: 34, salary: 7600, active: true, role: 'manager' }
    ]


const func_Ativos = users.filter((p) => p.active == true)
const func_inativos = users.filter((p) => p.active == false)
const devs =users.filter((p) => p.role == "dev")
const designer =users.filter((p) => p.role == "designer")
const manager =users.filter((p) => p.role == "manager")
const data_analyst =users.filter((p) => p.role == "data_analyst")
const maior_5000 =users.filter((p) => p.salary >= 5000)
const menor_4000 =users.filter((p) => p.salary <= 4000)
const idade_30 =users.filter((p) => p.salary >= 30)
const menor_25 =users.filter((p) => p.salary <= 25)
const data_analyst_ativos =users.filter((p) => p.role == "data_analyst" && p.active == true)
const dev_4000 =users.filter((p) => p.role == "dev" && p.salary >= 4000)
const manager_30 =users.filter((p) => p.role == "manager" && p.age >= 30)

console.log(func_Ativos)
console.log(func_inativos)
console.log(devs)
console.log(designer)
console.log(manager)
console.log(data_analyst)
console.log(maior_5000)
console.log(menor_4000)
console.log(idade_30)
console.log(menor_25)
console.log(devs)

console.log(data_analyst_ativos)
console.log(dev_4000)
console.log(manager_30)

let container = document.getElementById('container')

function createCard(users){
    let div = document.createElement('div')
    let span = document.createElement('span')
    span.innerHTML = `${users.name} ${users.age}`
    div.appendChild(span)

    return div
}

func_Ativos.forEach(users => {
    const card = createCard(users)
    container.appendChild(card)
})

// Metodo filter -> filtrar de um vetor com base em uma condição 
// Metodo find -> encontrar um valor com base em uma condição 
// Metodo reduce -> Reduz o vetor para um unico valor

const arr = [1,2,3,4,5]
const somarArr = arr.reduce((acc, value)=>{
    return acc + value
}, 0)
console.log(somarArr)
const ageAVG = users.reduce((acc, user) => {
    return acc + user.age
}, 0) / users.length

console.log(ageAVG)

//
const arr2 = [1,2,3,4,5]

const mappedArr = arr2.map((arr) =>{
    return arr * 2 
})

console.log(mappedArr)
console.log(users)

const mappedPeople = users.map((users) =>{
    return users.name
})
console.log(mappedPeople)