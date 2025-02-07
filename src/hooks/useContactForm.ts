import { useState } from 'react';
import { ContactFormData, NotificationState } from '../types/api/contactApi';
import { ContactService } from '@/lib/api/contact';

interface UseContactFormReturn {
  submitForm: (data: ContactFormData) => Promise<{ success: boolean }>;
  loading: boolean;
  notification: NotificationState;
  resetNotification: () => void;
}

export const useContactForm = (): UseContactFormReturn => {
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState<NotificationState>({
    show: false,
    message: '',
    status: 'pending'
  });

  const resetNotification = () => {
    setNotification({ show: false, message: '', status: 'pending' });
  };

  const submitForm = async (data: ContactFormData) => {
    setLoading(true);
    setNotification({ 
      show: true, 
      message: 'Sending your message, please wait...', 
      status: 'pending' 
    });

    try {
      const response = await ContactService.submitContactForm(data);
      
      if (response.success) {
        setNotification({
          show: true,
          message: "Thanks for reaching out! I'll get back to you soon.",
          status: 'success'
        });
        return { success: true };
      } else {
        setNotification({
          show: true,
          message: 'Failed to send message. Please try again.',
          status: 'error'
        });
        return { success: false };
      }
    } catch (err) {
      setNotification({
        show: true,
        message: err instanceof Error ? err.message : 'An unexpected error occurred',
        status: 'error'
      });
      return { success: false };
    } finally {
      setLoading(false);
      // Auto-hide notification after 5 seconds
      setTimeout(resetNotification, 5000);
    }
  };

  return {
    submitForm,
    loading,
    notification,
    resetNotification
  };
};