const express = require('express')
const router = express.Router()
const photos = require('./models/photoModel.js')


//Routes:

// new photo
router.get('/new', (req, res) => {
	res.render('/new.ejs')
})

// to index
router.post('/', (req, res) => {
	Photo.create(req.body, (error, uploadedPhoto) => {
		res.redirect('/photos')
	})
})

router.get('/', (req, res) => {
	Photo.find({}, (error, photoList) => {
		res.render('index.ejs', {
			photos: photoList
		})
	})
})
router.get('/', (req, res) => {
	Photo.findById(req.params.id, (err, uploadedPhoto) => {
		res.render('show.ejs', {
			photo: uploadedPhoto
		})
	})
})


// delete photo
router.delete('/:id', (req, res) => {
	Photo.findByIdAndRemove(req.params.id, (err, uploadedPhoto) => {
		res.redirect('/photos')
	})
})

module.exports = router




