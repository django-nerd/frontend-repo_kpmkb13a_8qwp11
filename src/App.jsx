import { useState } from 'react';
import Opening from './components/Opening';
import Hero from './components/Hero';
import ContentSections from './components/ContentSections';

export default function App() {
  const [opened, setOpened] = useState(false);
  const [guest, setGuest] = useState('');

  const weddingDate = new Date('2025-12-21T09:00:00+07:00');

  return (
    <div className="min-h-screen bg-[#0b0806] text-amber-50">
      {!opened && (
        <Opening onOpen={(g) => { setGuest(g); setOpened(true); }} defaultGuest={guest} />
      )}

      {opened && (
        <main>
          <Hero date={weddingDate} />
          <div className="mx-auto max-w-6xl px-4">
            {guest && (
              <div className="-mt-12 mb-6 rounded-xl border border-amber-500/30 bg-black/30 p-4 text-sm text-amber-200/90">
                Kepada Yth. Bapak/Ibu/Saudara/i {guest}
              </div>
            )}
          </div>
          <ContentSections />
        </main>
      )}
    </div>
  );
}
