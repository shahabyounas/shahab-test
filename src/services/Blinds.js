import axios from 'axios';
import { toRaw } from 'vue';
export class BlindsService {
  static users = [];

  static async getListOfBlinds() {
    const dataUrl =
      'https://www.interiorgoodsdirect.com/interview/api/products?key=6HJx2R8st$%Q';
    const resp = await axios.get(dataUrl);

    const data = resp.data;

    return data;
  }
}
