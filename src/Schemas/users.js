const { Schema, model } = require("mongoose");

const Users = Schema({
	name: {
		type: String,
	},
	lasname: {
		type: String,
	},
	country: {
		type: String,
	},
	profesion: {
		type: String,
	},
});

module.exports = model("users", Users);
