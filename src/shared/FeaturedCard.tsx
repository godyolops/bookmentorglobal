export const FeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  desc: string;
}> = ({ icon, title, desc }) => (
  <div className="p-10 bg-surface rounded-3xl border border-subtle shadow-sm hover:shadow-xl transition-all duration-300 group">
    <div className="bg-icon-chip w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h4 className="text-2xl font-bold mb-4 tracking-tight text-fg">{title}</h4>
    <p className="text-muted leading-relaxed text-base">{desc}</p>
  </div>
);
