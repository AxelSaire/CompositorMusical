function playSonido (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}
// function playSonidoClap(){
//     document.querySelector("#sonido_tecla_clap").play();
// }
// document.querySelector('.tecla_pom').onclick = playSonidoPom;
// document.querySelector('.tecla_clap').onclick = playSonidoClap;

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;
while(contador < 9){
    tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    //console.log(instrumento);

    const idAudio = `#sonido_${instrumento}`;
    console.log(idAudio);
    tecla.onclick = function(){
        playSonido(idAudio);
    };
    contador = contador + 1;
    //console.log('vuelta '+ contador);
}