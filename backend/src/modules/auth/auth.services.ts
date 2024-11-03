import jwt from 'jsonwebtoken';
import apiClient from '../../api';

export class AuthService {
  async login(email: string, password: string): Promise<any | null> {
    try {
      const isEmail = email.includes('@');
      if (isEmail) {
        try {
          const response = await apiClient.post('/login', { email, password });
          console.log(response);
          if (response?.data) {
            const token = jwt.sign({ userId: 1 }, process.env.JWT_SECRET || 'default_secret', { expiresIn: '24h' });
            const author = { name: 'Sergio', lastname: 'Penagos' };
            return { token, author };
          }
        } catch (error) {
          console.error(error);
          return error;
        }
      }
      return null;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}
