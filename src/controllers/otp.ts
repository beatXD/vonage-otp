import Vonage from '@vonage/server-sdk'
import { Request, Response } from 'express'

const vonage = new Vonage({
  apiKey: 'a4475f17',
  apiSecret: 'iGGf8k3yQ6sLTWMc'
})

class OtpController {
  public async registerOTP(req: Request, res: Response): Promise<any> {
    try {
      const { number, brand } = req.body
      vonage.verify.request({ number: number, brand: brand || 'test-OTP' }, (err: any, result: any) => {
        if (err) return res.status(400).json(result)
        return res.status(200).json(result)
      })
    } catch (error) {
      return res.status(500).end(error.message)
    }
  }

  public async verifyOTP(req: Request, res: Response): Promise<any> {
    try {
      const { request_id, code } = req.body
      vonage.verify.check({ request_id, code }, (err: any, result: any) => {
        if (err) return res.status(400).json(result)
        return res.status(200).json(result)
      })
    } catch (error) {
      return res.status(500).end(error.message)
    }
  }

  public async cancelOTP(req: Request, res: Response): Promise<any> {
    try {
      const { request_id } = req.body
      vonage.verify.control({ request_id, cmd: 'cancel' }, (err: any, result: any) => {
        if (err) return res.status(400).json(result)
        return res.status(200).json(result)
      })
    } catch (error) {
      return res.status(500).end(error.message)
    }
  }
}

export default OtpController
