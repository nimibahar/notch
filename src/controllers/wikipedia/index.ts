import { Response, Request } from "express"
import WikipediaApi from '../../services/httpClients/wikipedia'

const getWikipediaArticle = async (req: Request, res: Response): Promise<void> => {
  try {
    const { articleName }  = req.params

    const validationRegex = new RegExp("^[0-9A-Za-z_-]+$")
    if (!articleName || !validationRegex.test(articleName)) {
      res
        .status(400)
        .json({
          errorMessage: articleName 
            ? `Please provide an articleName parameter`
            : `Please do not include characters other than letters, hyphens (-), underscores (_) and numbers` 
        });
    }

    const wikipediaApi = new WikipediaApi(articleName);
    const { query } = await wikipediaApi.getArticle();
    const currentUnix = new Date().getTime();

    if (!query || query?.pages["-1"]) {
      const notFoundResult = query?.pages["-1"];
      res
        .status(404)
        .json({
          scrapeDate: currentUnix,
          articleName: notFoundResult?.title || articleName,
          introduction: ""
        });
      return;
    }

    const [result] = Object.entries(query.pages);
    const data = (result[1] as unknown) as { title: string, extract: string }
  
    res
      .status(200)
      .json({ 
        scrapeDate: currentUnix,
        articleName: data.title,
        introduction: data.extract 
      })
  } catch (error) {
    throw error
  }
}

export { getWikipediaArticle }