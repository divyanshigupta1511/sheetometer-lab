interface NotificationCardProps {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  className?: string;
}

export default function NotificationCard({
  title,
  subtitle,
  icon,
  className,
}: NotificationCardProps) {
  return (
    <div
      className={`absolute rounded-2xl border border-white/10 bg-[#151515]/90 p-4 backdrop-blur-xl shadow-2xl ${className}`}
    >
      <div className="flex items-center gap-3">
        <div className="rounded-xl bg-[#D4AF37] p-2 text-black">
          {icon}
        </div>

        <div>
          <p className="text-sm font-semibold text-white">
            {title}
          </p>

          <p className="text-xs text-white/60">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}