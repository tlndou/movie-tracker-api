const { db, DataTypes }= require('../db')

const Movie = db.define('Movie', {
    title: {
        type: DataTypes.STRING
    },
    genre: {
        type: DataTypes.STRING
    },
    runtime: {
        type: DataTypes.STRING
    },
    averageRating: {
        type: DataTypes.REAL
    }
})

const seedMovies = [
    {
        title: "Mean Girls",
        genre: "Comedy",
        runtime: "121min",
        averageRating: 4.8
    },
    {
        title: "Black Panther",
        genre: "Action",
        runtime: "135min",
        averageRating: 5
    }
]

module.exports = { seedMovies, Movie }