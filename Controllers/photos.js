const express = require('express')
const mongoose = require('mongoose')
const methodOverride  = require('method-override')
// const session = require('express-session') // only needed IF you are using sessions
const bodyParser = require('body-parser')
require('dotenv').config()

const app = express()


const PORT = process.env.PORT


//-----------------
//Database
//________________

const mongodbURI = process.env.MONGODBURI

//Connect to Mongo
mongoose.connect(mongodbURI, { useNewUrlParser: true, useUnifiedTopology: true}).then(() => console.log('Database Connected Successfully', mongodbURI)).catch(err => console.log())

// include the model
const photos = require('./models/photos.js')
console.log(photos)

// Middleware 
Router.use((req, res, next) => {
	console.log('I run for all routes');
	next();
});

//Routes:
// to index
Router.get('/photos/', (req, res) => {
	res.render('/index.ejs', {
		photoList: photos
	})
})

// show photo
Router.get('/photos/:indexOfPhotos', (req, res) => {
	res.render('show.ejs', {
		photo: photos[req.params.indexOfPhotos],
	})
})
	
// new photo
Router.get('/photos/new', (req, res) => {
	res.render('/new.ejs', {photo})
})

// post photo
Router.post('/photos', (req, res) => {
	console.log('Create route accessed!')
    console.log('Req.body is: ', req.body)
	console.log(req.body)
	res.send(req.body)

})









Router.listen(PORT, () => {
	console.log(`listening on port ${PORT}`)
})
