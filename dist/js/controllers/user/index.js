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
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../db/index");
const signUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userName, language } = req.body;
        if (!userName || typeof userName !== 'string' || !language || typeof language !== 'string') {
            res
                .status(400)
                .json({
                errorMessage: 'Please provide a userName and language'
            });
        }
        const user = new index_1.User();
        const result = yield user.save(userName, language);
        res.status(201).json(result);
    }
    catch (error) {
        throw error;
    }
});
exports.signUp = signUp;
