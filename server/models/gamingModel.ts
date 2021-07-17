import mongoose from 'mongoose';

const gamingSchema = new mongoose.Schema({
	name: {
		type: String,
	},
	amount: {
		type: String,
	},
	difficulty: {
		type: String,
	},
	type: {
		type: String,
	},
	category: {
		type: String,
	},
	participants: {
		type: Number,
	},
	timed: {
		type: Boolean,
	},
});

export default mongoose.model('Games', gamingSchema);
