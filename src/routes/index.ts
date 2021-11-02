import { Router } from "express"
import { getWikipediaArticle } from "../controllers/wikipedia"
import { signUp } from "../controllers/user"


const router: Router = Router()

router.get("/introduction/:articleName", getWikipediaArticle);

router.post("/user", signUp);

export default router