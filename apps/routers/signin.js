const app = require('express')
const router = app.Router()
router.get('/', function(req, res){
    res.render('/html/sigin')
})