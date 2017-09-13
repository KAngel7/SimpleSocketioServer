var express = require('express');
var app = express();
app.use(express.static('public'));
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

io.on('connection', (socket) => {
    setInterval(()=>{
        socket.emit('khanh');
    }, 100);
    socket.on('new_message', (data) => { 
        try {
            data = JSON.parse(data);
            data.lastModifiedDate = (new Date()).toISOString();
            io.sockets.emit('new_message', JSON.stringify(data));
        } catch (e) {
            console.log(e);
        }
    });
    socket.on('disconnect', function () {
        console.log('disconnected');
    });

});

http.listen(port, function () {
    console.log('listening on *: ' + port);
});