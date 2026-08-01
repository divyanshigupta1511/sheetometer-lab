import {
  Sheet,
  Bell,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";

function Step({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="rounded-xl bg-[#D4AF37] p-3 text-black">
        {icon}
      </div>

      <span className="text-xs text-white">
        {title}
      </span>
    </div>
  );
}

function Line() {
  return (
    <div className="h-[2px] w-10 bg-gradient-to-r from-[#D4AF37] to-transparent" />
  );
}

export default function WorkflowCard() {
  return (
    <div className="col-span-2 rounded-2xl border border-white/10 bg-[#121212] p-5">
      <h4 className="mb-6 text-lg font-semibold text-white">
        Automation Workflow
      </h4>

      <div className="flex items-center justify-between">
        <Step icon={<Sheet size={20} />} title="Sheets" />
        <Line />
        <Step icon={<Bell size={20} />} title="Process" />
        <Line />
        <Step icon={<MessageCircle size={20} />} title="WhatsApp" />
        <Line />
        <Step icon={<CheckCircle2 size={20} />} title="Done" />
      </div>
    </div>
  );
}