const database = require('./database')
const nanoid = require('nanoid')

let createSociety = (opts) => {

    return new Promise ((resolve, reject) => {
	let conditions = database.newConditionBuilder()
	    .expectAttributeAbsent('name')

	// generate a unique id
	let id = nanoid()

	database.putItem('societies', {
	    id: id,
	    name: opts.name,
	    description: opts.description,
	    categories: opts.categories,
	    links: opts.links,
	    contact: [opts.userId],
	    admins: [opts.userId],
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

module.exports.createSociety = createSociety
