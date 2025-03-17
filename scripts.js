/*
    JavaScript NÃO É Java!

    Variáveis
É um pedacinho de memória do computador
que eu posso guardar o que eu quiser.

 - Algoritmo (Receita de Bolo)
        [x] Descobrir quando o usuário clicou no botão
        [x] Assim que o botão for clicado...
        [x] Trocar a cor de fundo
        [x] Trocar a imagem principal

    Função
É um pedacinho de código QUE, 
só é executado quando é chamado.

*/

// document = HTML
// querySelector -> Selecionar ou Puxar o que eu pedir

let circulo = document.querySelector('.circulo')
let imagem = document.querySelector(".starbucks")

function trocarCor(cor) {
    circulo.style.background = cor
}

function trocaImagem(img) {
    imagem.src = img
}


