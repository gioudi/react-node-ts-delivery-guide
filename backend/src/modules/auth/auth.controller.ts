import { Request, Response } from 'express';
import { AuthService } from './auth.services';


class AuthController {
  constructor(private authService: AuthService) {}

  async handleLogin(req: Request, res: Response) {
    const { email, password } = req.body;

    try {
      const { token, author } = await this.authService.login(email, password);
      if (token) {
        res.status(200).json({ token, author });
      } else {
        res.status(401).json({ message: 'Invalid credentials', error: 'Invalid credentials' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error logging in', error: error });
    }
  }
}

export const authController = new AuthController(new AuthService());
