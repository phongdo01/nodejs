module.exports = function (io) {
    io.sockets.on('connection', function (socket) {
        console.log('a user connected');
        socket.on("getUserName", function(data){
            socket.broadcast.emit("newUser", data.userName)
        })
    });
}