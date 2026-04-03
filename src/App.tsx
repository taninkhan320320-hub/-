/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { content, Language } from './data/content';
import { 
  Leaf, Globe, Sun, BookOpen, Menu, X, AlertTriangle, 
  CheckCircle, Sprout, Cloud
} from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState<Language>('bn');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem('tulsi-lang') as Language;
    if (savedLang && (savedLang === 'bn' || savedLang === 'en')) {
      setLang(savedLang);
    }
  }, []);

  const toggleLanguage = () => {
    const newLang = lang === 'bn' ? 'en' : 'bn';
    setLang(newLang);
    localStorage.setItem('tulsi-lang', newLang);
  };

  const t = content[lang];

  return (
    <div className="min-h-screen font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-emerald-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Leaf className="w-6 h-6 text-emerald-600" />
              <span className="font-semibold text-xl text-emerald-800 tracking-tight">{t.nav.title}</span>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-6 text-sm font-medium">
              <a href="#about" className="text-stone-600 hover:text-emerald-600 transition-colors">{t.nav.about}</a>
              <a href="#types" className="text-stone-600 hover:text-emerald-600 transition-colors">{t.nav.types}</a>
              <a href="#benefits" className="text-stone-600 hover:text-emerald-600 transition-colors">{t.nav.benefits}</a>
              <a href="#uses" className="text-stone-600 hover:text-emerald-600 transition-colors">{t.nav.uses}</a>
              <a href="#cultivation" className="text-stone-600 hover:text-emerald-600 transition-colors">{t.nav.cultivation}</a>
              <a href="#precautions" className="text-stone-600 hover:text-emerald-600 transition-colors">{t.nav.precautions}</a>
              <button 
                onClick={toggleLanguage}
                className="flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full hover:bg-emerald-100 transition-colors ml-2"
              >
                <Globe className="w-4 h-4" />
                {lang === 'bn' ? 'English' : 'বাংলা'}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-4">
              <button 
                onClick={toggleLanguage}
                className="flex items-center gap-1 bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-full text-sm font-medium"
              >
                <Globe className="w-4 h-4" />
                {lang === 'bn' ? 'EN' : 'BN'}
              </button>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-stone-600">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-b border-emerald-100 px-4 pt-2 pb-4 space-y-2 shadow-lg">
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-stone-600 hover:bg-emerald-50 rounded-md">{t.nav.about}</a>
            <a href="#types" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-stone-600 hover:bg-emerald-50 rounded-md">{t.nav.types}</a>
            <a href="#benefits" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-stone-600 hover:bg-emerald-50 rounded-md">{t.nav.benefits}</a>
            <a href="#uses" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-stone-600 hover:bg-emerald-50 rounded-md">{t.nav.uses}</a>
            <a href="#cultivation" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-stone-600 hover:bg-emerald-50 rounded-md">{t.nav.cultivation}</a>
            <a href="#precautions" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-stone-600 hover:bg-emerald-50 rounded-md">{t.nav.precautions}</a>
          </div>
        )}
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative bg-emerald-900 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img 
              src="https://images.unsplash.com/photo-1628557044797-f21a177c37ec?q=80&w=2000&auto=format&fit=crop" 
              alt="Tulsi leaves background" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-900 to-transparent"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 bg-emerald-800/50 backdrop-blur-sm border border-emerald-700/50 px-4 py-2 rounded-full mb-8">
              <Leaf className="w-4 h-4 text-emerald-300" />
              <span className="text-emerald-100 text-sm font-medium tracking-wide uppercase">Ocimum tenuiflorum</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight max-w-4xl">
              {t.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100 max-w-2xl font-light">
              {t.hero.subtitle}
            </p>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 bg-stone-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-emerald-900 mb-4">{t.about.title}</h2>
              <div className="w-24 h-1 bg-emerald-200 mx-auto rounded-full"></div>
            </div>
            <p className="text-lg md:text-xl text-stone-700 leading-relaxed">
              {t.about.text}
            </p>
          </div>
        </section>

        {/* Types of Tulsi */}
        <section id="types" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-emerald-900 mb-4">{t.types.title}</h2>
              <div className="w-24 h-1 bg-emerald-200 mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {t.types.items.map((item) => (
                <div key={item.id} className="bg-emerald-50 rounded-2xl p-8 border border-emerald-100 hover:shadow-md transition-all">
                  <h3 className="text-2xl font-semibold text-emerald-900 mb-4">{item.name}</h3>
                  <p className="text-stone-700 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Nutrition Section */}
        <section className="py-20 bg-stone-900 text-stone-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-6">{t.nutrition.title}</h2>
              <p className="text-stone-300 text-lg mb-8">{t.nutrition.subtitle}</p>
              <ul className="space-y-4">
                {t.nutrition.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-lg">
                    <CheckCircle className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-20 bg-emerald-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-emerald-900 mb-4">{t.benefits.title}</h2>
              <p className="text-lg text-stone-600 max-w-2xl mx-auto">{t.benefits.subtitle}</p>
              <div className="w-24 h-1 bg-emerald-300 mx-auto rounded-full mt-6"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {t.benefits.items.map((item) => (
                <div key={item.id} className="bg-white rounded-2xl p-8 shadow-sm border border-emerald-100 hover:shadow-lg hover:-translate-y-1 transition-all group flex flex-col">
                  <h3 className="text-xl font-semibold text-stone-900 mb-3">{item.title}</h3>
                  <p className="text-stone-600 leading-relaxed flex-grow">{item.desc}</p>
                  {item.reference && (
                    <div className="mt-5 pt-4 border-t border-emerald-50 flex items-start gap-2">
                      <BookOpen className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-xs text-stone-500 italic">{item.reference}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Uses Section */}
        <section id="uses" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-emerald-900 mb-4">{t.uses.title}</h2>
              <div className="w-24 h-1 bg-emerald-200 mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {t.uses.items.map((item) => (
                <div key={item.id} className="p-6 rounded-2xl border border-stone-200 bg-stone-50 hover:border-emerald-300 transition-colors">
                  <h3 className="text-xl font-semibold text-stone-900 mb-2">{item.title}</h3>
                  <p className="text-stone-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Culture & History */}
        <section className="py-20 bg-stone-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-emerald-900 mb-4">{t.culture.title}</h2>
              <div className="w-24 h-1 bg-emerald-300 mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {t.culture.items.map((item, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-stone-200">
                  <h3 className="text-xl font-semibold text-stone-900 mb-4">{item.title}</h3>
                  <p className="text-stone-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cultivation */}
        <section id="cultivation" className="py-20 bg-emerald-900 text-emerald-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">{t.cultivation.title}</h2>
              <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {t.cultivation.cards.map((card, idx) => (
                <div key={idx} className="bg-emerald-800/50 p-8 rounded-3xl border border-emerald-700 hover:bg-emerald-800/70 transition-colors">
                  <div className="flex items-center gap-4 mb-6">
                    {card.icon === 'sprout' && <Sprout className="w-8 h-8 text-emerald-300" />}
                    {card.icon === 'sun' && <Sun className="w-8 h-8 text-emerald-300" />}
                    {card.icon === 'cloud' && <Cloud className="w-8 h-8 text-emerald-300" />}
                    <h3 className="text-2xl font-semibold text-white">{card.title}</h3>
                  </div>
                  <ul className="space-y-4">
                    {card.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-3 text-emerald-100">
                        <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Modern Research */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-emerald-900 mb-4">{t.research.title}</h2>
              <p className="text-lg text-stone-600 max-w-2xl mx-auto">{t.research.desc}</p>
              <div className="w-24 h-1 bg-emerald-200 mx-auto rounded-full mt-6"></div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-8 border border-stone-200">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {t.research.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-stone-700 font-medium leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Precautions / Side Effects */}
        <section id="precautions" className="py-16 bg-stone-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-emerald-900 mb-4">{t.precautions.title}</h2>
              <p className="text-lg text-stone-600 max-w-2xl mx-auto">{t.precautions.desc}</p>
              <div className="w-24 h-1 bg-stone-300 mx-auto rounded-full mt-6"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {t.precautions.items.map((item, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm hover:border-stone-300 hover:shadow-md transition-all relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-stone-400"></div>
                  <div className="flex items-start gap-3 mb-3">
                    <AlertTriangle className="w-5 h-5 text-stone-500 shrink-0 mt-0.5" />
                    <h3 className="text-lg font-semibold text-stone-900">{item.title}</h3>
                  </div>
                  <p className="text-stone-600 leading-relaxed text-sm pl-8">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 py-12 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            <div className="flex items-center gap-2">
              <Leaf className="w-6 h-6 text-emerald-500" />
              <span className="font-semibold text-xl text-stone-200 tracking-tight">{t.nav.title}</span>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="#about" className="hover:text-emerald-400 transition-colors">{t.nav.about}</a>
              <a href="#benefits" className="hover:text-emerald-400 transition-colors">{t.nav.benefits}</a>
              <a href="#precautions" className="hover:text-emerald-400 transition-colors">{t.nav.precautions}</a>
            </div>
          </div>
          <div className="pt-8 border-t border-stone-800 text-center text-sm">
            <p className="mb-2">© {new Date().getFullYear()} {t.nav.title}.</p>
            <p className="text-stone-500 italic max-w-2xl mx-auto">{t.footer.disclaimer}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
