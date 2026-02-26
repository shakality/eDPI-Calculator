import React from 'react';
import { motion } from 'motion/react';
import { Calculator, Info, Target, MousePointer2, ChevronDown, HelpCircle } from 'lucide-react';

const GAME_DATA = {
  valorant: {
    name: 'Valorant',
    proRange: [200, 400],
    avgPro: 280,
    description: 'Valorant is a tactical shooter where precision and crosshair placement are key. Most pros use a lower sensitivity for better control.',
  },
  cs2: {
    name: 'Counter-Strike 2',
    proRange: [600, 1000],
    avgPro: 800,
    description: 'CS2 requires a balance of fast flicks and steady tracking. eDPI ranges vary more than in Valorant due to different roles.',
  }
};

export default function Home() {
  const [game, setGame] = React.useState<'valorant' | 'cs2'>('valorant');
  const [dpi, setDpi] = React.useState<string>('800');
  const [sensitivity, setSensitivity] = React.useState<string>('0.35');
  
  const edpi = React.useMemo(() => {
    const d = parseFloat(dpi);
    const s = parseFloat(sensitivity);
    if (isNaN(d) || isNaN(s)) return 0;
    return Math.round(d * s);
  }, [dpi, sensitivity]);

  const currentData = GAME_DATA[game];
  const isWithinRange = edpi >= currentData.proRange[0] && edpi <= currentData.proRange[1];

  // Inject Schema.org JSON-LD
  React.useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "eDPI Calculator",
      "url": window.location.origin,
      "description": "Calculate your eDPI for Valorant and CS2. Compare your sensitivity with professional players.",
      "applicationCategory": "Utility",
      "operatingSystem": "All",
      "about": {
        "@type": "Thing",
        "name": "eDPI (Effective Dots Per Inch)"
      }
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is eDPI?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "eDPI stands for Effective Dots Per Inch. It is calculated by multiplying your mouse DPI by your in-game sensitivity."
          }
        },
        {
          "@type": "Question",
          "name": "What is a good eDPI for Valorant?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most professional Valorant players use an eDPI between 200 and 400. However, the best sensitivity is the one you are most comfortable with."
          }
        }
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify([schema, faqSchema]);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Calculator Area */}
        <div className="lg:col-span-2 space-y-12">
          <section>
            <div className="flex items-center space-x-3 mb-8">
              <div className="p-3 bg-brand-primary/10 rounded-xl">
                <Calculator className="w-8 h-8 text-brand-primary" />
              </div>
              <div>
                <h1 className="text-4xl font-black tracking-tight uppercase">eDPI Calculator</h1>
                <p className="text-white/50 text-sm font-mono uppercase tracking-widest">Precision Sensitivity Tool v2.6</p>
              </div>
            </div>

            <div className="glass rounded-3xl p-8 md:p-12 relative overflow-hidden">
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/5 blur-[100px] -mr-32 -mt-32" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
                <div className="space-y-8">
                  {/* Game Selection */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-white/50 mb-3">Select Game</label>
                    <div className="relative">
                      <select 
                        value={game}
                        onChange={(e) => setGame(e.target.value as any)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 appearance-none focus:outline-none focus:border-brand-primary transition-all cursor-pointer font-medium"
                      >
                        <option value="valorant" className="bg-brand-surface">Valorant</option>
                        <option value="cs2" className="bg-brand-surface">CS2 (Counter-Strike 2)</option>
                      </select>
                      <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30 pointer-events-none" />
                    </div>
                  </div>

                  {/* DPI Input */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-white/50 mb-3">Mouse DPI</label>
                    <div className="relative">
                      <input 
                        type="number" 
                        value={dpi}
                        onChange={(e) => setDpi(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-brand-primary transition-all font-mono text-xl"
                        placeholder="e.g. 800"
                      />
                      <MousePointer2 className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20" />
                    </div>
                  </div>

                  {/* Sensitivity Input */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-white/50 mb-3">In-Game Sensitivity</label>
                    <div className="relative">
                      <input 
                        type="number" 
                        step="0.01"
                        value={sensitivity}
                        onChange={(e) => setSensitivity(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-brand-primary transition-all font-mono text-xl"
                        placeholder="e.g. 0.35"
                      />
                      <Target className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20" />
                    </div>
                  </div>
                </div>

                {/* Result Display */}
                <div className="flex flex-col justify-center items-center text-center p-8 bg-white/5 rounded-2xl border border-white/5">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-2">Your Effective DPI</span>
                  <motion.div 
                    key={edpi}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-7xl md:text-8xl font-black text-brand-primary mb-4 drop-shadow-[0_0_20px_rgba(0,255,0,0.3)]"
                  >
                    {edpi}
                  </motion.div>
                  
                  <div className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest ${isWithinRange ? 'bg-brand-primary/20 text-brand-primary' : 'bg-white/10 text-white/50'}`}>
                    {isWithinRange ? 'Pro Range Match' : 'Custom Range'}
                  </div>

                  <div className="mt-8 pt-8 border-t border-white/5 w-full">
                    <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-white/30 mb-4">
                      <span>Pro Range</span>
                      <span>{currentData.proRange[0]} - {currentData.proRange[1]}</span>
                    </div>
                    <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden relative">
                      <div 
                        className="absolute h-full bg-brand-primary/20" 
                        style={{ 
                          left: `${(currentData.proRange[0] / (currentData.proRange[1] * 1.5)) * 100}%`,
                          width: `${((currentData.proRange[1] - currentData.proRange[0]) / (currentData.proRange[1] * 1.5)) * 100}%`
                        }} 
                      />
                      <motion.div 
                        className="absolute h-full w-1 bg-brand-primary z-10"
                        animate={{ left: `${Math.min((edpi / (currentData.proRange[1] * 1.5)) * 100, 100)}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SEO Content Section */}
          <section className="prose-custom max-w-none">
            <h2>What is eDPI and Why Does It Matter?</h2>
            <p>
              If you've ever wondered why your aim feels inconsistent or why you can't seem to replicate the precision of your favorite professional players, the answer likely lies in your <strong>eDPI (Effective Dots Per Inch)</strong>. 
              While most gamers focus solely on their mouse DPI or their in-game sensitivity, neither of these numbers tells the whole story on its own.
            </p>
            <p>
              eDPI is the universal language of FPS sensitivity. By multiplying your hardware DPI by your software sensitivity, you get a single, comparable value. This allows a player using 400 DPI and 0.8 sensitivity to realize they have the exact same "true" sensitivity as someone using 800 DPI and 0.4 sensitivity (both result in 320 eDPI).
            </p>

            <h2>How to Find Your Perfect Sensitivity</h2>
            <p>
              Finding the "perfect" sensitivity is a journey of trial and error, but there are scientific ways to narrow it down:
            </p>
            <ul>
              <li><strong>The 180-Degree Test:</strong> You should be able to perform a comfortable 180-degree turn with one full swipe across your mousepad. If you run out of room, your sensitivity is too low. If you spin 360 degrees, it might be too high.</li>
              <li><strong>Tracking vs. Flicking:</strong> Higher sensitivity often helps with fast tracking (common in games like Apex Legends or Overwatch), while lower sensitivity provides the stability needed for precise headshots in tactical shooters like Valorant and CS2.</li>
              <li><strong>Muscle Memory:</strong> Once you find a range that feels natural, stick with it. Constant changes reset your muscle memory and hinder your long-term improvement.</li>
            </ul>

            <h2>High DPI vs. Low DPI: The Great Debate</h2>
            <p>
              Is it better to have 400 DPI or 1600 DPI? Modern sensors have made this debate less about hardware limitations and more about input latency. 
              Higher DPI settings (like 1600 or 3200) actually have slightly lower input latency because the mouse reports movement more frequently. However, many pros stick to 400 or 800 DPI because it feels "smoother" and less jittery on older mousepads or at very low sensitivities.
            </p>

            <div className="bg-white/5 rounded-2xl p-8 border border-white/5 my-12">
              <h2 className="mt-0 flex items-center gap-3">
                <HelpCircle className="text-brand-primary" />
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-white font-bold mb-2">How do I calculate eDPI?</h3>
                  <p className="text-sm">Simply multiply your Mouse DPI (e.g., 800) by your In-Game Sensitivity (e.g., 0.35). The result is your eDPI (280).</p>
                </div>
                <div>
                  <h3 className="text-white font-bold mb-2">Is my eDPI too high?</h3>
                  <p className="text-sm">If you find yourself overshooting targets or struggling to make micro-adjustments, your eDPI might be too high. Most Valorant pros stay under 400 eDPI.</p>
                </div>
                <div>
                  <h3 className="text-white font-bold mb-2">Does eDPI transfer between games?</h3>
                  <p className="text-sm">No. Because different games use different sensitivity scales, an eDPI of 300 in Valorant is not the same as 300 in CS2. Use a converter to match your "cm/360" across games.</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="space-y-8">
          <div className="glass rounded-2xl p-6">
            <h3 className="font-bold uppercase tracking-widest text-xs text-white/50 mb-6 flex items-center gap-2">
              <Info className="w-4 h-4 text-brand-primary" />
              Pro Settings Guide
            </h3>
            <div className="space-y-6">
              <div>
                <p className="text-sm font-bold mb-2">{currentData.name} Averages</p>
                <p className="text-xs text-white/50 leading-relaxed">
                  {currentData.description}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                  <span className="block text-[10px] uppercase tracking-widest text-white/30 mb-1">Avg Pro</span>
                  <span className="text-xl font-black text-brand-primary">{currentData.avgPro}</span>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                  <span className="block text-[10px] uppercase tracking-widest text-white/30 mb-1">Median</span>
                  <span className="text-xl font-black text-white/70">{Math.round((currentData.proRange[0] + currentData.proRange[1]) / 2)}</span>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
