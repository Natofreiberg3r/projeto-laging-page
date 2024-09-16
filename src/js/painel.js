/* 
         DESCRIÇÃO DO PASSO A PASSO PARA CRIAR O CÓDIGO JS

    quando clicar na seta para avançar, esconder todas as imagens e mostrar a próxima imagem

      a imagem atual começa em 0 porque é a primeira imagem,
      assim que for clicado no avançar eu preciso adicionar mais uma ao contador de imagens para poder saber que agora eu vou mostrar a segunda imagem

      esconder todas as imagens
         pegar todas as imagens usando o DOM e romover a classe mostrar

    mostrar a próxima imagem
        pegar todas as iamgens, descobrir qual é a próxima, e colocar a classe mostrar nela
*/

const imagensPainel = document.querySelectorAll('.imagem-painel');
const setaAvancar = document.getElementById('btn-avancar');
const setaVoltar = document.getElementById('btn-voltar');
let imagemAtual = 0;

function esconderImagens () {
    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar')
    });
}

function mostrarImagem () {
    imagensPainel[imagemAtual].classList.add('mostrar');
}

// quando clicar na seta para avançar, esconder todas as imagens e mostrar a próxima imagem
setaAvancar.addEventListener('click', function () {

    //testa se o contador da imagemAtual é igual ao totalDeImagens
    const totalDeImagens = imagensPainel.length -1
    if(imagemAtual === totalDeImagens){
        return
    }

    /*a imagem atual começa em 0 porque é a primeira imagem,
     assim que for clicado no avançar eu preciso adicionar mais uma ao contador de imagens para poder saber que agora eu vou mostrar a segunda imagem
     */

    imagemAtual++;

    esconderImagens();

    /*
      esconder todas as imagens
        pegar todas as imagens usando o DOM e remover a classe mostrar
    */

   

    /*
     mostrar a próxima imagem
        pegar todas as iamgens, descobrir qual é a próxima, e colocar a classe mostrar nela
    */

        mostrarImagem();

})

// quando clicar na seta para voltar, esconder todas as imagens e mostrar a imagem anterior
setaVoltar.addEventListener('click',function() {
    if(imagemAtual === 0) {
        return;
    }

    imagemAtual--;

      /*
      esconder todas as imagens
        pegar todas as imagens usando o DOM e remover a classe mostrar
    */

        esconderImagens();

            /*
     mostrar a imagem anterior
        pegar todas as iamgens, descobrir qual é a anterior, e colocar a classe mostrar nela
    */

        mostrarImagem();

})





// Função para obter a data do próximo sábado às 20:00
function getNextSaturday20h() {
    const now = new Date();
    const nextSaturday = new Date();

    // Se o dia atual não for sábado, ajusta para o próximo sábado
    nextSaturday.setDate(now.getDate() + (6 - now.getDay() + 7) % 7);

    // Ajusta para 20 horas
    nextSaturday.setHours(20, 0, 0, 0);

    return nextSaturday;
}

// Função para atualizar a contagem regressiva
function updateCountdown() {
    const now = new Date();
    const eventDate = getNextSaturday20h();
    const timeRemaining = eventDate - now;

    if (timeRemaining >= 0) {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));

        document.getElementById("dias").innerText = days;
        document.getElementById("horas").innerText = hours;
        document.getElementById("minutos").innerText = minutes;
    }
}

// Atualiza a contagem regressiva a cada minuto
setInterval(updateCountdown, 1000);
 