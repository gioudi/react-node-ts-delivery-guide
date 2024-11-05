import axios from 'axios';
import { Guides } from './referral.types';

export class ReferralService {
  async handleGetReferrals(guides: Guides): Promise<any | null> {
    try {
      const payload = {"guias": guides};
      const response = await axios.post<any>(`${process.env.COORDINADORA_API_BASE_URL_REFERRAL}`,payload);
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
