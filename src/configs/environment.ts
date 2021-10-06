import { config as DotenvConfig } from 'dotenv'
import path from 'path'

if (process.env.NODE_ENV === undefined) {
  DotenvConfig({ path: path.join(__dirname, '../../.env') })
}

export const configs = {
  APP_PORT: process.env.PORT,
  APP_MODE: process.env.NODE_ENV,
  API_KEY: process.env.API_KEY || '',
  API_SECRET: process.env.API_SECRET || ''
}
