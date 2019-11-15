module.exports = function (io) {
    io.sockets.on('connection', function (socket) {
        socket.on("getUserName", function (data) {
            socket.emit("welcome", data.userName)
            socket.broadcast.emit("newUser", data.userName)
        })
        var content1
        socket.on('sendMessege', function(content){
            socket.emit("showMessage", content)
            socket.broadcast.emit("showOtherPeople", {content: content, name: "others"})
        })
        
    });
}