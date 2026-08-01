"use client";

import { BarChart3, MessageCircle, Sheet } from "lucide-react";

import WorkflowCard from "./WorkflowCard";
import StatCard from "./StatCard";
import NotificationCard from "./NotificationCard";

export default function HeroDashboard() {
  return (
    <div className="relative h-[560px] w-full">

      {/* Background Glow */}

      <div className="absolute inset-10 rounded-full bg-[#D4AF37]/20 blur-[100px]" />

      {/* Floating Notifications */}

      <NotificationCard
        title="Google Sheets"
        subtitle="Live Data Synced"
        icon={<Sheet size={20} />}
        className="-left-8 top-6"
      />

      <NotificationCard
        title="WhatsApp"
        subtitle="Automation Running"
        icon={<MessageCircle size={20} />}
        className="-right-8 bottom-10"
      />

      {/* Dashboard */}

      <div className="relative z-10 mt-8 rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur-2xl shadow-[0_30px_80px_rgba(0,0,0,.45)]">

        {/* Top */}

        <div className="mb-6 flex items-center justify-between">

          <div className="flex gap-2">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-green-400" />
          </div>

          <span className="rounded-full bg-[#D4AF37]/20 px-3 py-1 text-xs font-semibold tracking-wider text-[#D4AF37]">
            AUTOMATION LIVE
          </span>

        </div>

        {/* Cards */}

        <div className="grid grid-cols-2 gap-4">

          <StatCard
            title="Tasks Automated"
            value="4,892"
            change="+28% this month"
          />

          <div className="rounded-2xl border border-white/10 bg-[#121212] p-5">

            <div className="mb-3 flex items-center gap-2">

              <BarChart3 className="h-5 w-5 text-[#D4AF37]" />

              <span className="text-sm font-semibold text-white">
                Analytics
              </span>

            </div>

            <div className="mt-6 flex h-24 items-end gap-2">

              <div className="h-8 flex-1 rounded bg-[#D4AF37]/30" />
              <div className="h-14 flex-1 rounded bg-[#D4AF37]/45" />
              <div className="h-20 flex-1 rounded bg-[#D4AF37]/60" />
              <div className="h-16 flex-1 rounded bg-[#D4AF37]/75" />
              <div className="h-24 flex-1 rounded bg-[#D4AF37]" />

            </div>

          </div>

          <WorkflowCard />

        </div>

      </div>

    </div>
  );
}