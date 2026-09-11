import { motion } from "motion/react";
import { Butterfly } from "./Butterfly";
import { ArrowLeft, Clock, MessageCircle } from "lucide-react";

interface RSVPFormProps {
  onBack: () => void;
}

export const RSVPForm = ({ onBack }: RSVPFormProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="relative w-full min-h-screen bg-[#120d0b] flex items-center justify-center py-12 px-4 overflow-hidden perspective-[2000px]"
    >
      {/* Dark atmospheric background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#3a2818]/80 via-[#120d0b] to-black opacity-90" />
      <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/stardust.png')` }} />

      {/* Atmospheric Butterflies */}
      <Butterfly className="top-[15%] right-[5%] blur-[1px]" delay={1} duration={11} scale={1.8} />
      <Butterfly className="bottom-[15%] left-[8%] blur-[2px]" delay={3} duration={13} scale={2} />

      {/* Floating Wrapper */}
      <motion.div
        animate={{ y: [-6, 6, -6] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="relative w-full max-w-md z-10"
      >
        {/* Card Container */}
        <motion.div
          initial={{ opacity: 0, rotateY: -15, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, rotateY: 0, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full bg-[#fdfaf6] rounded-sm shadow-[0_40px_100px_rgba(0,0,0,0.8),_0_0_80px_rgba(223,168,86,0.1)] overflow-hidden p-8 sm:p-10 border border-[#dfa856]/30"
        >
          {/* Paper Texture Overlay */}
          <div
            className="absolute inset-0 opacity-[0.5] mix-blend-multiply pointer-events-none"
            style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/cream-paper.png')` }}
          />

          {/* Elegant gold corner accents */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#dfa856]/40 m-4" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#dfa856]/40 m-4" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#dfa856]/40 m-4" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#dfa856]/40 m-4" />

          {/* Back Button */}
          <button
            onClick={onBack}
            className="absolute top-6 left-6 text-[#2a1f1a]/70 hover:text-[#b3853f] transition-colors flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold group cursor-pointer z-30"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span>Volver</span>
          </button>

          <div className="flex flex-col items-center mt-6 text-center relative z-10">
            {/* Clock Badge Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 12 }}
              className="w-16 h-16 rounded-full bg-gradient-to-br from-[#dfa856]/20 to-[#b3853f]/10 border border-[#dfa856]/40 flex items-center justify-center text-[#b3853f] shadow-inner mb-4"
            >
              <Clock size={30} />
            </motion.div>

            {/* Header */}
            <span className="font-script text-3xl sm:text-4xl text-[#dfa856] block mb-1">Cupos Cerrados</span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#2a1f1a] font-bold tracking-tight">
              Confirmación Finalizada
            </h2>
            <div className="w-16 h-[1px] bg-[#dfa856]/50 mx-auto mt-3 mb-5" />

            <p className="font-serif italic text-[#2a1f1a]/85 text-[15px] leading-relaxed mb-6 max-w-xs">
              El tiempo para confirmar asistencia ha caducado y los cupos han sido cerrados por el administrador. ¡Agradecemos inmensamente su cariño y comprensión!
            </p>

            {/* WhatsApp Contact Box */}
            <div className="w-full bg-white/85 border border-[#dfa856]/35 rounded-2xl p-5 shadow-sm flex flex-col items-center gap-3 mb-6">
              <p className="font-sans text-xs text-[#2a1f1a]/80 font-semibold">
                Cualquier duda o consulta, contáctanos directamente:
              </p>

              <a 
                href="https://wa.me/50662562000?text=%C2%A1Hola%20%C3%81mbar!%20Te%20escribo%20con%20respecto%20a%20la%20invitaci%C3%B3n%20de%20la%20boda."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#25D366] via-[#22c55e] to-[#128C7E] text-white py-3.5 px-4 rounded-full font-sans font-bold uppercase tracking-[0.1em] text-xs transition-all duration-300 hover:shadow-[0_8px_25px_rgba(37,211,102,0.35)] hover:scale-[1.02] active:scale-95 shadow-md border border-white/30"
              >
                <MessageCircle size={18} className="shrink-0" />
                <span>WhatsApp de Ámbar Obando</span>
              </a>

              <span className="font-sans text-[11px] text-[#2a1f1a]/50">
                +506 6256-2000
              </span>
            </div>

            {/* Dress code reminder */}
            <div className="w-full py-3 px-4 rounded-xl bg-[#dfa856]/5 border border-[#dfa856]/20 mb-6">
              <span className="font-sans text-[9px] uppercase tracking-[0.25em] text-[#b3853f] font-extrabold block mb-0.5">
                Código de Vestimenta
              </span>
              <p className="font-serif italic text-red-700 font-bold text-xs">
                * Recordatorio: No ir vestido ni de negro ni de blanco
              </p>
            </div>

            {/* Back Button */}
            <button
              onClick={onBack}
              className="border-2 border-[#dfa856] text-[#b3853f] hover:bg-[#dfa856] hover:text-[#2a1f1a] transition-all duration-300 font-sans font-bold text-xs uppercase tracking-widest px-8 py-3.5 rounded-full cursor-pointer shadow-sm active:scale-95"
            >
              Regresar a la Invitación
            </button>
          </div>

          {/* Butterfly Accent */}
          <Butterfly className="bottom-[4%] right-[6%] text-[#b3853f] opacity-80" delay={0.5} duration={10} scale={0.7} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
