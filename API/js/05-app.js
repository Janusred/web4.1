document.addEventListener('visibilitychange', () => {
if(document.visibilityState === 'visible'){
console.log('Reproduciendo');
} else {
    console.log('Pausa');
}
})