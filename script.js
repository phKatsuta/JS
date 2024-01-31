const botaoPlayPause = document.getElementById("play-pause");//alteração da funcionalidade play/pause
const audio = document.getElementById("audio-capitulo");
const botaoProximo = document.getElementById("proximo");
const botaoAnterior = document.getElementById("anterior");
const quantidadeCapitulos = 10;
let tocando = false;
let capitulo = 1;
const nomeCapitulo = document.getElementById("capitulo");

function tocarFaixa(){ //Função tocarFaixa
    botaoPlayPause.classList.remove("bi-play-circle");
    botaoPlayPause.classList.add("bi-pause-circle");
    audio.play(); //Variável audio; play = início da reprodução de áudio
    tocando = true;
}
function pausarFaixa(){
    botaoPlayPause.classList.remove("bi-pause-circle");
    botaoPlayPause.classList.add("bi-play-circle");
    audio.pause();
    tocando = false;
}
function tocarPausarFaixa(){
    if (tocando === true){
        pausarFaixa();
    } else {
        tocarFaixa();
    }
}
function proximoCapitulo (){
    if (capitulo < quantidadeCapitulos){
        capitulo += 1;
    } else {
        capitulo = 1;
    }
    audio.src = "books/dom-casmurro/" + capitulo + ".mp3";
    nomeCapitulo.innerText = "Capítulo " + capitulo;
    tocarFaixa();
}
function anteriorCapitulo (){
    if (capitulo === 1){
        capitulo = quantidadeCapitulos;
    } else {
        capitulo -= 1;
    }
    audio.src = "books/dom-casmurro/" + capitulo + ".mp3";
    nomeCapitulo.innerText = "Capítulo " + capitulo;
    tocarFaixa();
}
botaoPlayPause.addEventListener("click", tocarPausarFaixa);
botaoProximo.addEventListener("click",proximoCapitulo);
botaoAnterior.addEventListener("click", anteriorCapitulo);
audio.addEventListener("ended", proximoCapitulo);
