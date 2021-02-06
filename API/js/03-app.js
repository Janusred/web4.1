window.addEventListener('online', actualizarEstado);
window.addEventListener('offline', actualizarEstado);

function actualizarEstado(){
    if(navigator.onLine){
        console.log('Hay lana para datos bby')
    } else {
        console.log('Estimado usuario te informamos que tu amigo no tiene lana')
    }
}
