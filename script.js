const botaoPlayPause = document.getElementById("play-pause"); //alteração da funcionalidade play/pause
const audio = document.getElementById("audio-capitulo");
const botaoProximo = document.getElementById("proximo");
const botaoAnterior = document.getElementById("anterior");
const quantidadeCapitulos = 10; //variável para contabilizar a quantidade de capítulos 
let tocando = false; //variável para saber se alguma faixa está sendo reproduzida
let capitulo = 1; //variável para saber qual faixa está sendo reproduzida
const nomeCapitulo = document.getElementById("capitulo"); //variável para alterar o nome da faixa que está sendo reproduzida

function tocarFaixa(){ //Função tocarFaixa, troca o botão "play" por "pausar" e reproduz faixa de áudio
    botaoPlayPause.classList.remove("bi-play-circle"); //remove o ícone de "play"
    botaoPlayPause.classList.add("bi-pause-circle"); //adiciona o ícone de "pausar"
    audio.play(); //Variável audio; play = início da reprodução de áudio
    tocando = true; //alteração da variável [tocando] para saber que está existe um áudio em reprodução
}
function pausarFaixa(){ //Função pausarFaixa, troca o ícone "pausar" por "play" e pausa a faixa de áudio
    botaoPlayPause.classList.remove("bi-pause-circle"); //remove o ícone "pausar"
    botaoPlayPause.classList.add("bi-play-circle"); //adiciona o ícone "play"
    audio.pause(); //pausa o áudio
    tocando = false; //alteração da variável [tocando] para saber que o áudio não está sendo reproduzido
}
function tocarPausarFaixa(){ //Função para alternar as funções [tocarFaixa] e [pausarFaixa], de acordo com a variável [tocando]
    if (tocando === true){ //se a variável [tocando] possuir valor = true, então a função [pausarFaixa] será utilizada
        pausarFaixa();
    } else { //se a variável [tocando] possuir valor = false, então a função [tocarFaixa] será utilizada
        tocarFaixa();
    }
}
function proximoCapitulo (){ //função para avançar para o próximo capítulo
    if (capitulo < quantidadeCapitulos){ //verificação se o capítulo atual é menor do que a quantidade total de capítulos
        capitulo += 1; //caso o capítulo atual seja menor do que a quantidade total, adiciona-se +1, ou seja, o capítulo seguinte
    } else {
        capitulo = 1; //caso o capítulo atual seja igual ao total de capítulos, volta-se para o primeiro capítulo
    }
    audio.src = "books/dom-casmurro/" + capitulo + ".mp3"; //o código irá procurar o áudio a ser reproduzido pela concatenação do caminho dos áudios com a variável de controle [capitulo]
    nomeCapitulo.innerText = "Capítulo " + capitulo; //alteração do texto da faixa que está sendo reproduzida
    tocarFaixa(); //utiliza a função [tocarFaixa]
}
function anteriorCapitulo (){ //função para reproduzir a faixa anterior
    if (capitulo === 1){ //verifica se a faixa reproduzindo é igual a 1, caso for, irá reproduzir a última faixa
        capitulo = quantidadeCapitulos;
    } else {
        capitulo -= 1;// caso o capítulo atual seja diferente de 1, irá retroceder uma faixa
    }
    audio.src = "books/dom-casmurro/" + capitulo + ".mp3";
    nomeCapitulo.innerText = "Capítulo " + capitulo;
    tocarFaixa();
}
botaoPlayPause.addEventListener("click", tocarPausarFaixa); //espera a intereção do "click" no [botaoPlayPause] para que execute a função [tocarPausarFaixa]
botaoProximo.addEventListener("click",proximoCapitulo); //espera a intereção do "click" no [botaoProximo] para que execute a função [proximoCapitulo]
botaoAnterior.addEventListener("click", anteriorCapitulo);//espera a intereção do "click" no [botaoAnterior] para que execute a função [anteriorCapitulo]
audio.addEventListener("ended", proximoCapitulo);//espera a intereção do "ended" (final da reprodução) no áudio para que execute a função [proximoCapitulo]
