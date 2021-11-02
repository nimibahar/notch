"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = require("body-parser");
const routes_1 = __importDefault(require("./routes"));
const app = express_1.default();
const PORT = process.env.PORT || 3000;
app.use(cors_1.default());
app.use(body_parser_1.urlencoded({ extended: true }));
app.use(body_parser_1.json({ type: ['application/json', 'text/*', 'json'] }));
app.use(routes_1.default);
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
