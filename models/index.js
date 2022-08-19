const { db } = require('../db')
const { Movie, seedMovies } = require('./Movie')
const { User, seedUsers } = require('./User')

Movie.belongsToMany(User, {through: 'Watched'})
User.belongsToMany(Movie, {through: 'Watched'})


//adding fake data tp db is often called 'seeding' the db
async function seed () {
   
    //deletes all tables and returns them empty
    await db.sync({ force: true })

    //create some fake data
    for (let movie of seedMovies) {
        await Movie.create(movie)
    }
    for (let user of seedUsers) {
        await User.create(user)
    }
}

module.exports = { seed, User, Movie}