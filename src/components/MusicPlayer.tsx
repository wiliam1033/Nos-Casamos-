import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Volume2, VolumeX } from 'lucide-react';

export const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.4;
    }
  }, []);

  const playAudio = () => {
    if (audioRef.current && audioRef.current.paused) {
      audioRef.current.play().catch(err => console.log('Error al reproducir:', err));
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    document.addEventListener('play-music', playAudio);
    return () => document.removeEventListener('play-music', playAudio);
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(err => console.log('Error al reproducir:', err));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <>
      {/* Overlay transparente para play/pause en cualquier lugar */}
      <div 
        className="fixed inset-0 z-0 cursor-pointer"
        onClick={togglePlay}
      />
      
      {/* Usar import.meta.env.BASE_URL asegura que funcione en subdirectorios como GitHub Pages */}
      <audio 
        ref={audioRef} 
        src={`${import.meta.env.BASE_URL}music.mp3`} 
        loop 
        preload="auto"
        onError={(e) => console.error("Error en el elemento de audio:", e)}
        onLoadedData={() => console.log("Audio cargado correctamente")}
      />
      
      <div className="fixed bottom-6 right-6 z-50 flex gap-2">
        {/* Botón de Mute */}
        <button
          onClick={toggleMute}
          className="w-12 h-12 rounded-full bg-[#120d0b]/80 backdrop-blur-md border border-[#dfa856]/30 flex items-center justify-center text-[#dfa856] shadow-[0_4px_15px_rgba(223,168,86,0.15)] hover:bg-[#dfa856]/20 transition-all duration-300 cursor-pointer"
          aria-label={isMuted ? "Desmutear" : "Mutear"}
        >
          {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>
      </div>
    </>
  );
};
