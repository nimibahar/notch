"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = __importDefault(require("./base"));
class WikipediaApi extends base_1.default {
    constructor(articleName, languageHeader) {
        super(`https://${languageHeader}.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&explaintext=1&titles=${articleName}`);
        this.getArticle = () => this.instance.get('');
    }
}
exports.default = WikipediaApi;
