require('dotenv').config()

const dynamite = require('dynamite')

const options = {
    region: process.env.AWS_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_KEY,
}

let client = new dynamite.Client(options)

module.exports = client
