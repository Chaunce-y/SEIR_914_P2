const express = require('express')
const mongoose = require('mongoose')
const Photos = require('./models/photoModel.js')
const methodOverride = require('method-override')

const app = express()

require('dotenv').config()

const PORT = process.env.PORT

app.use(express.urlencoded({ extended: true }));

app.use(methodOverride('_method'))

app.use(express.static('public'))

//-----------------
//Database
//________________

const mongodbURI = process.env.MONGODBURI

//Connect to Mongo
mongoose.connect(mongodbURI, { useNewUrlParser: true, useUnifiedTopology: true}).then(() => console.log('Database Connected Successfully', mongodbURI)).catch(err => console.log())

//controllers
//import the controller
const photosController = require('./controllers/photos.js')
app.use('/photos', photosController)


//seed route
// app.get('/seed', (req, res) => {
	// Photo.create([
		// { img: 'https://photos.google.com/u/1/share/AF1QipNrtG-AFGC1DFa9JlVU0QSyV3RIS4B8iWDIgbTJnp9zhhikYJ0qj7RbWj3jxkw8hw/photo/AF1QipNqAfgA2y_kgPLGcXxC-Go0nXM7ItU1o1bh39SR?key=Rkpib1lST0dKZGtBZzd4QjMxVkxHTkJLcm4zMk5n' },
		// { img: 'https://photos.google.com/u/1/share/AF1QipNrtG-AFGC1DFa9JlVU0QSyV3RIS4B8iWDIgbTJnp9zhhikYJ0qj7RbWj3jxkw8hw/photo/AF1QipOuaQz-FrH1BZG9O1S7vwlP22jXbrReqifVfSI6?key=Rkpib1lST0dKZGtBZzd4QjMxVkxHTkJLcm4zMk5n' },
		// { img: 'https://photos.google.com/u/1/share/AF1QipNrtG-AFGC1DFa9JlVU0QSyV3RIS4B8iWDIgbTJnp9zhhikYJ0qj7RbWj3jxkw8hw/photo/AF1QipP8OmB2P_H0Qum5KSH687sV_3MkBiC5OKKAPcWm?key=Rkpib1lST0dKZGtBZzd4QjMxVkxHTkJLcm4zMk5n' },
		// { img: 'https://photos.google.com/u/1/share/AF1QipNrtG-AFGC1DFa9JlVU0QSyV3RIS4B8iWDIgbTJnp9zhhikYJ0qj7RbWj3jxkw8hw/photo/AF1QipPaQqLDki9XxQAUJK4lVEIdrZmwD9wqAPKWnsrX?key=Rkpib1lST0dKZGtBZzd4QjMxVkxHTkJLcm4zMk5n' },
		// { img: 'https://photos.google.com/u/1/share/AF1QipNrtG-AFGC1DFa9JlVU0QSyV3RIS4B8iWDIgbTJnp9zhhikYJ0qj7RbWj3jxkw8hw/photo/AF1QipM28mDl6lc25j6kAC90-XOq5xjQQepuc-DfuXv9?key=Rkpib1lST0dKZGtBZzd4QjMxVkxHTkJLcm4zMk5n' },
		// { img: 'https://photos.google.com/u/1/share/AF1QipNrtG-AFGC1DFa9JlVU0QSyV3RIS4B8iWDIgbTJnp9zhhikYJ0qj7RbWj3jxkw8hw/photo/AF1QipNA91sgoNgoVh7OO3D1EzLi3gRbUkaE_D2yFBgW?key=Rkpib1lST0dKZGtBZzd4QjMxVkxHTkJLcm4zMk5n' },
		// { img: 'https://photos.google.com/u/1/share/AF1QipNrtG-AFGC1DFa9JlVU0QSyV3RIS4B8iWDIgbTJnp9zhhikYJ0qj7RbWj3jxkw8hw/photo/AF1QipMuRqzfoJJ9CKu7eHXYAEkUgkw8JGUlzxwrEWzy?key=Rkpib1lST0dKZGtBZzd4QjMxVkxHTkJLcm4zMk5n' },
		// { img: 'https://photos.google.com/u/1/share/AF1QipNrtG-AFGC1DFa9JlVU0QSyV3RIS4B8iWDIgbTJnp9zhhikYJ0qj7RbWj3jxkw8hw/photo/AF1QipMJiYoEirz8SWM3oYh6z0e3RErOHyxGxVvHTfiY?key=Rkpib1lST0dKZGtBZzd4QjMxVkxHTkJLcm4zMk5n' },
		// { img: 'https://photos.google.com/u/1/share/AF1QipNrtG-AFGC1DFa9JlVU0QSyV3RIS4B8iWDIgbTJnp9zhhikYJ0qj7RbWj3jxkw8hw/photo/AF1QipNTW8WTRmzrK0oH6hR-euHEcqhuMehBp5Zn3q9b?key=Rkpib1lST0dKZGtBZzd4QjMxVkxHTkJLcm4zMk5n' },
		// { img: 'https://photos.google.com/u/1/share/AF1QipNrtG-AFGC1DFa9JlVU0QSyV3RIS4B8iWDIgbTJnp9zhhikYJ0qj7RbWj3jxkw8hw/photo/AF1QipNkLsiMnSo0bRp8ad5fXPLdNlPpkmbjb15RvAnl?key=Rkpib1lST0dKZGtBZzd4QjMxVkxHTkJLcm4zMk5n' },
		// { img: 'https://photos.google.com/u/1/share/AF1QipNrtG-AFGC1DFa9JlVU0QSyV3RIS4B8iWDIgbTJnp9zhhikYJ0qj7RbWj3jxkw8hw/photo/AF1QipOacSROpI4kRlDdiMJR8RKeHpyJqd6MXcbFcLbu?key=Rkpib1lST0dKZGtBZzd4QjMxVkxHTkJLcm4zMk5n' }
	// ], (error, data) => {
		// res.redirect('/')
	// })
// })

app.listen(PORT, () => {
	console.log(`listening on port ${PORT}`)
})
