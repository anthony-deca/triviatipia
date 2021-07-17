import express from 'express';
const context = {
	fieldError: '',
	passwordError: '',
	emailError: '',
};
const router = express.Router();

router.get('/login', (req, res) => {
	const { fieldError, passwordError, emailError } = req.query;
	res.render('login', { fieldError, passwordError, emailError });
});

router.get('/signup', (req, res) => {
	res.render('signin-signup');
});

export default router;
