import { Router } from 'express'
import OtpController from '../controllers/otp'

class APIRoutes {
  public router: Router
  private otpController = new OtpController()

  constructor() {
    this.router = Router()
    this.routes()
  }

  private routes() {
    this.router.post('/register', this.otpController.registerOTP)
    this.router.post('/verify', this.otpController.verifyOTP)
    this.router.post('/cancel', this.otpController.cancelOTP)
  }
}

export default APIRoutes
