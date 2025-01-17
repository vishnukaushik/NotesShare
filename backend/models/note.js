const mongoose = require("mongoose");

const noteSchema = mongoose.Schema({
	userId: {
		type: mongoose.SchemaTypes.ObjectId,
		required: true,
		ref: "user",
	},
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
	},
});

module.exports = mongoose.model("note", noteSchema);
