"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const list = [
    { name: 'username1', rank: 5 },
    { name: 'username2', rank: 3 },
    { name: 'username3', rank: 4 },
    { name: 'username4', rank: 1 },
    { name: 'username5', rank: 2 },
    { name: 'username6', rank: 6 },
    { name: 'username7', rank: 7 },
];
router.get('/', (req, res) => {
    const category = '';
    const list = [];
    res.render('rankings', {
        list,
        category,
    });
});
router.get('/books', (req, res) => {
    const category = 'Books';
    // const ranks = await Ranks.find({
    // 	category: category,
    // });
    res.render('rankings', {
        list,
        category,
    });
});
router.get('/film', (req, res) => {
    const category = 'Film';
    // const ranks = await Ranks.find({
    // 	category: category,
    // });
    res.render('rankings', {
        list,
        category,
    });
});
router.get('/music', (req, res) => {
    const category = 'Music';
    // const ranks = await Ranks.find({
    // 	category: category,
    // });
    res.render('rankings', {
        list,
        category,
    });
});
router.get('/sports', (req, res) => {
    const category = 'Sports';
    // const ranks = await Ranks.find({
    // 	category: category,
    // });
    res.render('rankings', {
        list,
        category,
    });
});
router.get('/history', (req, res) => {
    const category = 'History';
    // const ranks = await Ranks.find({
    // 	category: category,
    // });
    res.render('rankings', {
        list,
        category,
    });
});
router.get('/nature', (req, res) => {
    const category = 'Nature';
    // const ranks = await Ranks.find({
    // 	category: category,
    // });
    res.render('rankings', {
        list,
        category,
    });
});
router.get('/computers', (req, res) => {
    const category = 'Computers';
    // const ranks = await Ranks.find({
    // 	category: category,
    // });
    res.render('rankings', {
        list,
        category,
    });
});
router.get('/math', (req, res) => {
    const category = 'Math';
    // const ranks = await Ranks.find({
    // 	category: category,
    // });
    res.render('rankings', {
        list,
        category,
    });
});
router.get('/politics', (req, res) => {
    const category = 'Politics';
    // const ranks = await Ranks.find({
    // 	category: category,
    // });
    res.render('rankings', {
        list,
        category,
    });
});
router.get('/arts', (req, res) => {
    const category = 'Arts';
    // const ranks = await Ranks.find({
    // 	category: category,
    // });
    res.render('rankings', {
        list,
        category,
    });
});
router.get('/animals', (req, res) => {
    const category = 'Animals';
    // const ranks = await Ranks.find({
    // 	category: category,
    // });
    res.render('rankings', {
        list,
        category,
    });
});
router.get('/vehicles', (req, res) => {
    const category = 'Vehicles';
    // const ranks = await Ranks.find({
    // 	category: category,
    // });
    res.render('rankings', {
        list,
        category,
    });
});
exports.default = router;
