// Import (require) connection.js into orm.js
//In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers. 
//These are the methods you will need to use in order to retrieve and store data in your database.

var connection = require("../config/connection.js");

var orm = {

	selectAll: function(){

			var queryString = ;
			connection.query( function(){

		});
	},

	insertOne: function(){
			var queryString = ;
			connection.query( function(){

		});
	},

	updateOne: function(){
			var queryString = ;
			connection.query( function(){

		});
	}
};

module.exports = orm;