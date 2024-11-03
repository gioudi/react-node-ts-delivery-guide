import express from 'express';
import { corsMiddleware } from './middleware/cors';
import './config/environment.config';
import authRoutes from './modules/auth/auth.routes';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const cors = require('cors');
const app = express();

app.use(express.json());

app.use(cors());

// CORS middleware
app.use(corsMiddleware);

//Public route

app.use('/api/auth', authRoutes);

// Private Routes

export default app;
