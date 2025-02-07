import { ContactFormData } from '@/types/api/contactApi';
import axios from 'axios';

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

interface Web3FormsResponse {
  success: boolean;
  message: string;
}

export class ContactService {
  static async submitContactForm(data: ContactFormData): Promise<Web3FormsResponse> {
    const apiKey = process.env.WEB3FORMS_API_KEY;
    
    if (!apiKey) {
      throw new Error('WEB3FORMS_API_KEY is not defined in environment variables');
    }

    try {
      const response = await axios.post<Web3FormsResponse>(
        WEB3FORMS_ENDPOINT,
        {
          ...data,
          access_key: apiKey,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        }
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data?.message || 'Failed to send message');
      }
      throw new Error('An unexpected error occurred');
    }
  }
}