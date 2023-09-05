const btnSortear = document.querySelector('.sortear');
//btnSortear = ativa o javascript
const textarea = document.querySelector('textarea');
//textarea = campo que os usuários irão informar os nomes
const tagResultado = document.querySelector('.resultado p');
//tagResultado = onde vamos encontrar o resultado
const popUpResultado = document.querySelector('.resultado');
//popUpResultado = para pegar o resultado

function pegarDadosFormulario(){
    const valorCampo = textarea.value;
    //pega o texto digitado pelo usuário
    const listaNomes = valorCampo.split(",");
    //separa os nomes pela vírgula
    const tamanhoArray =listaNomes.length
    /*conta quantos nomes, a biblioteca length conta o tamanho da string*/
    const posicaoNome = gerarNumeroAleatorio(tamanhoArray);
    /*gerar o número aletorio correspondente a posição de um nome*/
    const nome = listaNomes[posicaoNome]
    // recebe o nome sorteado

    mostrarResultado(nome)
    textarea.value = ""

}

btnSortear.addEventListener("click", pegarDadosFormulario);

function gerarNumeroAleatorio(tamanhoArray){
    return Math.floor(Math.random()*(tamanhoArray-0)+0);
    /*O tamanhoArray guarda a quantidade de nomes que vamos sortear, e assim, usando o Math.random vamos escolher um número aleatorio dentro desse intervalo*/
}

function mostrarResultado(nome){
    tagResultado.innerHTML = `Resultado: <br>${nome}`
    popUpResultado.classList.add("Resultado");

}