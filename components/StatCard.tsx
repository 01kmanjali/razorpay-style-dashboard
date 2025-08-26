import { ElementType } from "react";
import { cn } from "./ui/cn";

export default function StatCard({ icon, title, amount, note, color } : { icon: ElementType, title: string, amount: string, note?: string, color: string }) {
  const Icon = icon;
  return (
    <div className="backdrop-blur border border-white/5 rounded-2xl shadow-soft p-5 bg-accent-6">
      <div className="flex items-center gap-3 mb-3">
        <div className="p-2">{
          <Icon size={29} className={cn(`text-${color}`)} />
        }</div>
       
      </div>
      
      <div className="text-xl font-semibold mb-1">{amount}</div>
      <div className="text-xs text-muted">{title}</div>
      {note && <div className={cn(`text-xs text-${color}`)}>{note}</div>}

    </div>
  )
}
