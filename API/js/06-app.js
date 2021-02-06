const salida = document.querySelector('#salida');
const microfono = document.querySelector('#microfono');

microfono.addEventListener('click', ejecutarSpeechAPI);

function ejecutarSpeechAPI() {
    const SpeechRecognition = webkitSpeechRecongnition;
    const recongnition = new SpeechRecognition();
    recongnition.start();
    recongnition.onstart = function() {
        salida.classList.add('mostrar');
        salida.classContent = 'Escuchando';
    };
    recongnition.onspeechend = function(){
        salida.textContent = 'se dejo grabrar';
        recongnition.stop();
    }
}