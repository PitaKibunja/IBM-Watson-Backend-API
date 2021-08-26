// 1:install express
const express = require('express')
const app = express()
require('dotenv').config()

// 2: allow parsing
app.use(express.json())
// 2:Create a server and run it.
