import axios from "axios";
import { Guide } from "./guide.types";

export class GuideService {
  async handleGetGuideById(id:string): Promise<any | null> {
    try {
      if (id) {
        try {
          const response = await axios.get<Guide>(`${process.env.COORDINADORA_API_BASE_URL_GUIDE}${id}`);
          console.log(response);
          if (response?.data) {
            const {data} = response;
            const author = { name: 'Sergio', lastname: 'Penagos' };
            return { data, author };
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
