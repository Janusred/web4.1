const notibtn = document.querySelector('#notificar');

notibtn.addEventListener('click', () =>  {
Notification
.requestPermission()
.then( resultado => {
    console.log('el resultado es', resultado);
})
         });

const vernoti = document.querySelector('#verNotificacion');
vernoti.addEventListener('click',() =>  {
  if(Notification.permission === 'granted'){
const notifi = new Notification(' Un kilometro a la vez', {
  icon :'img/logo1.png',
  body : 'Janus lds Code'
});


notifi.onClick = function(){
// no sirve!!
    window.open('https://www.youtube.com/watch?v=Ga540v27NpE')
}

  }



});