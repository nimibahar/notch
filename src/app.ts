import express, { Express } from "express"
import cors from "cors"
import { json, urlencoded } from 'body-parser';
import routes from "./routes"

const app: Express = express()

const PORT: string | number = process.env.PORT || 3000

app.use(cors())
app.use(urlencoded({ extended: true }));
app.use(json({ type: ['application/json', 'text/*', 'json'] }));
app.use(routes)


app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
)
  

