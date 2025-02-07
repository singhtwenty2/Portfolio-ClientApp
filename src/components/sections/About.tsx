import { personalInfo } from "@/data/personal";
import { Smartphone, Server, Cloud, Database, LucideIcon } from "lucide-react";
import { ReactNode } from "react";

interface Domain {
  icon: "Smartphone" | "Server" | "Cloud" | "Database";
  title: string;
  description: string;
}

const iconMap: Record<Domain['icon'], LucideIcon> = {
    Smartphone: Smartphone,
    Server: Server,
    Cloud: Cloud,
    Database: Database
};

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = "" }) => (
  <div
    className={`
            backdrop-blur-lg
            bg-gradient-to-br from-[#1C1C1C]/80 to-[#2C2C2C]/40
            rounded-3xl
            p-8
            border border-white/10
            shadow-2xl
            group
            hover:transform hover:scale-[1.02]
            hover:bg-[#1C1C1C]/90
            transition-all duration-700
            relative
            overflow-hidden
            ${className}`}
  >
    <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
      <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-2000 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    </div>
    <div className="relative z-10">{children}</div>
  </div>
);

interface DomainCardProps {
  domain: Domain;
}

const DomainCard: React.FC<DomainCardProps> = ({ domain }) => {
  const IconComponent = iconMap[domain.icon];
  return (
    <GlassCard className="flex flex-col items-center text-center group">
      <div className="mb-4 p-3 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors duration-700 flex items-center justify-center">
        <IconComponent
          className="w-6 h-6 text-white/90"
          size={24}
          strokeWidth={1.5}
        />
      </div>
      <h3 className="text-lg tracking-wide font-light mb-3 text-white">
        {domain.title}
      </h3>
      <p className="text-sm leading-relaxed text-white/70 font-light tracking-wide">
        {domain.description}
      </p>
    </GlassCard>
  );
};

const About: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-gradient-to-b from-black via-black to-black">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-light mb-12 tracking-wider text-center text-white">
          ABOUT
        </h1>
        <div className="space-y-12">
          <GlassCard>
            <p className="text-lg md:text-xl text-white/90 font-light leading-relaxed tracking-wide">
              {personalInfo.bio}
            </p>
          </GlassCard>
          <GlassCard>
            <h2 className="text-3xl font-light mb-6 text-white tracking-wider">
              CURRENT FOCUS
            </h2>
            <div className="text-white/80 font-light leading-relaxed text-lg tracking-wide">
              {personalInfo.currentFocus}
            </div>
          </GlassCard>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {personalInfo.domains.map((domain, index) => (
              <DomainCard key={index} domain={domain as Domain} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
