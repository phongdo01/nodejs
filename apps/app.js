const express = require('express')
const app = express()
const router = require('./routers/index')
app.use(router)
app.set('view engine', 'ejs')
app.use(express.static(__dirname+'/views'))
app.listen(5000, function(){
    console.log('listened')
})