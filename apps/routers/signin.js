const app = require('express')
const router = app.Router()
const con = require('../config/connection').connection
const userController = require('../controllers/user')
router.get('/', function (req, res) {
    res.render('signin', {message:{}})
})
router.post('/', function (req, res) {
    const data = req.body
    console.log('data: ', data.username.length)
    if (data.username.length == 0) {
        res.render('signin', { message: { err: "User name can not be null" } })
    }
    else
        // con.connect(function (err) {
        //     if (err) throw err
        //     res.json(data)
        //     // var sql = "INSERT INTO account (username, password) VALUES ?";
        //     // const value = [[data.username, data.password]]
        //     // con.query(sql, [value], function (err, result) {
        //     //     if (err) throw err;
        //     //     console.log('record effect: ', result.affectedRows)
        //     // })
        //     const v = userController.insertUser(data)
        //     v.then(rs=>{
        //         console.log(rs)
        //     }).catch(err=>{
        //         throw err
        //     })
        // })
        {
            const v = userController.insertUser(data)
            v.then(rs=>{
                console.log('liu tiu')
                res.render('signin', {message:{}})
            }).catch(err=>{throw err})
        }
})
module.exports = router