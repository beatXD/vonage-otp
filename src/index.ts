import { createServer } from 'http'
import { configs } from './configs/environment'
import app from './server'

const port = configs.APP_PORT

createServer(app).listen(port, () => {
  console.log(`🚀 Server is listening on port: ${port} 🚀`)
})
