import { motion } from 'framer-motion';
import { MapPin, CalendarDays, Gift } from 'lucide-react';
import { useEffect } from 'react';

export function Couple() {
  return (
    <section className="relative bg-[#0f0b08]">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center font-serif text-3xl md:text-4xl text-amber-100"
        >
          Tentang Mempelai
        </motion.h3>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {[
            { name: 'Maulida', desc: 'Putri dari Bapak ... & Ibu ...' },
            { name: 'Nandar', desc: 'Putra dari Bapak ... & Ibu ...' },
          ].map((p) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-amber-500/30 bg-[#12100e]/50 p-6 text-center"
            >
              <div className="mx-auto h-40 w-40 rounded-full border-4 border-amber-600/60 bg-[url('https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=600&auto=format&fit=crop')] bg-cover bg-center shadow-xl" />
              <h4 className="mt-4 font-serif text-2xl text-amber-100">{p.name}</h4>
              <p className="mt-2 text-amber-200/80">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Event() {
  return (
    <section className="relative bg-[#0f0b08]">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center font-serif text-3xl md:text-4xl text-amber-100">Acara</motion.h3>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {[
            { title: 'Akad Nikah', time: 'Sabtu, 21 Desember 2025 — 09.00 WIB', address: 'Pendopo Ageng, Yogyakarta' },
            { title: 'Resepsi', time: 'Sabtu, 21 Desember 2025 — 11.00 - 14.00 WIB', address: 'Pendopo Ageng, Yogyakarta' },
          ].map((e) => (
            <div key={e.title} className="rounded-2xl border border-amber-500/30 bg-[#12100e]/50 p-6">
              <div className="flex items-center gap-2 text-amber-400">
                <CalendarDays size={18} />
                <span className="font-medium">{e.title}</span>
              </div>
              <div className="mt-2 text-amber-100">{e.time}</div>
              <div className="mt-2 flex items-start gap-2 text-amber-200/80">
                <MapPin size={18} className="mt-0.5" />
                <span>{e.address}</span>
              </div>
              <a
                href="https://maps.google.com?q=Pendopo%20Ageng%20Yogyakarta"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block rounded-lg bg-gradient-to-r from-amber-600 to-yellow-700 px-4 py-2 text-sm font-medium text-amber-50 shadow hover:brightness-110"
              >
                Lihat di Google Maps
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Story() {
  const timeline = [
    { year: '2019', title: 'Pertama Bertemu', img: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop', desc: 'Berkenalan dalam sebuah acara kampus dan mulai berteman.' },
    { year: '2021', title: 'Berkomitmen', img: 'https://images.unsplash.com/photo-1452457750107-cd084dce177d?q=80&w=1200&auto=format&fit=crop', desc: 'Memutuskan untuk melangkah lebih serius bersama.' },
    { year: '2024', title: 'Lamaran', img: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop', desc: 'Mengikat janji suci dalam prosesi lamaran sederhana.' },
  ];

  return (
    <section className="relative bg-[#0f0b08]">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center font-serif text-3xl md:text-4xl text-amber-100">Cerita Cinta</motion.h3>
        <div className="mt-10 relative">
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-amber-500/40 via-amber-500/20 to-transparent" />
          <div className="space-y-10">
            {timeline.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`relative grid items-center gap-6 md:grid-cols-2 ${idx % 2 === 0 ? '' : 'md:[&>*:first-child]:order-2'}`}
              >
                <div className="rounded-xl border border-amber-500/30 bg-[#12100e]/50 p-6">
                  <div className="text-amber-400 text-sm font-medium">{item.year}</div>
                  <div className="mt-1 font-serif text-2xl text-amber-100">{item.title}</div>
                  <p className="mt-2 text-amber-200/80">{item.desc}</p>
                </div>
                <div className="rounded-xl overflow-hidden border border-amber-500/30">
                  <img src={item.img} alt={item.title} className="h-56 w-full object-cover" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Gallery() {
  const images = [
    'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1452457750107-cd084dce177d?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=80',
  ];
  return (
    <section className="relative bg-[#0f0b08]">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center font-serif text-3xl md:text-4xl text-amber-100">Galeri</motion.h3>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-3">
          {images.map((src, i) => (
            <a key={i} href={src} target="_blank" rel="noreferrer" className="group relative overflow-hidden rounded-xl border border-amber-500/30">
              <img src={src} alt={`Galeri ${i+1}`} className="h-40 md:h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Wishes() {
  return (
    <section className="relative bg-[#0f0b08]">
      <div className="mx-auto max-w-3xl px-4 py-20">
        <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center font-serif text-3xl md:text-4xl text-amber-100">Ucapan & Doa</motion.h3>
        <div className="mt-8 rounded-2xl border border-amber-500/30 bg-[#12100e]/50 p-6">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const name = form.name.value.trim();
              const message = form.message.value.trim();
              if (!name || !message) return;
              const prev = JSON.parse(localStorage.getItem('wishes') || '[]');
              prev.unshift({ name, message, at: new Date().toISOString() });
              localStorage.setItem('wishes', JSON.stringify(prev));
              form.reset();
              window.dispatchEvent(new CustomEvent('wishes:update'));
            }}
            className="grid gap-3"
          >
            <input name="name" placeholder="Nama" className="rounded-lg bg-black/40 border border-amber-500/30 px-4 py-3 text-amber-50 placeholder:text-amber-200/50 focus:outline-none focus:ring-2 focus:ring-amber-500/50" />
            <textarea name="message" placeholder="Ucapan" rows={3} className="rounded-lg bg-black/40 border border-amber-500/30 px-4 py-3 text-amber-50 placeholder:text-amber-200/50 focus:outline-none focus:ring-2 focus:ring-amber-500/50" />
            <button className="justify-self-start rounded-lg bg-gradient-to-r from-amber-600 to-yellow-700 px-5 py-2.5 text-sm font-medium text-amber-50 shadow hover:brightness-110">Kirim Ucapan</button>
          </form>
          <WishList />
        </div>
      </div>
    </section>
  );
}

function WishList() {
  const items = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('wishes') || '[]') : [];
  const rerender = () => {
    const el = document.getElementById('wish-list');
    if (el) el.innerHTML = '';
  };
  useEffect(() => {
    const handler = () => rerender();
    window.addEventListener('wishes:update', handler);
    return () => window.removeEventListener('wishes:update', handler);
  }, []);

  return (
    <div id="wish-list" className="mt-6 space-y-3">
      {items.length === 0 && (
        <div className="text-amber-200/70">Belum ada ucapan. Jadilah yang pertama!</div>
      )}
      {items.map((w, idx) => (
        <div key={idx} className="rounded-lg border border-amber-500/30 bg-black/30 p-4">
          <div className="text-amber-100 font-medium">{w.name}</div>
          <div className="text-amber-200/80 text-sm mt-1">{w.message}</div>
        </div>
      ))}
    </div>
  );
}

export function GiftSection() {
  return (
    <section className="relative bg-[#0f0b08]">
      <div className="mx-auto max-w-3xl px-4 py-20">
        <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center font-serif text-3xl md:text-4xl text-amber-100">Hadiah Digital</motion.h3>
        <div className="mt-8 rounded-2xl border border-amber-500/30 bg-[#12100e]/50 p-6 grid gap-6 md:grid-cols-2">
          <div>
            <div className="text-amber-200/80">Nomor Rekening</div>
            <div className="mt-1 font-serif text-2xl text-amber-100">Bank Mandiri</div>
            <div className="text-amber-50 text-xl tracking-widest">1234 5678 9012 345</div>
            <div className="mt-2 text-amber-300/80 text-sm">a.n. Maulida Nandar</div>
          </div>
          <div className="flex items-center justify-center">
            <div className="rounded-xl border border-amber-500/30 bg-white p-3">
              <img src="https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=mandiri:123456789012345" alt="QR Code" className="h-40 w-40" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Closing() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'radial-gradient(circle at 10% 10%, rgba(176,141,87,0.35), transparent 40%), radial-gradient(circle at 90% 20%, rgba(176,141,87,0.2), transparent 40%)' }} />
      <div className="relative mx-auto max-w-4xl px-4 py-20 text-center">
        <div className="mx-auto h-1 w-24 bg-gradient-to-r from-amber-600 to-yellow-700 rounded-full" />
        <h3 className="mt-6 font-serif text-3xl md:text-4xl text-amber-100">Terima Kasih</h3>
        <p className="mt-3 text-amber-200/80">Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.</p>
        <div className="mt-10 text-amber-300/90">Maulida & Nandar</div>
      </div>
    </section>
  );
}
