var socket = io();

window.sessionStorage.nickname = prompt("Elige tu nombre de Usuario: ");
$('#usuario').text(window.sessionStorage.nickname);
window.sessionStorage.color = prompt("Elige el color de tu nombre:  \nSoportamos: azul, verde, rojo, morado, rosado, anaranjado, marron.");

$("form").submit(function () {
  socket.emit("chat message", "<span class=" + window.sessionStorage.color + ">" + window.sessionStorage.nickname + "</span>" + ": " + $('#m').val());
  $('#m').val("");
  return false;
});

socket.on('chat message', function(msg){
   $('#messages').append($('<li>').html( msg));
   var elem = document.getElementById('content');
   elem.scrollTop = elem.scrollHeight;
 });
