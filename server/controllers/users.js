"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var userModel_1 = __importDefault(require("../models/userModel"));
var bcryptjs_1 = __importDefault(require("bcryptjs"));
var url_1 = __importDefault(require("url"));
var router = express_1.default.Router();
router.post('/login', function (req, res) {
    var _a = req.body, email = _a.email, password = _a.password;
    var errors = [];
    var passwordError = '';
    var fieldError = '';
    var emailError = '';
    if (!email || !password) {
        fieldError = 'Please fill in all fields';
        errors.push({ msg: fieldError });
    }
    if (errors.length > 0) {
        res.redirect(url_1.default.format({
            pathname: '/login',
            query: {
                fieldError: fieldError,
                emailError: emailError,
                passwordError: passwordError,
            },
        }));
    }
    else {
        userModel_1.default.findOne({ email: email }).then(function (user) { return __awaiter(void 0, void 0, void 0, function () {
            var match;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!user) return [3 /*break*/, 1];
                        emailError = 'no account found, nonsense!';
                        res.redirect(url_1.default.format({
                            pathname: '/login',
                            query: {
                                fieldError: fieldError,
                                emailError: emailError,
                                passwordError: passwordError,
                            },
                        }));
                        return [3 /*break*/, 3];
                    case 1:
                        console.log('mad ooo');
                        return [4 /*yield*/, bcryptjs_1.default.compare(password, user.password)];
                    case 2:
                        match = _a.sent();
                        if (!match) {
                            passwordError = 'password does not match';
                            return [2 /*return*/, res.redirect(url_1.default.format({
                                    pathname: '/login',
                                    query: {
                                        fieldError: fieldError,
                                        emailError: emailError,
                                        passwordError: passwordError,
                                    },
                                }))];
                        }
                        return [2 /*return*/, res.redirect('/users/welcome')];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    }
});
router.post('/register', function (req, res) {
    var _a = req.body, username = _a.username, email = _a.email, password = _a.password, password2 = _a.password2;
    var errors = [];
    var passwordError;
    var fieldError;
    var emailError;
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
            fieldError: fieldError,
            passwordError: passwordError,
            emailError: emailError,
            username: username,
            email: email,
            password: password,
            password2: password2,
        });
    }
    else {
        userModel_1.default.findOne({ email: email }).then(function (user) {
            if (user) {
                emailError = 'email is already registered';
                res.render('error-signin-signup', {
                    fieldError: fieldError,
                    passwordError: passwordError,
                    emailError: emailError,
                    username: username,
                    email: email,
                    password: password,
                    password2: password2,
                });
            }
            else {
                var newUser_1 = new userModel_1.default({
                    username: req.body.username,
                    email: req.body.email,
                    password: req.body.password,
                });
                bcryptjs_1.default.genSalt(10, function (err, salt) {
                    return bcryptjs_1.default.hash(newUser_1.password, salt, function (err, hash) {
                        if (err)
                            throw err;
                        newUser_1.password = hash;
                        newUser_1
                            .save()
                            .then(function (result) {
                            res.redirect('/users/welcome');
                        })
                            .catch(function (err) {
                            if (err)
                                res.send('error');
                        });
                    });
                });
            }
        });
    }
});
router.get('/logout', function (req, res) {
    var fieldError = 'You have logged out';
    var passwordError = '';
    var emailError = '';
    res.render('login', {
        fieldError: fieldError,
        passwordError: passwordError,
        emailError: emailError,
    });
});
// route path for welcome page
router.get('/welcome', function (req, res) {
    res.render('welcome-page');
});
// route path for solo-mode page
router.get('/solo', function (req, res) {
    res.render('solo');
});
// route path for group-mode page
router.get('/group', function (req, res) {
    res.render('group-mode', { name: "Toni" });
});
router.get('/launch', function (req, res) {
    res.render('launch-mode');
});
exports.default = router;
