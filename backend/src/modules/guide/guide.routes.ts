import { Router } from 'express';
import { guideController } from './guide.controller';

const router = Router();

router.get('/:id', guideController.handleGetGuideById.bind(guideController));

export default router;
