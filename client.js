$(document).ready( function(){
    var socket = io.connect('http://127.0.0.1:5000');

    socket.on('connect', function(){
        socket.send('User has connect!');
    })

    socket.on('message', function(msg){
        $("#messages").append('<li>' + msg + '<li>');
        console.log('Received message')
    })

    $('#send-button').on('click', function(){
        socket.send($('#my-message').val())
        $('#my-message').val('')
    })
})