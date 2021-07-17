"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const connectDB = async () => {
    try {
        const db = await mongoose_1.default.connect('mongodb+srv://caleb:caleb@cluster1.rx7lq.mongodb.net/storybooks?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        });
        console.log(`MongoDB Connected: ${db.connection.host}`);
    }
    catch (err) {
        console.error(err);
        throw Error;
    }
};
exports.default = connectDB;
