import axios from 'axios';
import { Terminal } from './terminal.types';

export class TerminalService {
  async handleGetTerminals(): Promise<any | null> {
    try {
      const response = await axios.get<Terminal>(`${process.env.COORDINADORA_API_BASE_URL_TERMINAL}`);
      if (response?.data) {
        const { data } = response;
        const author = { name: 'Sergio', lastname: 'Penagos' };
        return { data, author };
      }
    } catch (error) {
      console.error(error);
      return error;
    }

    return null;
  }
}
