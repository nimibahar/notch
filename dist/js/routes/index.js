"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const wikipedia_1 = require("../controllers/wikipedia");
const router = express_1.Router();
router.get("/introduction/:articleName", wikipedia_1.getWikipediaArticle);
exports.default = router;
