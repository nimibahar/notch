"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const wikipedia_1 = require("../controllers/wikipedia");
const user_1 = require("../controllers/user");
const router = express_1.Router();
router.get("/introduction/:articleName", wikipedia_1.getWikipediaArticle);
router.post("/user", user_1.signUp);
exports.default = router;
