var socket = io.connect('http://localhost:3000');
socket.on('khanh', function(res) {
    console.log('hi');
});