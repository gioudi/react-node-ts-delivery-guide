import { Router } from 'express';
import { referralController } from './referral.controller';

const router = Router();

router.post('/', referralController.handleGetReferrals.bind(referralController));

export default router;
