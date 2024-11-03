import express from 'express';
import { corsMiddleware } from './middleware/cors';
import './config/environment.config';
import authRoutes from './modules/auth/auth.routes';
import guideRoutes from './modules/guide/guide.routes';
import terminalRoutes from './modules/terminal/terminal.routes';
import referralRoutes from './modules/referral/referral.routes';
const verifyToken = require('./middleware/verifyToken');

const cors = require('cors');
const app = express();

app.use(express.json());

app.use(cors());

// CORS middleware
app.use(corsMiddleware);

//Public route

app.use('/api/auth', authRoutes);

// Private Routes

app.use('/api/guide', verifyToken, guideRoutes);
app.use('/api/terminal', verifyToken, terminalRoutes);
app.use('/api/referral', verifyToken, referralRoutes);

export default app;
