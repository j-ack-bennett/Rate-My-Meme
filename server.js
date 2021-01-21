const express = require('express')
const hbs = require('express-handlebars')

const memeRoutes = require('./routes/memes')
const server = express()


// Middleware

server.engine('hbs', hbs({extname: 'hbs'}))
server.set('view engine', 'hbs')
server.use(express.static('public'))
server.use(express.urlencoded({extended: true}))

// Routes

server.use('/', memeRoutes)

module.exports = server
