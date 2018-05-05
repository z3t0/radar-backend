const database = require('./database')

let user = (opts) => {

    return new Promise ((resolve, reject) => {
	// Do not override existing users
	let conditions = database.newConditionBuilder()
	    .expectAttributeAbsent('email')

	database.putItem('users', {
	    firstName: opts.firstName,
	    lastName: opts.lastName,
	    email: opts.email
	})
	    .withCondition(conditions)
	    .execute()
	    .then( () => {
		resolve()
	    })
	    .fail( (e) => {
		reject(e)
	    })
    })
}

module.exports = user
