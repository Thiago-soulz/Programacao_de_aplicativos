function cadastrar() {
    let lista = document.getElementById('lista')
    let div = document.createElement('div')
    let button = document.createElement('button')
    let span = document.createElement('span')
    let input = document.getElementById('input').value
    
    div.classList.add('item')
    lista.appendChild(div)

    span.innerHTML = input
    button.textContent = "Deletar"

    div.appendChild(span)

    button.classList.add('delete-btn')
    div.appendChild(button)

    button.addEventListener('click', () => {
        button.parentElement.remove()
    })

}