const express = require('express')
const router = express.Router()
router.use('/signin', require(__dirname+"/signin"))
router.get('/', function(req, res){
    res.render('index')
})
router.use('/chat', require(__dirname+'/chat'))
module.exports = router