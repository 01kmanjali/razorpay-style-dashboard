import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
export const metadata: Metadata = {
  title: "Affiliate Dashboard",
  description: "Razorpay-style dashboard built with Next.js + Tailwind + Recharts",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
          <div className="min-h-screen flex">
            <Sidebar />
            {children}
          </div>
        
        </body>
    </html>
  );
}
