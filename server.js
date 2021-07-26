// Require packages
const express = require('express')
const app = express()

// Set .env file to use
const { NODE_ENV } = process.env
const dotEnvPath = NODE_ENV === 'production' ? '.env' : NODE_ENV && `.env.${NODE_ENV}`
require('dotenv').config({
  path: dotEnvPath
})

// Set port
const PORT = process.env.PORT || 3000

// Start server
app.listen(PORT, () => {
  console.log(`App listening on port: ${PORT}`)
})
