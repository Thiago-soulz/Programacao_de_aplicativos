function Somar(){
    let numero1 = Number(document.getElementById('n1').value)
    let numero2 = Number(document.getElementById('n2').value)

    let resposta = document.querySelector('#resposta')
    let soma = numero1 + numero2

    resposta.innerHTML = soma
}
function alterarimagem(){
    let imagem = document.getElementById('imagem')

    imagem.setAttribute('src', "https://s2.coinmarketcap.com/static/img/coins/200x200/30933.png")
}
function voltarimagem(){
    let imagem = document.getElementById('imagem')

    imagem.setAttribute('src', "https://preview.redd.it/cd52ymd4p9e61.png?auto=webp&s=7174018d5699704530fea8bfe529444f0be005bc")
}