import express from 'express';
import Games from '../models/gamingModel';
import Users from '../models/userModel';

const router = express.Router();

router.post('/', (req, res) => {
	const { name, amount, type, difficulty, timed, category } = req.body;
	const newGame = new Games({
		name,
		amount,
		type,
		difficulty,
		timed,
		participants: 1,
		category,
	});

	newGame
		.save()
		.then(async (result) => {
			res.redirect(`/games?category=${category}`);
		})
		.catch((err) => {
			if (err) res.send('error');
		});
});

router.get('/', async (req, res) => {
	try {
		const { category } = req.query;
		let games: any[] = [];
		if (category) {
			games = await Games.find({ category });
		}

		res.render('games', { games });
	} catch (err) {
		console.log(err);
	}
});

export default router;
