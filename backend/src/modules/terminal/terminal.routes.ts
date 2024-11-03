import { Router } from 'express';
import { terminalController } from './terminal.controller';

const router = Router();

router.get('/', terminalController.handleGetTerminals.bind(terminalController));

export default router;
