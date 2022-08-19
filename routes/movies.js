const express = require("express")
const router = express.Router()
const { User, Movie } = require('../models')

router.get('/', async (req, res) => {
    const allMovies = await Movie.findAll()
    res.send(allMovies)
})

router.get('/:id', async (req, res) => {
    const oneMovie = await Movie.findByPk(req.params.id)
    res.send(oneMovie)
})


router.delete('/:id', async (req, res) => {
    const oneMovie = await Movie.findByPk(req.params.id)
    res.send(oneMovie)
}) //fix it doesnt work

module.exports = router


