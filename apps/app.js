const express = require('express')
const app = express()
const router = require('./routers/index')
const bodyParser = require('body-parser')
const session = require('express-session')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(session({
    'secret': '343ji43j4n3jn4jk3n'
}))
app.use(router)
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views/html')
app.use('static', express.static(__dirname + '/views'))
app.listen(5000, function () {
    console.log('listened')
})