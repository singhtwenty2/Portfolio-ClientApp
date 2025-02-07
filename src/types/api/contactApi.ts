export interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export type NotificationStatus = 'pending' | 'success' | 'error';

export interface NotificationState {
    show: boolean;
    message: string;
    status: NotificationStatus;
}

export interface ApiResponse<T> {
    data: T;
    message: string;
    status: number;
} 