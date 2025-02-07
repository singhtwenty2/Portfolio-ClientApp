export interface FormErrors {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
}

export interface ValidationResult {
    isValid: boolean;
    errors: FormErrors;
}

export const validateContactForm = (data: {
    name: string;
    email: string;
    subject: string;
    message: string;
}): ValidationResult => {
    const errors: FormErrors = {};
    
    // Name validation
    if (!data.name.trim()) {
        errors.name = 'Name is required';
    } else if (data.name.length < 2) {
        errors.name = 'Name must be at least 2 characters long';
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email.trim()) {
        errors.email = 'Email is required';
    } else if (!emailRegex.test(data.email)) {
        errors.email = 'Please enter a valid email address';
    }
    
    // Subject validation
    if (!data.subject) {
        errors.subject = 'Please select a subject';
    }
    
    // Message validation
    if (!data.message.trim()) {
        errors.message = 'Message is required';
    } else if (data.message.length < 10) {
        errors.message = 'Message must be at least 10 characters long';
    }
    
    return {
        isValid: Object.keys(errors).length === 0,
        errors
    };
};