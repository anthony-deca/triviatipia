"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var rankingSchema = new mongoose_1.default.Schema({
    category: [
        {
            username: String,
            email: String,
            rank: Number,
        },
    ],
});
exports.default = mongoose_1.default.model('Ranks', rankingSchema);
