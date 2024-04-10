// import modules

import express from 'express'
import { favFoods } from './data/favFoods-data.js'

// create Express app

const app = express()

// configure the app (app.set)
app.set('view engine', 'ejs')


// mount Middleware (app.use)



// mount routes
// app.set('/', function (req, res){
//   res.render('home')
// })
app.get('/', function (req, res){
  res.send('Hello Page')
})

app.get('/favFoods', function(req, res){
  res.render('favFoods/index', {
    favFoods: favFoods
  })
})

app.get('/', function (req, res) {
  res.redirect('/home')
})

// tell the app to listen on port 3000

app.listen(3000, function() {
  console.log('Listening on port 3000')
})