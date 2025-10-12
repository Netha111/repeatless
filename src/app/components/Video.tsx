"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <motion.section
      className="relative w-full flex justify-center items-center py-10 md:py-20 px-4"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div
        className="relative w-full max-w-[1140px] aspect-[1140/548] border border-white/30 rounded-[20px] overflow-hidden shadow-[0_0_16px_#6D21F0,0_0_8.1px_#1C76FD]"
      >
        {!isPlaying ? (
          <>
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: "url('/images/thumbnail.png')" }}
            />
            <button
              onClick={() => setIsPlaying(true)}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                         w-[80px] h-[80px] md:w-[110px] md:h-[110px] rounded-full border border-white 
                         bg-black/20 backdrop-blur-md shadow-md flex items-center justify-center"
            >
              <div
                className="w-[24px] h-[24px] md:w-[32px] md:h-[32px] bg-white"
                style={{
                  clipPath: "polygon(0% 0%, 100% 50%, 0% 100%)",
                  transform: "rotate(0deg)",
                }}
              />
            </button>
          </>
        ) : (
          <video
            src="/images/Repeatless.mp4"
            autoPlay
            controls
            className="w-full h-full object-cover rounded-[20px]"
          />
        )}
      </div>
    </motion.section>
  );
};

export default VideoSection;
