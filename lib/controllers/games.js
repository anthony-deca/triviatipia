"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const gamingModel_1 = __importDefault(require("../models/gamingModel"));
const router = express_1.default.Router();
router.post('/', (req, res) => {
    const { name, amount, type, difficulty, timed, category } = req.body;
    const newGame = new gamingModel_1.default({
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
        if (err)
            res.send('error');
    });
});
router.get('/', async (req, res) => {
    try {
        const { category } = req.query;
        let games = [];
        if (category) {
            games = await gamingModel_1.default.find({ category });
        }
        res.render('games', { games });
    }
    catch (err) {
        console.log(err);
    }
});
exports.default = router;
