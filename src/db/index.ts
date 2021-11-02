import { Request } from "express"
import { v4 as uuidv4 } from 'uuid';


import { CacheContainer } from 'node-ts-cache'
import { MemoryStorage } from 'node-ts-cache-storage-memory'

const myCache = new CacheContainer(new MemoryStorage())

class User {
    public async save(userName: string, language: string) {
      try {
        const user = {
          id: uuidv4(),
          info: {
            userName, language
          }
        }

        await myCache.setItem("users", user, {ttl: 60})
        return 'saved';
      } catch (error) {
        throw error
      }
    }
  }

  export { User }