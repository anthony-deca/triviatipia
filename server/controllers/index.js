"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var context = {
    fieldError: '',
    passwordError: '',
    emailError: '',
};
var router = express_1.default.Router();
router.get('/login', function (req, res) {
    var _a = req.query, fieldError = _a.fieldError, passwordError = _a.passwordError, emailError = _a.emailError;
    res.render('login', { fieldError: fieldError, passwordError: passwordError, emailError: emailError });
});
router.get('/signup', function (req, res) {
    res.render('signin-signup');
});
exports.default = router;
