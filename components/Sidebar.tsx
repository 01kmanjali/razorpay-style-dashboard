'use client';
import { cn } from './ui/cn';
import { Home, Wallet, Layers, Wrench, GraduationCap, IdCard, Link2, Users, Sparkles, Gift } from "lucide-react";
import Logo from '../public/logo/a78b5b1aa5950257e9c8472a4cc8ca2a4abfd6d6.png';
import Image from "next/image";
import {useState} from 'react';
import { useRouter } from 'next/navigation';
import { Route } from 'next';
import { usePathname } from 'next/navigation';

const items = [
  { icon: Home, label: "Dashboard", url: "/" },
  { icon: Wallet, label: "Earnings", url: "/earnings" },
  { icon: Layers, label: "Tiers",  url: "/tiers" },
  { icon: Wrench, label: "M-Tools" , url: "/mtools"},
  { icon: GraduationCap, label: "Trainings", url: "/trainings" },
  { icon: IdCard, label: "KYC",  url: "/kyc" },
  { icon: Link2, label: "LeadLink", url: "/leadlink" },
  { icon: Users, label: "RefInfo" , url: "/refinfo"},
  { icon: Sparkles, label: "Qualify",   url: "/qualify" },
  { icon: Gift, label: "Rewards", url: "/rewards" },
];

export default function Sidebar() {

  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter();
  const pathname = usePathname();
  return (
    <aside className="hidden md:flex flex-col w-[230px] h-screen border-r border-[#1f1f1f] gap-2 -ml-2 items-center">
      <div className="flex items-center w-[198px] h-[50px] mt-[34px] mx-auto overflow-hidden">
        <Image src={Logo} alt="Logo" width={198} height={50} />
        {/* <span className="font-semibold text-lg">Referraly</span> */}
      </div>

      {items.map(({ icon: Icon, label, url }, index) => {
        const isActive = pathname === url; 
        return (
        <button
          key={label}
          onClick={() => {
            setActiveIndex(index); // update active state
            if (url) router.push(url as Route);
          }}
          className={cn(
            "flex items-center justify-start gap-3 px-3 py-2 rounded-e-lg text-sm hover:bg-accent-2 transition hover:text-accent-6 ",
            isActive ? "bg-accent-2 text-accent-6 font-inter font-semibold text-[17.98px] leading-[100%] tracking-[0%] w-[206px] h-[54px] " : "text-muted"
          )}
        >
          <Icon size={18} />
          <span>{label}</span>
        </button>
      )})}
    </aside>
  );
}
