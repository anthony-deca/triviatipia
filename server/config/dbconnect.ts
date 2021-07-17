import mongoose from 'mongoose';

const connectDB = async () => {
	try {
		const db = await mongoose.connect(
			'mongodb+srv://caleb:caleb@cluster1.rx7lq.mongodb.net/storybooks?retryWrites=true&w=majority',
			{
				useNewUrlParser: true,
				useUnifiedTopology: true,
				useFindAndModify: false,
			},
		);

		console.log(`MongoDB Connected: ${db.connection.host}`);
	} catch (err) {
		console.error(err);
		throw Error;
	}
};

export default connectDB;
