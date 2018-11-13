import express from 'express'
import bodyParser from 'body-parser'
import * as usersEBS from './exposition/UsersEBS'
import * as actuatorEBS from './exposition/ActuatorEBS'

const app = express()
const port = process.env.PORT || 8180

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})

// Pour récupérer body des requêtes
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/users', usersEBS.getRouter())
app.use('/actuator', actuatorEBS.getRouter())
