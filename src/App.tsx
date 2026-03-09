import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Leaf, 
  Calendar, 
  Users, 
  Info, 
  ArrowRight, 
  Menu, 
  X, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Globe,
  Heart,
  Share2
} from 'lucide-react';
import { cn } from './lib/utils';

// --- Types ---
interface Festival {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
}

// --- Mock Data ---
const UPCOMING_FESTIVALS: Festival[] = [
  {
    id: '1',
    title: 'Zeleni Beograd 2026',
    date: '15. - 17. Juna',
    location: 'Kalemegdan, Beograd',
    description: 'Najveći regionalni festival posvećen kulturi konoplje, edukaciji i muzici.',
    image: 'https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    title: 'Adriatic Hemp Expo',
    date: '22. - 24. Avgusta',
    location: 'Novi Sad, Tvrđava',
    description: 'Međunarodna konferencija o medicinskoj primeni i industrijskom potencijalu.',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=800'
  }
];

// --- Components ---

const MissionModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const ideas = [
    { title: "Zeleni Hubovi", desc: "Prostori za rad i druženje gde je konoplja centralna tema dizajna i ponude." },
    { title: "Hempcrete Revolucija", desc: "Promocija gradnje ekoloških kuća od industrijske konoplje." },
    { title: "Art & Nature", desc: "Godišnje izložbe umetnika inspirisanih prirodnim lepotama i slobodom." },
    { title: "Eko-Moda", desc: "Podrška lokalnim dizajnerima koji koriste vlakna konoplje za održivu odeću." },
    { title: "Zelena Akademija", desc: "Besplatni kursevi o uzgoju, preradi i benefitima biljke za sve građane." }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1556928511-1140c1a5b84d?auto=format&fit=crop&q=80&w=2000" 
              alt="Cannabis leaf background"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
          </div>

          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-8 right-8 z-20 text-white/50 hover:text-white transition-colors p-2"
          >
            <X size={40} />
          </button>

          {/* Content */}
          <div className="relative z-10 max-w-4xl w-full px-6 py-12 text-white text-center">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="font-serif text-5xl md:text-7xl mb-12">Naša Kreativna <br /><span className="italic text-brand-green">Vizija</span></h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {ideas.map((idea, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl text-left hover:bg-white/20 transition-all cursor-default"
                  >
                    <h3 className="font-serif text-xl mb-2 text-brand-green">{idea.title}</h3>
                    <p className="text-sm text-white/70 leading-relaxed">{idea.desc}</p>
                  </motion.div>
                ))}
              </div>

              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                onClick={onClose}
                className="mt-16 px-10 py-4 bg-brand-green rounded-full font-bold hover:scale-105 transition-transform"
              >
                Nazad na početnu
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const LegalizationModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const laws = [
    { title: "Lična Sloboda", desc: "Dekriminalizacija poseda do 30 grama za ličnu upotrebu, jer sloboda pojedinca nema cenu." },
    { title: "Zeleni Porez", desc: "Prihodi od prodaje direktno se usmeravaju u fondove za mlade talente i obnovu bolnica u Srbiji." },
    { title: "Kućni Vrt", desc: "Pravo svakog građanina da uzgaja do 3 biljke u svom domu za sopstvene potrebe." },
    { title: "Kvalitet pre svega", desc: "Državna kontrola kvaliteta koja garantuje čistoću proizvoda i eliminiše crno tržište." },
    { title: "Medicinski Prioritet", desc: "Besplatna dostupnost ulja i preparata za sve pacijente kojima je to neophodno." }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0 z-0 bg-[#0a0a0a]">
            <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,_var(--color-brand-green)_0%,_transparent_70%)]" />
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
          </div>

          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-8 right-8 z-20 text-white/50 hover:text-white transition-colors p-2"
          >
            <X size={40} />
          </button>

          {/* Content */}
          <div className="relative z-10 max-w-5xl w-full px-6 py-12 text-white">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <span className="text-brand-green font-mono text-sm uppercase tracking-[0.4em] mb-4 block">Predlog Zakona 2026</span>
              <h2 className="font-serif text-5xl md:text-7xl mb-6">Zakon o <span className="italic text-brand-green">Zelenoj Slobodi</span></h2>
              <p className="text-white/50 max-w-2xl mx-auto text-lg">
                Naša vizija pravnog okvira koji Srbiju stavlja na mapu modernih, progresivnih i ekonomski stabilnih evropskih država.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {laws.map((law, i) => (
                <motion.div
                  key={i}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="group p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-brand-green/50 hover:bg-white/10 transition-all"
                >
                  <div className="w-12 h-12 rounded-full bg-brand-green/20 flex items-center justify-center mb-6 group-hover:bg-brand-green group-hover:text-black transition-colors">
                    <span className="font-bold">{i + 1}</span>
                  </div>
                  <h3 className="font-serif text-2xl mb-3">{law.title}</h3>
                  <p className="text-white/60 leading-relaxed text-sm">{law.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <button
                onClick={onClose}
                className="px-12 py-4 border border-white/20 rounded-full font-bold hover:bg-white hover:text-black transition-all"
              >
                Zatvori nacrt zakona
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const FestivalModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const gallery = [
    { url: "https://images.unsplash.com/photo-1459749411177-042180ce673c?auto=format&fit=crop&q=80&w=800", title: "Glavna Bina" },
    { url: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800", title: "Svetlosni Show" },
    { url: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=800", title: "Energija Publike" },
    { url: "https://images.unsplash.com/photo-1536633133036-69f8864d422a?auto=format&fit=crop&q=80&w=800", title: "Edukativni Vrt" },
    { url: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800", title: "Kamp Naselje" },
    { url: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=800", title: "Radionice na Otvorenom" },
    { url: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=800", title: "Noćna Magija" },
    { url: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800", title: "Eko Štandoovi" },
    { url: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&q=80&w=800", title: "Zajedništvo" },
    { url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800", title: "Zalazak Sunca" }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-brand-cream overflow-y-auto"
        >
          {/* Header */}
          <div className="sticky top-0 z-20 bg-brand-cream/80 backdrop-blur-md px-6 py-8 border-bottom border-black/5">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
              <div>
                <h2 className="font-serif text-4xl md:text-5xl">Atmosfera <span className="italic text-brand-green">Festivala</span></h2>
                <p className="text-black/40 mt-2">Zavirite u svet slobode, muzike i prirode kroz našu galeriju.</p>
              </div>
              <button 
                onClick={onClose}
                className="p-4 rounded-full bg-black text-white hover:scale-110 transition-transform"
              >
                <X size={24} />
              </button>
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              {gallery.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="relative group overflow-hidden rounded-3xl break-inside-avoid"
                >
                  <img 
                    src={img.url} 
                    alt={img.title}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                    <span className="text-white font-serif text-xl italic">{img.title}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-20 text-center pb-20">
              <h3 className="font-serif text-3xl mb-6 italic">Želite da doživite ovo uživo?</h3>
              <button 
                onClick={onClose}
                className="bg-brand-green text-white px-12 py-4 rounded-full font-bold hover:scale-105 transition-transform"
              >
                Pogledaj termine za 2026.
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const CommunityModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const stats = [
    { label: "Aktivnih Članova", value: "12,400+" },
    { label: "Organizovanih Događaja", value: "42" },
    { label: "Zasađenih Sadnica", value: "150k" },
    { label: "Peticija Potpisano", value: "85,000" }
  ];

  const stories = [
    { 
      title: "Plemenska Veza", 
      desc: "Naša zajednica nije samo grupa ljudi, već moderno pleme koje deli vrednosti slobode i poštovanja prema prirodi. Svaki član ima svoj jedinstveni 'Zeleni ID'." 
    },
    { 
      title: "Digitalni Aktivizam", 
      desc: "Koristimo blockchain tehnologiju za transparentno glasanje o lokacijama sledećih festivala. Vaš glas je bukvalno zapisan u kodu slobode." 
    },
    { 
      title: "Gerila Baštovanstvo", 
      desc: "Tajne akcije ozelenjavanja zapuštenih gradskih prostora industrijskom konopljom. Pretvaramo beton u kiseonik, jednu po jednu saksiju." 
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-white overflow-y-auto"
        >
          {/* Header */}
          <div className="sticky top-0 z-20 bg-white/80 backdrop-blur-md px-6 py-8 border-b border-black/5">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Users className="text-brand-green w-8 h-8" />
                <h2 className="font-serif text-3xl md:text-4xl">Naša <span className="italic text-brand-green">Zajednica</span></h2>
              </div>
              <button 
                onClick={onClose}
                className="p-4 rounded-full bg-brand-green text-white hover:rotate-90 transition-transform duration-300"
              >
                <X size={24} />
              </button>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-6 py-16">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center p-8 rounded-[2.5rem] bg-brand-cream/50 border border-brand-green/10"
                >
                  <div className="text-4xl md:text-5xl font-serif text-brand-green mb-2">{stat.value}</div>
                  <div className="text-xs uppercase tracking-widest text-black/40 font-bold">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Main Content Split */}
            <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className="space-y-8"
              >
                <h3 className="font-serif text-5xl leading-tight">Više od pokreta. <br /><span className="italic text-brand-green">Porodica.</span></h3>
                <p className="text-lg text-black/60 leading-relaxed">
                  Zelena Vizija je nastala u maloj garaži u predgrađu, gde je grupa entuzijasta sanjala o svetu u kojem biljka nije neprijatelj, već saveznik. Danas smo najveća mreža aktivista u regionu.
                </p>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green">
                    <Heart size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Zajednički cilj</h4>
                    <p className="text-black/50">Svaki festival koji organizujemo je korak bliže potpunoj slobodi izbora.</p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className="relative rounded-[3rem] overflow-hidden aspect-square"
              >
                <img 
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=1000" 
                  alt="Community gathering"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-green/20 mix-blend-overlay" />
              </motion.div>
            </div>

            {/* Fun Stories Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              {stories.map((story, i) => (
                <motion.div
                  key={i}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="p-10 rounded-[3rem] bg-black text-white hover:bg-brand-green transition-colors duration-500 group"
                >
                  <h4 className="font-serif text-2xl mb-4 group-hover:italic transition-all">{story.title}</h4>
                  <p className="text-white/60 leading-relaxed text-sm group-hover:text-white/90 transition-colors">{story.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-24 text-center pb-20">
              <button 
                onClick={onClose}
                className="px-12 py-5 bg-brand-green text-white rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl shadow-brand-green/20"
              >
                Postani Član Zajednice
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const JoinModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setEmail('');
        onClose();
      }, 3000);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[110] flex items-center justify-center overflow-hidden"
        >
          {/* Background Image - Jamaica */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=2000" 
              alt="Jamaica landscape"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
          </div>

          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-8 right-8 z-20 text-white/70 hover:text-white transition-colors p-2 bg-black/20 rounded-full backdrop-blur-md"
          >
            <X size={32} />
          </button>

          {/* Content Window */}
          <motion.div
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            className="relative z-10 max-w-md w-full mx-6 bg-white/90 backdrop-blur-xl p-10 rounded-[3rem] shadow-2xl text-center"
          >
            {!submitted ? (
              <>
                <div className="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="text-brand-green w-8 h-8" />
                </div>
                <h2 className="font-serif text-4xl mb-4 text-black">Postani deo <br /><span className="italic text-brand-green">Plemenske Veze</span></h2>
                <p className="text-black/60 mb-8 leading-relaxed">
                  Unesi svoju e-mail adresu i pridruži se hiljadama aktivista koji se bore za slobodu i prirodu.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input 
                    type="email" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tvoja@email.com" 
                    className="w-full px-6 py-4 rounded-2xl bg-black/5 border border-black/10 focus:outline-none focus:border-brand-green transition-all text-center text-lg"
                  />
                  <button 
                    type="submit"
                    className="w-full bg-brand-green text-white py-4 rounded-2xl font-bold text-lg hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-brand-green/20"
                  >
                    Potvrdi Članstvo
                  </button>
                </form>
                <p className="mt-6 text-[10px] uppercase tracking-widest text-black/30">
                  Poštujemo tvoju privatnost. Bez spama.
                </p>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-10"
              >
                <div className="w-20 h-20 bg-brand-green rounded-full flex items-center justify-center mx-auto mb-6">
                  <ShieldCheck className="text-white w-10 h-10" />
                </div>
                <h2 className="font-serif text-3xl mb-4 text-black">Dobrodošao u <br /><span className="italic text-brand-green">Zelenu Viziju!</span></h2>
                <p className="text-black/60">
                  Tvoja prijava je uspešno zabeležena. Uskoro ćeš dobiti prvi 'Zeleni ID' na svoj mejl.
                </p>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Navbar = ({ onOpenMission, onOpenLegalization, onOpenFestival, onOpenCommunity, onOpenJoin }: { 
  onOpenMission: () => void; 
  onOpenLegalization: () => void; 
  onOpenFestival: () => void; 
  onOpenCommunity: () => void;
  onOpenJoin: () => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      scrolled ? "bg-brand-cream/90 backdrop-blur-md shadow-sm" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <Leaf className="text-brand-green w-8 h-8" />
          <span className="font-serif text-2xl font-bold tracking-tight text-brand-green">Zelena Vizija</span>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <button 
            onClick={onOpenMission}
            className="text-sm font-medium uppercase tracking-widest hover:text-brand-green transition-colors"
          >
            Misija
          </button>
          <button 
            onClick={onOpenLegalization}
            className="text-sm font-medium uppercase tracking-widest hover:text-brand-green transition-colors"
          >
            Legalizacija
          </button>
          <button 
            onClick={onOpenFestival}
            className="text-sm font-medium uppercase tracking-widest hover:text-brand-green transition-colors"
          >
            Festivali
          </button>
          <button 
            onClick={onOpenCommunity}
            className="text-sm font-medium uppercase tracking-widest hover:text-brand-green transition-colors"
          >
            Zajednica
          </button>
          <motion.button 
            onClick={onOpenJoin}
            whileHover={{ 
              scale: 1.05,
              transition: {
                duration: 0.4,
                repeat: Infinity,
                repeatType: "reverse"
              }
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-brand-green text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-opacity-90 transition-all shadow-lg shadow-brand-green/20"
          >
            Pridruži se
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-brand-cream border-t border-black/5 p-6 flex flex-col gap-4 md:hidden"
          >
            <button 
              onClick={() => { onOpenMission(); setIsOpen(false); }}
              className="text-lg font-serif italic text-left"
            >
              Misija
            </button>
            <button 
              onClick={() => { onOpenLegalization(); setIsOpen(false); }}
              className="text-lg font-serif italic text-left"
            >
              Legalizacija
            </button>
            <button 
              onClick={() => { onOpenFestival(); setIsOpen(false); }}
              className="text-lg font-serif italic text-left"
            >
              Festivali
            </button>
            <button 
              onClick={() => { onOpenCommunity(); setIsOpen(false); }}
              className="text-lg font-serif italic text-left"
            >
              Zajednica
            </button>
            <button 
              onClick={() => { onOpenJoin(); setIsOpen(false); }}
              className="text-lg font-serif italic text-left text-brand-green font-bold"
            >
              Pridruži se
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ onOpenMission }: { onOpenMission: () => void }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0 bg-black">
        <motion.img 
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 15, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
          src="https://images.unsplash.com/photo-1603909223429-69bb7101f420?auto=format&fit=crop&q=80&w=2000" 
          alt="Vibrant macro cannabis leaf"
          className="w-full h-full object-cover opacity-60"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-brand-cream/20 to-brand-cream" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_var(--color-brand-cream)_100%)] opacity-30" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block text-brand-green font-mono text-sm uppercase tracking-[0.3em] mb-6 drop-shadow-lg font-bold">
            Budućnost je zelena
          </span>
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl leading-[0.9] mb-8 text-black drop-shadow-sm">
            Vreme je za <br />
            <span className="italic text-brand-green">Promenu.</span>
          </h1>
          <p className="text-lg md:text-xl text-black/90 max-w-2xl mx-auto mb-10 leading-relaxed font-semibold">
            Zelena Vizija je pokret posvećen edukaciji, destigmatizaciji i legalizaciji marihuane u Srbiji kroz kulturu, nauku i zajedništvo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={onOpenMission}
              className="bg-brand-green text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:scale-105 transition-transform shadow-2xl shadow-brand-green/40"
            >
              Saznaj više o misiji <ArrowRight size={18} />
            </button>
            <button className="bg-white/70 backdrop-blur-md border border-brand-green/40 text-brand-green px-8 py-4 rounded-full font-bold hover:bg-brand-green hover:text-white transition-all shadow-xl">
              Pogledaj festivale
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const FeatureSection = () => {
  const features = [
    {
      icon: <ShieldCheck className="w-10 h-10 text-brand-green" />,
      title: "Bezbednost i Regulacija",
      desc: "Zalažemo se za strogo regulisano tržište koje osigurava kvalitet i štiti mlade."
    },
    {
      icon: <Globe className="w-10 h-10 text-brand-green" />,
      title: "Ekonomski Potencijal",
      desc: "Otvaranje novih radnih mesta i značajni poreski prihodi za razvoj društva."
    },
    {
      icon: <Heart className="w-10 h-10 text-brand-green" />,
      title: "Medicinska Sloboda",
      desc: "Pravo pacijenata na prirodnu alternativu i olakšanje simptoma bez stigme."
    }
  ];

  return (
    <section id="legalizacija" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="p-8 rounded-3xl bg-brand-cream/30 hover:bg-brand-cream/50 transition-colors"
            >
              <div className="mb-6">{f.icon}</div>
              <h3 className="font-serif text-2xl mb-4">{f.title}</h3>
              <p className="text-black/60 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FestivalSection = () => {
  return (
    <section id="festivali" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-brand-green font-mono text-xs uppercase tracking-widest mb-4 block">Događaji</span>
            <h2 className="font-serif text-5xl md:text-6xl">Kulturni Festivali <br /><span className="italic">Zelene Vizije</span></h2>
          </div>
          <p className="text-black/50 max-w-sm">
            Pridružite nam se na proslavi prirode, muzike i edukacije. Naši festivali su mesta susreta i razmene ideja.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {UPCOMING_FESTIVALS.map((festival) => (
            <motion.div 
              key={festival.id}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-[2rem] bg-white shadow-xl shadow-black/5"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img 
                  src={festival.image} 
                  alt={festival.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4 text-sm font-medium text-brand-green">
                    <span className="flex items-center gap-1"><Calendar size={14} /> {festival.date}</span>
                    <span className="flex items-center gap-1"><MapPin size={14} /> {festival.location}</span>
                  </div>
                  <button 
                    onClick={() => {
                      const shareData = {
                        title: festival.title,
                        text: festival.description,
                        url: window.location.href,
                      };
                      if (navigator.share) {
                        navigator.share(shareData);
                      } else {
                        navigator.clipboard.writeText(`${festival.title}: ${festival.description} - ${window.location.href}`);
                        alert('Link kopiran u clipboard!');
                      }
                    }}
                    className="p-2 rounded-full hover:bg-brand-green/10 text-brand-green transition-colors"
                    title="Podeli"
                  >
                    <Share2 size={18} />
                  </button>
                </div>
                <h3 className="font-serif text-3xl mb-4">{festival.title}</h3>
                <p className="text-black/60 mb-8">{festival.description}</p>
                <button className="w-full py-4 rounded-2xl border border-black/10 font-bold hover:bg-black hover:text-white transition-all">
                  Rezerviraj ulaznicu
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Newsletter = () => {
  return (
    <section id="zajednica" className="py-24 px-6">
      <div className="max-w-5xl mx-auto bg-brand-green rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -ml-32 -mb-32 blur-3xl" />
        
        <div className="relative z-10">
          <h2 className="font-serif text-4xl md:text-6xl mb-6">Postani deo <br /><span className="italic opacity-80">Zelene Revolucije</span></h2>
          <p className="text-white/70 max-w-xl mx-auto mb-10 text-lg">
            Prijavi se na naš newsletter i budi prvi koji će saznati o novim inicijativama, festivalima i napretku legalizacije.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Tvoja e-mail adresa" 
              className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:bg-white/20 transition-all"
            />
            <button className="bg-white text-brand-green px-8 py-4 rounded-full font-bold hover:bg-brand-cream transition-colors">
              Prijavi se
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const ContactModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[120] flex items-center justify-center overflow-hidden"
        >
          {/* Background - Atmospheric Forest/Nature */}
          <div className="absolute inset-0 z-0 bg-[#050505]">
            <img 
              src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=2000" 
              alt="Deep forest background"
              className="w-full h-full object-cover opacity-30"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-green/20 via-transparent to-brand-green/10" />
            <div className="absolute inset-0 backdrop-blur-[4px]" />
          </div>

          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-8 right-8 z-20 text-white/50 hover:text-white transition-colors p-2"
          >
            <X size={40} />
          </button>

          {/* Content Card */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            className="relative z-10 max-w-lg w-full mx-6 text-center"
          >
            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-12 rounded-[4rem] shadow-2xl">
              <div className="w-24 h-24 bg-brand-green/20 rounded-full flex items-center justify-center mx-auto mb-8 border border-brand-green/30">
                <Users className="text-brand-green w-10 h-10" />
              </div>
              
              <span className="text-brand-green font-mono text-xs uppercase tracking-[0.5em] mb-4 block">Glavni Organizator</span>
              <h2 className="font-serif text-5xl text-white mb-2">Anna Jaskova</h2>
              <div className="h-px w-12 bg-brand-green/50 mx-auto mb-8" />
              
              <div className="space-y-6">
                <div className="flex flex-col items-center gap-2">
                  <span className="text-white/40 text-xs uppercase tracking-widest font-bold">Telefon</span>
                  <a 
                    href="tel:+381648195677" 
                    className="text-2xl md:text-3xl font-serif text-white hover:text-brand-green transition-colors"
                  >
                    +381 64 819 5677
                  </a>
                </div>
                
                <div className="flex flex-col items-center gap-2">
                  <span className="text-white/40 text-xs uppercase tracking-widest font-bold">E-mail</span>
                  <p className="text-lg text-white/80">anna.jaskova@zelenavizija.rs</p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="mt-12 px-10 py-4 bg-white text-black rounded-full font-bold hover:bg-brand-green hover:text-white transition-all"
              >
                Zatvori kontakt
              </button>
            </div>
            
            <p className="mt-8 text-white/30 text-sm italic">
              "Sloboda počinje razgovorom."
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Footer = ({ onOpenContact }: { onOpenContact: () => void }) => {
  return (
    <footer className="py-12 px-6 border-t border-black/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <Leaf className="text-brand-green w-6 h-6" />
          <span className="font-serif text-xl font-bold tracking-tight text-brand-green">Zelena Vizija</span>
        </button>
        
        <div className="flex gap-8 text-sm font-medium text-black/40">
          <a href="#" className="hover:text-brand-green transition-colors">Uslovi korišćenja</a>
          <a href="#" className="hover:text-brand-green transition-colors">Privatnost</a>
          <button onClick={onOpenContact} className="hover:text-brand-green transition-colors">Kontakt</button>
        </div>

        <p className="text-sm text-black/30">
          © 2026 Zelena Vizija. Sva prava pridržana.
        </p>
      </div>
    </footer>
  );
};

export default function App() {
  const [isMissionOpen, setIsMissionOpen] = useState(false);
  const [isLegalizationOpen, setIsLegalizationOpen] = useState(false);
  const [isFestivalOpen, setIsFestivalOpen] = useState(false);
  const [isCommunityOpen, setIsCommunityOpen] = useState(false);
  const [isJoinOpen, setIsJoinOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen selection:bg-brand-green selection:text-white">
      <Navbar 
        onOpenMission={() => setIsMissionOpen(true)} 
        onOpenLegalization={() => setIsLegalizationOpen(true)} 
        onOpenFestival={() => setIsFestivalOpen(true)}
        onOpenCommunity={() => setIsCommunityOpen(true)}
        onOpenJoin={() => setIsJoinOpen(true)}
      />
      <MissionModal isOpen={isMissionOpen} onClose={() => setIsMissionOpen(false)} />
      <LegalizationModal isOpen={isLegalizationOpen} onClose={() => setIsLegalizationOpen(false)} />
      <FestivalModal isOpen={isFestivalOpen} onClose={() => setIsFestivalOpen(false)} />
      <CommunityModal isOpen={isCommunityOpen} onClose={() => setIsCommunityOpen(false)} />
      <JoinModal isOpen={isJoinOpen} onClose={() => setIsJoinOpen(false)} />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <main>
        <Hero onOpenMission={() => setIsMissionOpen(true)} />
        <FeatureSection />
        <FestivalSection />
        <Newsletter />
      </main>
      <Footer onOpenContact={() => setIsContactOpen(true)} />
    </div>
  );
}
