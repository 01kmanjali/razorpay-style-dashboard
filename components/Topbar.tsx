
'use client';
import { Bell, UserCircle, LogOutIcon, SkipBackIcon } from "lucide-react";
import Dropdown from "./Dropdown"
import Image from "next/image";
import AvatarImg from '../public/b61b3b83df696abb7b64673d79760ec74cb65194.png'



const items = [
  { icon: UserCircle, label: "Edit Your Profile" },
  { icon: SkipBackIcon, label: "Back to Dashboard" },
  { icon: LogOutIcon, label: "Log Out"},
]

export default function Topbar() {
  return (
    <div className="flex items-center justify-between px-6 py-4 border-b border-white/5">
      <div className="text-3xl font-semibold">Hello, <span className="text-accent-2">Piyush Patyal</span> 👋</div>
      <div className="flex items-center gap-4">
        
        <button className="relative  flex items-center justify-center">
          <Bell className="h-7 w-6"  />
          <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-[#FC003C]" />
        </button>
        <div className="h-12 w-12 rounded-full overflow-hidden">
          <Image src={AvatarImg} alt="user Profile " />
        </div>
        <Dropdown
          options={items}
          onSelect={(data) => console.log("selected", data)}
          hasPlaceholder={false}
        />
      </div>
    </div>
  );
}
