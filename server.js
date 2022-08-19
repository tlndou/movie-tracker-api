const express = require('express')
const { User, Movie, seed } = require('./models')
const { users, movies } = require('./routes')

const app = express()
/* app.get('/user', async (req, res) => {
    const allUsers = await User.findAll()
    res.send(allUsers)
}) */

app.use(express.json())
app.use("/users", users)
app.use("/movies", movies)

async function main () {
    //wait for gb to get filled with data
    await seed()
    //then start the server
    const PORT = 5000
    app.listen(PORT, () => {console.log(`Listening on ${PORT}.`) })
}

main()