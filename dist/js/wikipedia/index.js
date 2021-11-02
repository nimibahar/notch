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
const getWikipediaArticle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const { articleName }  = req.params
        // add validation to article name
        // if validation fails - return 400 with a proper msg
        res.status(200).json({ articleName: "smg" });
    }
    catch (error) {
        throw error;
    }
});
exports.getWikipediaArticle = getWikipediaArticle;
