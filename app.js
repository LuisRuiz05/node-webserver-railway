const express = require('express')
const hbs = require('hbs')
require('dotenv').config()

const app = express()
const port = process.env.PORT

// Handlebars
app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials')

// Serve static content
app.use( express.static( 'public' ) )

app.get('/', function(req, res) {
    res.render('home', {
        name: 'Luis Ruiz',
        title: 'Node Course'
    })
})

app.get('/generic', function(req, res) {
    res.render('generic', {
        name: 'Luis Ruiz',
        title: 'Node Course'
    })
})

app.get('/elements', function(req, res) {
    res.render('elements', {
        name: 'Luis Ruiz',
        title: 'Node Course'
    })
})

app.get('*', function(req, res) {
    res.sendFile(__dirname + '/public/404.html')
})

app.listen(port, () => {
    console.log(`Example app listening to localhost:${port}`)
})