'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Send } from 'lucide-react';
import { personalInfo } from '@/data/personal';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { useContactForm } from '@/hooks/useContactForm';
import { ContactFormData } from '@/types/api/contactApi';
import { NotificationToast } from '@/components/ui/NotificationToast';
import { FormErrors, validateContactForm } from '@/utils/formValidation';

export default function Contact() {
    const { submitForm, loading, notification, resetNotification } = useContactForm();
    const [formData, setFormData] = useState<ContactFormData>({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [touched, setTouched] = useState<Record<string, boolean>>({});

    const resetForm = () => {
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
        setErrors({});
        setTouched({});
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const validation = validateContactForm(formData);
        
        if (!validation.isValid) {
            setErrors(validation.errors);
            setTouched({
                name: true,
                email: true,
                subject: true,
                message: true
            });
            return;
        }
        
        const response = await submitForm(formData);
        if (response?.success) {
            resetForm(); // Clear form after successful submission
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        
        if (errors[name as keyof FormErrors]) {
            setErrors(prev => ({
                ...prev,
                [name]: undefined
            }));
        }
    };

    const handleBlur = (field: string) => {
        setTouched(prev => ({
            ...prev,
            [field]: true
        }));
        
        const validation = validateContactForm(formData);
        if (validation.errors[field as keyof FormErrors]) {
            setErrors(prev => ({
                ...prev,
                [field]: validation.errors[field as keyof FormErrors]
            }));
        }
    };

    const renderField = (
        field: keyof ContactFormData,
        label: string,
        type: string = 'text',
        placeholder: string = '',
        options?: string[]
    ) => {
        const showError = touched[field] && errors[field];
        
        return (
            <div>
                <label className="block text-xs sm:text-sm uppercase tracking-widest font-light text-white/70 mb-2">
                    {label}
                </label>
                {type === 'select' ? (
                    <select
                        value={formData[field]}
                        onChange={handleChange}
                        onBlur={() => handleBlur(field)}
                        name={field}
                        className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-white/5 border ${
                            showError ? 'border-red-500' : 'border-white/10'
                        } text-white text-sm sm:text-base font-light tracking-wide focus:outline-none focus:border-white/20 transition-all duration-300`}
                    >
                        <option value="" className="bg-black">Select a subject</option>
                        {options?.map(option => (
                            <option key={option} value={option} className="bg-black">
                                {option}
                            </option>
                        ))}
                    </select>
                ) : type === 'textarea' ? (
                    <textarea
                        rows={4}
                        value={formData[field]}
                        onChange={handleChange}
                        onBlur={() => handleBlur(field)}
                        name={field}
                        placeholder={placeholder}
                        className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-white/5 border ${
                            showError ? 'border-red-500' : 'border-white/10'
                        } text-white text-sm sm:text-base font-light tracking-wide focus:outline-none focus:border-white/20 transition-all duration-300`}
                    />
                ) : (
                    <input
                        type={type}
                        value={formData[field]}
                        onChange={handleChange}
                        onBlur={() => handleBlur(field)}
                        name={field}
                        placeholder={placeholder}
                        className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-white/5 border ${
                            showError ? 'border-red-500' : 'border-white/10'
                        } text-white text-sm sm:text-base font-light tracking-wide focus:outline-none focus:border-white/20 transition-all duration-300`}
                    />
                )}
                {showError && (
                    <p className="mt-1 text-xs text-red-500">{errors[field]}</p>
                )}
            </div>
        );
    };

    return (
        <div className="min-h-screen pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 bg-gradient-to-b from-black via-black to-black relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.15]" />
            
            <NotificationToast 
                notification={notification}
                onClose={resetNotification}
            />

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-7xl mx-auto"
            >
                <h1 className="text-3xl sm:text-4xl md:text-5xl tracking-wider font-light mb-8 sm:mb-12 text-center text-white">
                    GET IN TOUCH
                </h1>

                <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="bg-black/20 backdrop-blur-xl rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-white/5 hover:border-white/10 transition-all duration-700">
                            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                                {renderField('name', 'Name', 'text', 'Elon Musk')}
                                {renderField('email', 'Email', 'email', 'musk@tesla.com')}
                                {renderField('subject', 'Subject', 'select', '', [
                                    'Job Opportunity',
                                    'Project Collaboration',
                                    'Freelance Work',
                                    'General Inquiry'
                                ])}
                                {renderField('message', 'Message', 'textarea', "I'd love to discuss a potential opportunity with you...")}

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full px-6 py-2.5 sm:py-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-white font-light tracking-widest uppercase text-xs sm:text-sm hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
                                >
                                    {loading ? (
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                        >
                                            <Send className="w-4 h-4" />
                                        </motion.div>
                                    ) : (
                                        <>
                                            Send Message
                                            <Send className="w-4 h-4" />
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="space-y-4 sm:space-y-6"
                    >
                        <div className="bg-black/20 backdrop-blur-xl rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-white/5 hover:border-white/10 transition-all duration-700">
                            <h2 className="text-base sm:text-lg tracking-wide font-light leading-relaxed text-white mb-4 sm:mb-6">
                                Connect With Me
                            </h2>
                            <div className="space-y-4 sm:space-y-6">
                                <a 
                                    href={`mailto:${personalInfo.email}`}
                                    className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
                                >
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 flex items-center justify-center">
                                        <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-xs sm:text-sm uppercase tracking-widest font-light text-white/70">Email</p>
                                        <p className="text-sm sm:text-base text-white font-light tracking-wide">{personalInfo.email}</p>
                                    </div>
                                </a>

                                <a 
                                    href={personalInfo.socialLinks.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
                                >
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 flex items-center justify-center">
                                        <GitHubLogoIcon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-xs sm:text-sm uppercase tracking-widest font-light text-white/70">GitHub</p>
                                        <p className="text-sm sm:text-base text-white font-light tracking-wide">@singhtwenty2</p>
                                    </div>
                                </a>

                                <a 
                                    href={personalInfo.socialLinks.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
                                >
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 flex items-center justify-center">
                                        <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-xs sm:text-sm uppercase tracking-widest font-light text-white/70">LinkedIn</p>
                                        <p className="text-sm sm:text-base text-white font-light tracking-wide">/in/aryansingh</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}