const express = require('express')
const router = express.Router()
const Photo = require('../models/photoModel.js')


//Routes:

// new photo
router.get('/new', (req, res) => {
	res.render('new.ejs')
})

// to index
router.post('/', (req, res) => {
	Photo.create(req.body, (error, photoList) => {
		res.redirect('/photos')
	})
})

router.get('/', (req, res) => {
	Photo.find({}, (error, photoList) => {
		res.render('index.ejs', {
			photoList: photoList
		})
	})
})

router.get('/:id/show', (req, res) => {
	Photo.findById(req.params.id, (error, photoList) => {
		res.render('show.ejs', {
			photoList: photoList
		})
	})
})

router.get('/:id/edit', (req,res) => {
	Photo.findById(req.params.id, (error, photoList) => {
		res.render('edit.ejs', {
			photoList: photoList
		})
	})
})

router.put('/:id', (req,res) => {
	const updatedPhoto = {
		user: req.body.user,
		url: req.body.url,
	}
	Photo.findByIdAndUpdate(req.params.id, updatedPhoto, (error, photoList) => {
	})
	res.redirect('/photos')
})

// delete photo
router.delete('/:id', (req, res) => {
	Photo.findByIdAndRemove(req.params.id, (err, uploadedPhoto) => {
		res.redirect('/photos')
	})
})

module.exports = router




