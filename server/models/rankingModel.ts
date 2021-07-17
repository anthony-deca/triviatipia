import mongoose from 'mongoose';

const rankingSchema = new mongoose.Schema({
	category: [
		{
			username: String,
			email: String,
			rank: Number,
		},
	],
});

export default mongoose.model('Ranks', rankingSchema);
