"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var gamingSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
    },
    amount: {
        type: String,
    },
    difficulty: {
        type: String,
    },
    type: {
        type: String,
    },
    category: {
        type: String,
    },
    participants: {
        type: Number,
    },
    timed: {
        type: Boolean,
    },
});
exports.default = mongoose_1.default.model('Games', gamingSchema);
