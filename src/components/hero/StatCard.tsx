interface StatCardProps {
  title: string;
  value: string;
  change: string;
}

export default function StatCard({
  title,
  value,
  change,
}: StatCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#121212] p-5">
      <p className="text-xs uppercase tracking-[0.2em] text-white/50">
        {title}
      </p>

      <h3 className="mt-3 text-4xl font-bold text-white">
        {value}
      </h3>

      <p className="mt-2 text-sm font-medium text-green-400">
        {change}
      </p>
    </div>
  );
}