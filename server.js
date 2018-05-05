// Required Modules
const express = require('express')
const app = express()

const user = require('./user')

// Support JSON-encoded parameters
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello, world')
})

app.post('/createUser', (req, res) => {
    let status
    user.createUser(req.body)
	.then(() => {
	    res.json({'status': 'success'})
	})
	.catch( (e) => {
	    console.log(e.message)
	    res.json({'status': e.message})
	})
})

app.listen(3000, ()=> console.log('Listening on port 3000'))
