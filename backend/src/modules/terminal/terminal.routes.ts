import { Router } from 'express';
import { terminalController } from './terminal.controller';

const router = Router();

router.get('/', terminalController.handleGetGuideById.bind(terminalController));

export default router;
