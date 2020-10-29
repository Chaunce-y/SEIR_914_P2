const express = require('express')
// const port = 3000
const mongoose = require('mongoose')
const methodOverride  = require('method-override')
const session = require('express-session') // only needed IF you are using sessions
const bodyParser = require('body-parser')
const app = express()
require('dotenv').config()

const PORT = process.env.PORT


//-----------------
//Database
//________________

const mongodbURI = process.env.MONGODBURI

//Connect to Mongo
mongoose.connect(mongodbURI, { useNewUrlParser: true, useUnifiedTopology: true}).then(() => console.log('Database Connected Successfully', mongodbURI)).catch(err => console.log())

// include the model

const photos = require('./models/photos.js')


// Middleware 
app.use((req, res, next) => {
	console.log('I run for all routes');
	next();
});

//Routes:
// to index
app.get('/photos', (req, res) => {
	res.render('index.ejs',
		{
		photoList: photos
		// res.send(photos)
		}
	)
})

// show photo
app.get('/photos/:indexOfPhotosArray', (req, res) => {
	const photo = photos[req.params.indexOfPhotosArray]

	res.render('show.ejs',
		{ 
			photo: photos[req.params.indexOfPhotosArray]
		}
	)
})
	
// new photo
app.get('/photos/new', (req, res) => {
	res.render('/new.ejs', {photo})
})

// post photo
app.post('/photos', (req, res) => {
	console.log('Create route accessed!')
    console.log('Req.body is: ', req.body)
	console.log(req.body)
	res.send(req.body)

})









app.listen(PORT, () => {
	console.log(`listening on port ${PORT}`)
})
