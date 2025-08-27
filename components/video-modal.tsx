"use client";
import { X } from "lucide-react";

interface DashboardModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl?: string;
}

export function VideoModal({ isOpen, onClose, imageUrl }: DashboardModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div
        className="relative w-[95vw] max-w-[1200px] mx-auto bg-[#10131a] rounded-2xl overflow-hidden border border-[#23263a] shadow-2xl"
        style={{ boxShadow: "0 8px 40px 0 #0a0c14, 0 1.5px 8px 0 #23263a" }}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-[#23263a] bg-[#10131a]">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-white tracking-tight">
              <span style={{ color: '#3591e2' }}>Skill</span>
              <span className="text-white">Vault</span>
            </span>
            <nav className="flex items-center space-x-8 ml-8">
              <span className="text-white/80 font-medium cursor-pointer border-b-2 border-[#3591e2] pb-1">Overview</span>
              <span className="text-white/50 font-medium cursor-pointer hover:text-white transition">Playground</span>
              <span className="text-white/50 font-medium cursor-pointer hover:text-white transition">Skillie</span>
              <span className="text-white/50 font-medium cursor-pointer hover:text-white transition">Settings</span>
            </nav>
          </div>
          <button onClick={onClose} className="w-10 h-10 flex items-center justify-center rounded-full bg-[#181b23] hover:bg-[#23263a] transition">
            <X className="w-6 h-6 text-white" />
          </button>
        </div>
        {/* Modal Content (Image) */}
        <div className="p-8 bg-[#10131a] flex flex-col items-center justify-center">
          <img
            src={imageUrl || "/dashboard-demo.png"}
            alt="Dashboard Demo"
            className="rounded-xl border border-[#23263a] shadow-lg max-w-full h-auto"
            style={{ minHeight: 400, maxHeight: 600, objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  );
}
