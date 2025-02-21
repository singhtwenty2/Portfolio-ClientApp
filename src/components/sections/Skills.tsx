'use client';

import { skillCategories } from '@/data/skills';
import { useState, useEffect } from 'react';
import { Radar } from 'recharts';
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from 'recharts';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState(skillCategories[0]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 bg-black/90 will-change-transform">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 opacity-0 animate-fade-in" 
             style={{ 
               animation: mounted ? 'fadeIn 1s forwards' : 'none',
               willChange: 'opacity, transform'
             }}>
          <h1 className="text-5xl tracking-wider font-light mb-4 text-white">
            SKILLS & EXPERTISE
          </h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Categories List */}
          <div className="space-y-4">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                onClick={() => setSelectedCategory(category)}
                className={`
                  backdrop-blur-lg bg-white/5 border border-white/10 rounded-xl p-6
                  cursor-pointer transform transition-all duration-700 ease-in-out
                  hover:bg-white/10 hover:scale-[1.02] hover:shadow-xl
                  opacity-0 animate-fade-in
                  ${selectedCategory.title === category.title ? 'bg-white/10 scale-[1.02] shadow-lg' : ''}
                `}
                style={{ 
                  animation: mounted ? `fadeIn 0.5s ${index * 0.1}s forwards` : 'none',
                  willChange: 'transform, opacity, background'
                }}
              >
                <div className="flex items-center gap-4">
                  <category.icon className="w-6 h-6 text-gray-300" />
                  <h2 className="text-lg tracking-wide font-light text-white">{category.title}</h2>
                </div>
              </div>
            ))}
          </div>

          {/* Radar Chart */}
          <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-xl p-8 transform transition-all duration-700 hover:shadow-xl"
               style={{ willChange: 'transform' }}>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={selectedCategory.skills} margin={{ top: 20, right: 30, bottom: 20, left: 30 }}>
                  <PolarGrid stroke="rgba(255,255,255,0.1)" />
                  <PolarAngleAxis
                    dataKey="name"
                    tick={{ 
                      fill: 'rgba(255,255,255,0.7)', 
                      fontSize: 12,
                      dy: 4
                    }}
                    tickLine={false}
                  />
                  <Radar
                    name={selectedCategory.title}
                    dataKey="value"
                    stroke="rgba(255,255,255,0.8)"
                    fill="rgba(255,255,255,0.1)"
                    animationDuration={1000}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Skills List */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {selectedCategory.skills.map((skill, index) => (
            <div
              key={skill.name}
              className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-lg p-6
                        transform transition-all duration-700 hover:bg-white/10 hover:shadow-xl"
              style={{ 
                willChange: 'transform, opacity',
                animation: mounted ? `slideUp 0.5s ${index * 0.1}s forwards` : 'none'
              }}
            >
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0">
                <span className="text-lg tracking-wide font-light text-white break-words max-w-[180px]">
                  {skill.name}
                </span>
                <span className="text-gray-400 font-light tracking-wider">
                  {skill.value}%
                </span>
              </div>
              <div className="mt-4 h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 rounded-full transition-all duration-1000 ease-in-out"
                  style={{ 
                    width: mounted ? `${skill.value}%` : '0%',
                    willChange: 'width'
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}