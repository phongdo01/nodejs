const connection  = require('../config/connection').connection

const insertUser = function(data) {
    return new Promise(function(resolve, reject){
        connection.connect(function(){
            var sql = "INSERT INTO account (username, password) VALUES ?";
            const value = [[data.username, data.password]]
            connection.query(sql, [value], function (err, result) {
                if (err) reject(err);
                console.log('record effect: ', result.affectedRows)
                resolve(result)
            })
        })
    })
}

module.exports = {
    insertUser: insertUser
}