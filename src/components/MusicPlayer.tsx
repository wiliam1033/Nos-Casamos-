import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Volume2, VolumeX } from 'lucide-react';

export const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.4;
    }
    
    // Reproducir automáticamente cuando el usuario interactúe con la página (requerido por navegadores)
    const handleFirstInteraction = () => {
      if (audioRef.current && audioRef.current.paused) {
        audioRef.current.play()
          .then(() => setIsPlaying(true))
          .catch(err => console.log('El autoplay fue bloqueado por el navegador:', err));
      }
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
    };

    document.addEventListener('click', handleFirstInteraction);
    document.addEventListener('touchstart', handleFirstInteraction);

    return () => {
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
    };
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

  return (
    <>
      {/* Usar import.meta.env.BASE_URL asegura que funcione en subdirectorios como GitHub Pages */}
      <audio ref={audioRef} src={`${import.meta.env.BASE_URL}music.mp3`} loop preload="auto" />
      
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 1 }}
        onClick={togglePlay}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-[#120d0b]/80 backdrop-blur-md border border-[#dfa856]/30 flex items-center justify-center text-[#dfa856] shadow-[0_4px_15px_rgba(223,168,86,0.15)] hover:bg-[#dfa856]/20 transition-all duration-300 group cursor-pointer"
        aria-label={isPlaying ? "Pausar música" : "Reproducir música"}
      >
        <div className="absolute inset-0 rounded-full border border-[#dfa856]/50 scale-100 group-hover:scale-110 transition-transform duration-500 opacity-0 group-hover:opacity-100" />
        
        {/* Efecto de ondas cuando está reproduciendo */}
        {isPlaying && (
          <>
            <span className="absolute inset-0 rounded-full border border-[#dfa856] animate-ping opacity-20"></span>
            <span className="absolute -inset-1 rounded-full border border-[#dfa856] animate-ping opacity-10" style={{ animationDelay: '0.5s' }}></span>
          </>
        )}

        {isPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
      </motion.button>
    </>
  );
};
