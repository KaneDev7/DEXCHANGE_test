const express = require('express')
const cors = require('cors');
const { ValidationError } = require('express-validation');
const connectDB = require('./configs/dbConn');

const app = express()
require('dotenv').config()

const port = process.env.PORT || 3001;

// middlewares 
app.use(cors())
app.use(express.json())

// Validations
app.use(function(err, req, res, next) {
    if (err instanceof ValidationError) {
      return res.status(err.statusCode).json(err)
    }
    return res.status(500).json(err)
  })

// routes
app.use('/', require('./routes/users.route'));

// not found route
app.use((req, res) => { res.status(404).json({ message: 'Not found' }); });

connectDB()

app.listen(port, () => {
    console.log(`server run in port ${port}`)
})
