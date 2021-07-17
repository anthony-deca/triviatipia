"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const context = {
    fieldError: '',
    passwordError: '',
    emailError: '',
};
const router = express_1.default.Router();
router.get('/login', (req, res) => {
    const { fieldError, passwordError, emailError } = req.query;
    res.render('login', { fieldError, passwordError, emailError });
});
router.get('/signup', (req, res) => {
    res.render('signin-signup');
});
exports.default = router;
