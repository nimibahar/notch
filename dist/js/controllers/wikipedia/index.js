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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const wikipedia_1 = __importDefault(require("../../services/httpClients/wikipedia"));
const getWikipediaArticle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { articleName } = req.params;
        const validationRegex = new RegExp("^[0-9A-Za-z_-]+$");
        if (!articleName || !validationRegex.test(articleName)) {
            res
                .status(400)
                .json({
                errorMessage: articleName
                    ? `Please provide an articleName parameter`
                    : `Please do not include characters other than letters, hyphens (-), underscores (_) and numbers`
            });
        }
        const languageHeader = req.headers["accept-language"] || 'en';
        const wikipediaApi = new wikipedia_1.default(articleName, languageHeader);
        const { query } = yield wikipediaApi.getArticle();
        const currentUnix = new Date().getTime();
        if (!query || (query === null || query === void 0 ? void 0 : query.pages["-1"])) {
            const notFoundResult = query === null || query === void 0 ? void 0 : query.pages["-1"];
            res
                .status(404)
                .json({
                scrapeDate: currentUnix,
                articleName: (notFoundResult === null || notFoundResult === void 0 ? void 0 : notFoundResult.title) || articleName,
                introduction: ""
            });
            return;
        }
        const [result] = Object.entries(query.pages);
        const data = result[1];
        res
            .status(200)
            .json({
            scrapeDate: currentUnix,
            articleName: data.title,
            introduction: data.extract,
            heaeder: req.headers
        });
    }
    catch (error) {
        throw error;
    }
});
exports.getWikipediaArticle = getWikipediaArticle;
