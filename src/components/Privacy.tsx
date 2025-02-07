'use client';

import { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye } from 'lucide-react';
import { privacyPolicyData } from '@/data/legal';

const PrivacySection = ({ title, content, icon }: { title: string; content: string[]; icon?: React.ReactNode }) => (
    <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
    >
        <div className="flex items-center gap-4 mb-6">
            {icon && (
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="w-12 h-12 rounded-2xl bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 border border-zinc-700/30 flex items-center justify-center"
                >
                    <div className="text-zinc-400">{icon}</div>
                </motion.div>
            )}
            <h3 className="text-2xl font-semibold text-zinc-100">{title}</h3>
        </div>
        <div className="space-y-4 pl-16">
            {content.map((paragraph, index) => (
                <motion.p
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-zinc-300 leading-relaxed"
                >
                    {paragraph}
                </motion.p>
            ))}
        </div>
    </motion.div>
);

const CookieCard = ({ cookie, index }: { cookie: { name: string; purpose: string; duration: string }; index: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group hover:border-zinc-700 transition-all duration-300"
    >
        <div className="p-6 h-full bg-gradient-to-br from-zinc-900/40 to-black/60 backdrop-blur-lg rounded-2xl border border-zinc-800/30">
            <h4 className="font-semibold text-zinc-100 mb-3 text-lg group-hover:text-blue-400 transition-colors">
                {cookie.name}
            </h4>
            <p className="text-zinc-300 mb-2 text-sm">{cookie.purpose}</p>
            <p className="text-zinc-500 text-sm">Duration: {cookie.duration}</p>
        </div>
    </motion.div>
);

export default function Privacy() {
    return (
        <div className="min-h-screen w-full bg-gradient-to-b from-black via-zinc-950 to-black relative overflow-hidden">
            {/* Enhanced background elements */}
            <div className="absolute inset-0 w-full h-full">
                <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.03] mix-blend-soft-light" />
                <div className="absolute top-[10%] left-[5%] w-[45rem] h-[45rem] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[10%] right-[5%] w-[40rem] h-[40rem] bg-gradient-to-r from-emerald-500/5 to-blue-500/5 rounded-full blur-[120px]" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/60 to-zinc-950/90" />
            </div>

            {/* Premium Header */}
            <div className="relative pt-32 pb-24 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="inline-block mb-6"
                >
                    <div className="w-16 h-16 mx-auto rounded-3xl bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 border border-zinc-700/30 flex items-center justify-center">
                        <Shield className="w-8 h-8 text-zinc-400" />
                    </div>
                </motion.div>
                <motion.h1
                    className="text-5xl font-light text-zinc-100 tracking-tight mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Privacy Policy
                </motion.h1>
                <motion.p
                    className="text-zinc-400 max-w-2xl mx-auto text-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    Last updated: {privacyPolicyData.lastUpdated}
                </motion.p>
            </div>

            {/* Main Content */}
            <div className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="backdrop-blur-xl rounded-[2.5rem] bg-gradient-to-br from-zinc-900/40 to-black/60 border border-zinc-800/30 p-8 sm:p-16 shadow-2xl"
                >
                    <Suspense fallback={<div>Loading...</div>}>
                        <motion.p
                            className="text-zinc-300 text-lg leading-relaxed mb-16"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            {privacyPolicyData.introduction}
                        </motion.p>

                        {/* Information Collection Section */}
                        <PrivacySection
                            title="Information Collection"
                            content={privacyPolicyData.sections[0].content}
                            icon={<Eye className="w-6 h-6" />}
                        />

                        {/* Data Usage Section */}
                        <PrivacySection
                            title="Data Usage"
                            content={privacyPolicyData.sections[1].content}
                            icon={<Lock className="w-6 h-6" />}
                        />

                        {/* Technical Information Section */}
                        <PrivacySection
                            title="Technical Information"
                            content={privacyPolicyData.sections[2].content}
                            icon={<Shield className="w-6 h-6" />}
                        />

                        {/* Cookie Policy Section */}
                        <motion.div
                            className="mt-16"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h3 className="text-2xl font-semibold text-zinc-100 mb-8">Cookie Policy</h3>
                            <p className="text-zinc-300 mb-8 text-lg">{privacyPolicyData.cookies.description}</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {privacyPolicyData.cookies.types.map((cookie, index) => (
                                    <CookieCard key={index} cookie={cookie} index={index} />
                                ))}
                            </div>
                        </motion.div>
                    </Suspense>
                </motion.div>
            </div>
        </div>
    );
}