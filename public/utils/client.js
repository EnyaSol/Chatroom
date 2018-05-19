
$(document).ready( function(){
    let socket = io.connect('https://my-chatroom-backend-es.herokuapp.com:5000');
    let textbox = $('#my-message');

    console.log("Checking if sockets are connected!")

    socket.on('connect', function(){
        socket.send('User has connected! ', io.connected);
    });

    socket.on('message', function(msg){
        $("#messages").append('<li>' + msg + '<li>');
        console.log('Received message');
    });

    $('#send-button').on('click', function(){

        socket.send(textbox.val());
        textbox.val('');
    })
});