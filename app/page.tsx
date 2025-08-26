'use client';

import Topbar from "@/components/Topbar";
import StatCard from "@/components/StatCard";
import { CreditCard, ShoppingBag, UserPlus, BarChartIcon } from "lucide-react";
import Tanya from '../public/50e2bbc23961dfb1fb031d40ddc0d9f18d6f6392.jpg';
import Piyush from '../public/676be5c849a3f2f765826a3e27a9e54eabc64aa2.jpg';
import Utkarsh from '../public/4831312f4aa401c10a3523c93bf00db586074d1a.jpg';
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/components/ui/cn";
import Dropdown from "@/components/Dropdown";
import dynamic from "next/dynamic";

const AreaRevenueChart = dynamic(() => import("@/components/AreaRevenueChart"), {
  ssr: false,
});
const BarWeekly = dynamic(() => import("@/components/BarWeekly"), {
  ssr: false,
});

const EarningsInsights = [
  { icon: BarChartIcon, title: "All Time", amount: "₹ 51,060", note: "+10% from yesterday", color: 'accent-3' },
  { icon: CreditCard, title: "All time paid", amount: "₹ 21,340", note: "+8% from yesterday", color: 'accent-2' },
  { icon: ShoppingBag , title: "In last 30 Days", amount: "₹ 10,162", note: "+2% from yesterday", color : 'accent-4' },
  { icon: UserPlus, title: "In last 7 Days", amount: "₹ 3,890", note: "+3% from yesterday", color : 'accent-5' },
]

const yourRank = [
  { name: "Taniya Patyal", rank: "#6986", Image: Tanya },
  { name: "Piyush Patyal", rank: "#6987", Image: Piyush },
  { name: "Utkarsh Singh", rank: "#6988", Image: Utkarsh },
]

const timeData = [
  { label: "Weekly" },
  { label: "Monthly" },
  { label: "Yearly" },
]



export default function Page() {
  const [activeUser, setActiveUser] = useState(yourRank[1]);

  return (
      <main className="flex-1">
        <Topbar />
        <div className="px-6 py-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className=" lg:col-span-full card p-6 card h-[48px] px-6 py-6 gap-6  rounded-xl flex items-center">
          <span className="text-xl font-bold">6 Days 11 Hr 59 Min 09 Sec</span>
          <span className="text-sm text-muted">
            Your <span className="text-accent-2">next</span> level is just one{" "}
            <span className="text-accent-2">click away...</span>
          </span>
        </div>
          {/* Earnings Insights */}
          <section className="lg:col-span-2 card p-6">
            <div className="text-lg font-semibold mb-1">Earnings Insights</div>
            <div className="text-xs text-muted mb-4">Performance Summary</div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {EarningsInsights.map((stat) => (
                <StatCard
                  key={stat.title}
                  icon={stat.icon}
                  title={stat.title}
                  amount={stat.amount}
                  note={stat.note}
                  color={stat.color}
                />
              ))}
            </div>
          </section>

          {/* Earning Level */}
          <section className="card p-6">
            <div className="flex justify-between items-start mb-2">
              <div className="text-lg font-semibold">Earning Level</div>
              <Dropdown
                options={timeData}
                onSelect={(data) => console.log("selected", data)}
                hasPlaceholder={true}
              />
            </div>
            <BarWeekly />
          </section>

          {/* Your Rank */}
          <section className="card p-6">
            <div className="text-lg font-semibold mb-1">Your Rank</div>
            <div className="text-xs text-muted mb-1">Among other affiliates</div>
          <div className="text-2xl font-semibold mb-4 text-accent-2">
            {activeUser && activeUser.rank}
          </div>
            <div className="space-y-4">
            {yourRank.map((p) => (
              <div key={p.name} className="flex items-center justify-between cursor-pointer"
                onClick={() => setActiveUser(p)}
              >
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-full bg-white/15 overflow-hidden">
                    <Image src={p.Image} alt={p.name} width={36} height={36} className=" h-full object-cover" />
                  </div>
                  <div className="text-sm">{p.name}</div>
                </div>
                <div
                  className={cn(
                    activeUser.name === p.name
                      ? "text-lg text-accent-2"
                      : "text-sm text-muted"
                  )}
                >
                  {p.rank}
                </div>
                </div>
              ))}
            </div>
          </section>

          {/* Total Earning */}
          <section className="lg:col-span-2 card p-6">
          <div className="flex items-center justify-between mb-2">
              <div className="text-lg font-semibold">Total Earning</div>
              <div className="badge w-max flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-accent-3" />
                <span>Revenue</span>
              </div>
            </div>
            <AreaRevenueChart />
          </section>
        </div>
      </main>
  );
}
