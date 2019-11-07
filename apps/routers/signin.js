const app = require('express')
const router = app.Router()
const con = require('../config/connection').connection
const saySomething = require('../config/connection').saySomething
router.get('/', function(req, res){
    res.render('signin')
})
router.post('/', function(req, res){
    con.connect(function(err){
        if (err) throw err
        const data = req.body
        res.json(data)
        var sql = "INSERT INTO account (username, password) VALUES ?";
        const value = [[data.username, data.password]]
        con.query(sql, [value], function(err, result){
            if (err) throw err;
            console.log('record effect: ', result.affectedRows)
        })
    })
})
saySomething()
module.exports = router