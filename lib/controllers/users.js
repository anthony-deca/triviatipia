"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userModel_1 = __importDefault(require("../models/userModel"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const url_1 = __importDefault(require("url"));
const router = express_1.default.Router();
router.post('/login', (req, res) => {
    const { email, password } = req.body;
    const errors = [];
    let passwordError = '';
    let fieldError = '';
    let emailError = '';
    if (!email || !password) {
        fieldError = 'Please fill in all fields';
        errors.push({ msg: fieldError });
    }
    if (errors.length > 0) {
        res.redirect(url_1.default.format({
            pathname: '/login',
            query: {
                fieldError,
                emailError,
                passwordError,
            },
        }));
    }
    else {
        userModel_1.default.findOne({ email: email }).then(async (user) => {
            if (!user) {
                emailError = 'no account found, nonsense!';
                res.redirect(url_1.default.format({
                    pathname: '/login',
                    query: {
                        fieldError,
                        emailError,
                        passwordError,
                    },
                }));
            }
            else {
                console.log('mad ooo');
                const match = await bcryptjs_1.default.compare(password, user.password);
                if (!match) {
                    passwordError = 'password does not match';
                    return res.redirect(url_1.default.format({
                        pathname: '/login',
                        query: {
                            fieldError,
                            emailError,
                            passwordError,
                        },
                    }));
                }
                return res.redirect('/users/welcome');
            }
        });
    }
});
router.post('/register', (req, res) => {
    const { username, email, password, password2 } = req.body;
    const errors = [];
    let passwordError;
    let fieldError;
    let emailError;
    if (!username || !email || !password || !password2) {
        fieldError = 'Please fill in all fields';
        errors.push({ msg: fieldError });
    }
    if (password !== password2) {
        passwordError = 'Passwords do not match';
        errors.push({ msg: passwordError });
    }
    if (errors.length > 0) {
        res.render('error-signin-signup', {
            fieldError,
            passwordError,
            emailError,
            username,
            email,
            password,
            password2,
        });
    }
    else {
        userModel_1.default.findOne({ email: email }).then((user) => {
            if (user) {
                emailError = 'email is already registered';
                res.render('error-signin-signup', {
                    fieldError,
                    passwordError,
                    emailError,
                    username,
                    email,
                    password,
                    password2,
                });
            }
            else {
                const newUser = new userModel_1.default({
                    username: req.body.username,
                    email: req.body.email,
                    password: req.body.password,
                });
                bcryptjs_1.default.genSalt(10, (err, salt) => bcryptjs_1.default.hash(newUser.password, salt, (err, hash) => {
                    if (err)
                        throw err;
                    newUser.password = hash;
                    newUser
                        .save()
                        .then((result) => {
                        res.redirect('/users/welcome');
                    })
                        .catch((err) => {
                        if (err)
                            res.send('error');
                    });
                }));
            }
        });
    }
});
router.get('/logout', (req, res) => {
    const fieldError = 'You have logged out';
    const passwordError = '';
    const emailError = '';
    res.render('login', {
        fieldError,
        passwordError,
        emailError,
    });
});
// route path for welcome page
router.get('/welcome', (req, res) => {
    res.render('welcome-page');
});
// route path for solo-mode page
router.get('/solo', (req, res) => {
    res.render('solo');
});
// route path for group-mode page
router.get('/group', (req, res) => {
    res.render('group-mode', { name: "Toni" });
});
router.get('/launch', (req, res) => {
    res.render('launch-mode');
});
exports.default = router;
