"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
var list = [
    { name: 'username1', rank: 5 },
    { name: 'username2', rank: 3 },
    { name: 'username3', rank: 4 },
    { name: 'username4', rank: 1 },
    { name: 'username5', rank: 2 },
    { name: 'username6', rank: 6 },
    { name: 'username7', rank: 7 },
];
router.get('/', function (req, res) {
    var category = '';
    var list = [];
    res.render('rankings', {
        list: list,
        category: category,
    });
});
router.get('/books', function (req, res) {
    var category = 'Books';
    // const ranks = await Ranks.find({
    // 	category: category,
    // });
    res.render('rankings', {
        list: list,
        category: category,
    });
});
router.get('/film', function (req, res) {
    var category = 'Film';
    // const ranks = await Ranks.find({
    // 	category: category,
    // });
    res.render('rankings', {
        list: list,
        category: category,
    });
});
router.get('/music', function (req, res) {
    var category = 'Music';
    // const ranks = await Ranks.find({
    // 	category: category,
    // });
    res.render('rankings', {
        list: list,
        category: category,
    });
});
router.get('/sports', function (req, res) {
    var category = 'Sports';
    // const ranks = await Ranks.find({
    // 	category: category,
    // });
    res.render('rankings', {
        list: list,
        category: category,
    });
});
router.get('/history', function (req, res) {
    var category = 'History';
    // const ranks = await Ranks.find({
    // 	category: category,
    // });
    res.render('rankings', {
        list: list,
        category: category,
    });
});
router.get('/nature', function (req, res) {
    var category = 'Nature';
    // const ranks = await Ranks.find({
    // 	category: category,
    // });
    res.render('rankings', {
        list: list,
        category: category,
    });
});
router.get('/computers', function (req, res) {
    var category = 'Computers';
    // const ranks = await Ranks.find({
    // 	category: category,
    // });
    res.render('rankings', {
        list: list,
        category: category,
    });
});
router.get('/math', function (req, res) {
    var category = 'Math';
    // const ranks = await Ranks.find({
    // 	category: category,
    // });
    res.render('rankings', {
        list: list,
        category: category,
    });
});
router.get('/politics', function (req, res) {
    var category = 'Politics';
    // const ranks = await Ranks.find({
    // 	category: category,
    // });
    res.render('rankings', {
        list: list,
        category: category,
    });
});
router.get('/arts', function (req, res) {
    var category = 'Arts';
    // const ranks = await Ranks.find({
    // 	category: category,
    // });
    res.render('rankings', {
        list: list,
        category: category,
    });
});
router.get('/animals', function (req, res) {
    var category = 'Animals';
    // const ranks = await Ranks.find({
    // 	category: category,
    // });
    res.render('rankings', {
        list: list,
        category: category,
    });
});
router.get('/vehicles', function (req, res) {
    var category = 'Vehicles';
    // const ranks = await Ranks.find({
    // 	category: category,
    // });
    res.render('rankings', {
        list: list,
        category: category,
    });
});
exports.default = router;
