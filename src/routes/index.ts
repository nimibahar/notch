import { Router } from "express"
import { getWikipediaArticle } from "../controllers/wikipedia"

const router: Router = Router()

router.get("/introduction/:articleName", getWikipediaArticle)

export default router