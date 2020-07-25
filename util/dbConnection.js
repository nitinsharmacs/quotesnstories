const knex = require('knex');

let db;

const dbConnection = (cb) => {
 db = knex({
	client:'mysql',
	connection:{
		host:process.env.host,
		user:process.env.user,
		password:process.env.password,
		database:process.env.database
	}
});
return db;
}

module.exports = dbConnection;