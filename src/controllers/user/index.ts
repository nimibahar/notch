import { Response, Request } from "express"
import { User } from "../../db/index"

const signUp = async (req: Request, res: Response): Promise<void> => {
  try {
    const { userName, language }  = req.body;
    if (!userName || typeof userName !== 'string' || !language ||  typeof language !== 'string') {
      res
        .status(400)
        .json({
          errorMessage: 'Please provide a userName and language'
        })
    }
    const user = new User()
    const result = await user.save(userName, language)
    res.status(201).json(result);
    
  } catch (error) {
    throw error
  }
}

export { signUp }