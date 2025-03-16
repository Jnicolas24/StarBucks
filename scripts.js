/*
    JavaScript NÃO É Java

    Variáveis
É um pedacinho de memória do computador
que eu posso guardar o que eu quiser.

 - Algoritmo (Receita de Bolo)
        [x] Descobrir quando o usuário clicou no botão
        [x] Assim que o botão for clicado...
        [x] Trocar a cor de fundo
        [] Trocar a imagem principal
        [] Publicar na Internet 

    Função
É um pedacinho de código QUE, 
só é executado quando é chamado.

*/

// document = HTML
// querySelector -> Selecionar ou Puxar o que eu pedir

let circulo = document.querySelector('.circulo')


function trocarACor(cor){
    circulo.style.background = cor
}


