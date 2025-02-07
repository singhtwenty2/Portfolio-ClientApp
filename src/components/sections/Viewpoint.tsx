'use client';

import React from 'react';
import { Clock } from 'lucide-react';
import { blogPosts } from '@/data/blog';
import Image from 'next/image';
import { BlogMetaData } from '@/types/landing';

const Viewpoint: React.FC = () => {
    const handleViewCatalog = () => {
        console.log("Navigate to full blog catalog");
    };

    const getDisplayTags = (tags: string[]) => tags.slice(0, 2);

    return (
        <div className="min-h-screen pt-32 pb-20 px-4 bg-gradient-to-b from-black via-black to-black">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16 text-center">
                    <h1 className="text-5xl tracking-wider font-light mb-4 text-white">
                        VIEWPOINT
                    </h1>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {blogPosts.map((post: BlogMetaData) => (
                        <div
                            key={post.blogId}
                            className="group cursor-pointer h-full"
                        >
                            <div className="bg-black/20 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/5 hover:border-white/10 transition-all duration-700 flex flex-col h-full">
                                <div className="aspect-[16/9] overflow-hidden relative">
                                    <Image 
                                        src={post.coverImageUrl} 
                                        alt={post.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        loading="lazy"
                                        quality={85}
                                    />
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <h2 className="text-lg tracking-wide font-light leading-relaxed text-white mb-4">
                                        {post.title}
                                    </h2>
                                    <div className="mt-auto flex items-center justify-between">
                                        <div className="flex gap-2">
                                            {getDisplayTags(post.tags).map((tag, index) => (
                                                <span 
                                                    key={index}
                                                    className="px-3 py-1 bg-white/5 rounded-full text-[11px] uppercase tracking-widest text-gray-300 backdrop-blur-lg border border-white/5"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="flex items-center gap-1.5 text-gray-400">
                                            <Clock size={14} className="opacity-75" />
                                            <span className="text-xs tracking-wider font-light">
                                                {post.readTime}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <button
                        onClick={handleViewCatalog}
                        className="group px-8 py-3 bg-transparent relative"
                    >
                        <span className="relative z-10 text-sm uppercase tracking-widest font-light text-white">
                            Coming Soon
                        </span>
                        <div className="absolute bottom-0 left-0 w-full h-px bg-white/20 transform origin-left transition-transform duration-500 group-hover:scale-x-100" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Viewpoint;