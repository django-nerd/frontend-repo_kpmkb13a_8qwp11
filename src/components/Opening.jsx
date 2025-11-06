import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Send } from 'lucide-react';

function BatikBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <svg
        className="w-full h-full opacity-20"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 800 600"
      >
        <defs>
          <pattern id="batik" width="60" height="60" patternUnits="userSpaceOnUse">
            <g fill="none" stroke="#b08d57" strokeWidth="1.2">
              <path d="M0 30 Q15 10 30 30 T60 30" />
              <path d="M0 0 Q15 20 30 0 T60 0" />
              <path d="M0 60 Q15 40 30 60 T60 60" />
              <circle cx="30" cy="30" r="6" fill="#b08d57" />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="#1a120b" />
        <rect width="100%" height="100%" fill="url(#batik)" />
      </svg>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
    </div>
  );
}

export default function Opening({ onOpen, defaultGuest }) {
  const [guest, setGuest] = useState(defaultGuest || '');

  useEffect(() => {
    if (!defaultGuest) {
      const params = new URLSearchParams(window.location.search);
      const q = params.get('to') || '';
      if (q) setGuest(q);
    }
  }, [defaultGuest]);

  return (
    <AnimatePresence>
      <motion.section
        key="opening"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center"
      >
        <BatikBackground />
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative mx-4 w-full max-w-xl rounded-2xl border border-amber-500/30 bg-[#12100e]/70 backdrop-blur-lg p-8 text-center text-amber-50 shadow-2xl"
          style={{ boxShadow: '0 10px 40px rgba(176,141,87,0.25)' }}
        >
          <div className="mx-auto mb-6 h-14 w-14 rounded-full bg-gradient-to-br from-amber-500 to-yellow-700 flex items-center justify-center shadow-lg">
            <Heart className="text-amber-50" />
          </div>
          <p className="text-sm tracking-widest text-amber-200/80">Undangan Pernikahan</p>
          <h1 className="mt-2 font-serif text-4xl md:text-5xl text-amber-100">
            Maulida <span className="text-amber-500">&</span> Nandar
          </h1>

          <div className="mt-6">
            <label className="block text-sm mb-2 text-amber-200/90">
              Kepada Yth. Bapak/Ibu/Saudara/i
            </label>
            <div className="flex items-center gap-2">
              <input
                value={guest}
                onChange={(e) => setGuest(e.target.value)}
                placeholder="Nama Tamu"
                className="w-full rounded-lg bg-black/40 border border-amber-500/30 px-4 py-3 text-amber-50 placeholder:text-amber-200/50 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
              />
              <button
                onClick={() => onOpen(guest)}
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-amber-600 to-yellow-700 px-4 py-3 font-medium text-amber-50 shadow-md hover:brightness-110 focus:outline-none"
              >
                <Send size={18} />
                Buka Undangan
              </button>
            </div>
          </div>

          <p className="mt-6 text-xs text-amber-200/70">
            Mohon maaf apabila ada kesalahan penulisan nama/gelar
          </p>
        </motion.div>
      </motion.section>
    </AnimatePresence>
  );
}
