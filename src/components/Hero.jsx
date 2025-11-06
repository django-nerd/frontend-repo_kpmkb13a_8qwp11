import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function formatTimeDiff(targetDate) {
  const now = new Date();
  const diff = Math.max(0, targetDate.getTime() - now.getTime());
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds };
}

export default function Hero({ date }) {
  const [time, setTime] = useState(formatTimeDiff(date));

  useEffect(() => {
    const id = setInterval(() => setTime(formatTimeDiff(date)), 1000);
    return () => clearInterval(id);
  }, [date]);

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="h-full w-full" aria-hidden>
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a120b] via-[#24190f] to-[#0f0b08]" />
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(176,141,87,0.35) 2px, transparent 3px)', backgroundSize: '50px 50px' }} />
        </div>
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-24 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-serif text-5xl md:text-6xl text-amber-100"
        >
          Maulida <span className="text-amber-500">&amp;</span> Nandar
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-3 text-amber-200/80"
        >
          Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud menyelenggarakan pernikahan.
        </motion.p>

        <div className="mt-8 grid grid-cols-4 gap-3 md:gap-6 max-w-2xl mx-auto">
          {[
            { label: 'Hari', value: time.days },
            { label: 'Jam', value: time.hours },
            { label: 'Menit', value: time.minutes },
            { label: 'Detik', value: time.seconds },
          ].map((item) => (
            <div key={item.label} className="rounded-xl border border-amber-500/30 bg-black/30 p-4">
              <div className="font-serif text-3xl md:text-4xl text-amber-100">{String(item.value).padStart(2, '0')}</div>
              <div className="text-xs tracking-widest uppercase text-amber-300/80">{item.label}</div>
            </div>
          ))}
        </div>

        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mx-auto mt-10 max-w-3xl rounded-xl border border-amber-500/30 bg-[#12100e]/50 p-6 text-amber-100"
        >
          <p className="italic">
            "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tentram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang." (QS. Ar-Rum: 21)
          </p>
        </motion.blockquote>
      </div>
    </section>
  );
}
