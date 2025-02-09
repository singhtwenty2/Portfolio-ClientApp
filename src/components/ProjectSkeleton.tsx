import React from 'react';

export const ProjectSkeleton: React.FC = () => (
  <div className="group relative w-full bg-gradient-to-br from-[#141414] to-[#1a1a1a] rounded-2xl overflow-hidden mb-3 border border-white/[0.02] animate-pulse">
    <div className="flex flex-col sm:grid sm:grid-cols-[1fr_1.2fr] gap-0">
      <div className="relative h-48 sm:h-[240px] lg:h-[220px] bg-gray-800" />
      <div className="relative flex flex-col justify-between p-6 sm:p-8">
        <div>
          <div className="h-6 bg-gray-800 rounded w-3/4 mb-4" />
          <div className="h-4 bg-gray-800 rounded w-1/2 mb-3" />
          <div className="h-3 bg-gray-800 rounded w-1/3" />
        </div>
        <div className="flex items-center gap-4 mt-6">
          <div className="h-5 w-5 bg-gray-800 rounded" />
        </div>
      </div>
    </div>
  </div>
);