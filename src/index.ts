import { createServer } from 'http'
import app from './server'

const port = 9000

createServer(app).listen(port, () => {
  console.log(`🚀 Server is listening on port: ${port} 🚀`)
})
