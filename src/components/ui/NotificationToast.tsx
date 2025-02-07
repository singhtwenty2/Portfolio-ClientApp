import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { Alert, AlertTitle, AlertDescription } from './Alert';
import { NotificationState } from '@/types/api/contactApi';

interface NotificationToastProps {
  notification: NotificationState;
  onClose: () => void;
}

export const NotificationToast = ({ notification, onClose }: NotificationToastProps) => {
  const { show, message, status } = notification;

  const iconMap = {
    pending: <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin text-blue-500" />,
    success: <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />,
    error: <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" />
  };

  const titleMap = {
    pending: 'Sending Message',
    success: 'Message Sent',
    error: 'Error Sending Message'
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 sm:pt-6 md:pt-8"
        >
          <div className="max-w-md mx-auto">
            <Alert 
              className="relative overflow-hidden bg-black/95 backdrop-blur-xl border border-white/10 shadow-2xl rounded-xl"
              onClick={onClose}
            >
              {/* Background gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/[0.05] via-transparent to-white/[0.05] pointer-events-none" />
              
              <div className="relative flex items-start gap-3 p-3 sm:p-4">
                <div className="flex-shrink-0 mt-0.5">
                  {iconMap[status]}
                </div>
                <div className="flex-1 min-w-0">
                  <AlertTitle className="text-sm sm:text-base font-light text-white mb-1">
                    {titleMap[status]}
                  </AlertTitle>
                  <AlertDescription className="text-xs sm:text-sm text-white/80 font-light tracking-wide line-clamp-2">
                    {message}
                  </AlertDescription>
                </div>
              </div>

              {/* Progress bar for auto-dismiss */}
              <motion.div 
                className="absolute bottom-0 left-0 h-0.5 bg-white/20"
                initial={{ width: "100%" }}
                animate={{ width: "0%" }}
                transition={{ duration: 5, ease: "linear" }}
              />
            </Alert>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
