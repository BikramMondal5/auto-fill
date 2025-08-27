"use client";
import { useState } from "react";
import { X, Play } from "lucide-react";

interface DashboardModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl?: string;
  videoUrl?: string; // optional override for the YouTube url
  autoPlay?: boolean; // New prop to control autoplay
}

function getYouTubeEmbedUrl(url: string, autoplay = false) {
  try {
    // handle youtu.be short links and full youtube links
    let id = url;
    if (url.includes("youtu.be/")) {
      id = url.split("youtu.be/")[1].split(/[?&]/)[0];
    } else if (url.includes("watch?v=")) {
      const params = new URLSearchParams(url.split("?")[1] || "");
      id = params.get("v") || id;
    } else if (url.includes("/embed/")) {
      id = url.split("/embed/")[1].split(/[?&]/)[0];
    }

    return `https://www.youtube.com/embed/${id}?rel=0${autoplay ? "&autoplay=1" : ""}`;
  } catch (e) {
    return url; // fallback
  }
}

export function VideoModal({ isOpen, onClose, imageUrl, videoUrl, autoPlay }: DashboardModalProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  if (!isOpen) return null;

  const defaultVideo = "https://youtu.be/4ybHfG3jo4w";
  const src = getYouTubeEmbedUrl(videoUrl || defaultVideo, isPlaying || autoPlay);

  const handleClose = () => {
    // stop playback when closing
    setIsPlaying(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      {/* Section heading shown above the modal */}
      {/* <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-60">
        <h2 className="text-2xl font-semibold text-white">How It Works</h2>
      </div> */}
      <div
        className="relative w-[50vw] max-w-[700px] mx-auto bg-[#10131a] rounded-2xl overflow-hidden border border-[#23263a] shadow-2xl"
        style={{ boxShadow: "0 8px 40px 0 #0a0c14, 0 1.5px 8px 0 #23263a" }}
      >
        {/* Modal Header */}
        {/* <div className="flex items-center justify-between px-8 py-6 border-b border-[#23263a] bg-[#10131a]">
          <div className="flex items-center space-x-2">
            
            
          </div>
          <button onClick={handleClose} className="w-10 h-10 flex items-center justify-center rounded-full bg-[#181b23] hover:bg-[#23263a] transition">
            <X className="w-6 h-6 text-white" />
          </button>
        </div> */}
        <button 
            onClick={handleClose} 
            className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-[#181b23] hover:bg-[#23263a] transition text-white"
        >
            <X className="w-6 h-6" />
        </button>

        {/* Modal Content (Poster or Video) */}
        <div className="p-8 bg-[#10131a] flex flex-col items-center justify-center">
          {!isPlaying && !autoPlay ? (
            <button
              onClick={() => setIsPlaying(true)}
              aria-label="Play video"
              className="relative rounded-xl border border-[#23263a] shadow-lg overflow-hidden focus:outline-none"
              style={{ minHeight: 400, maxHeight: 600 }}
            >
              <img
                src={imageUrl || "/dashboard-demo.png"}
                alt="Video poster"
                className="block max-w-full h-auto"
                style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-black/40 rounded-full p-4 pointer-events-none">
                  <Play className="w-12 h-12 text-white" />
                </div>
              </div>
            </button>
          ) : (
            <div className="w-full" style={{ minHeight: 400, maxHeight: 600 }}>
              <iframe
                title="How it works video"
                src={src}
                className="w-full h-[60vh] max-h-[600px] rounded-xl border border-[#23263a] shadow-lg"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
