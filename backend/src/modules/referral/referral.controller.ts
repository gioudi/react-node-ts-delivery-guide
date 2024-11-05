import { Request, Response } from 'express';
import { ReferralService } from './referral.services';

class ReferralController {
  constructor(private referralService: ReferralService) {}

  async handleGetReferrals(req: Request, res: Response) {
    try {

      const { guias } = req.body;
      const { data, author } = await this.referralService.handleGetReferrals(guias);
      if (data) {
        res.status(200).json({ data, author });
      } else {
        res.status(401).json({ error: 'Error fetching referrals' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error fetching referrals', error: error });
    }
  }
}

export const referralController = new ReferralController(new ReferralService());
