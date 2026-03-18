/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronRight, 
  ChevronLeft, 
  RotateCcw, 
  Info, 
  BookOpen, 
  Heart, 
  Shield, 
  Zap, 
  ArrowRight,
  Menu,
  X,
  ExternalLink
} from 'lucide-react';
import { questions, typesData, EnneagramType } from './data';

type AppState = 'home' | 'test' | 'results' | 'explore' | 'explore-all';

export default function App() {
  const [state, setState] = useState<AppState>('home');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [selectedTypeId, setSelectedTypeId] = useState<number | null>(null);
  const [journalText, setJournalText] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Scroll to top on state change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [state, selectedTypeId]);

  const progress = (Object.keys(answers).length / questions.length) * 100;

  const handleAnswer = (value: number) => {
    const question = questions[currentQuestionIndex];
    setAnswers(prev => ({ ...prev, [question.id]: value }));
    
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setState('results');
    }
  };

  const calculateResults = useMemo(() => {
    const scores: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 };
    
    questions.forEach(q => {
      if (answers[q.id]) {
        scores[q.type] += answers[q.id];
      }
    });

    const sortedTypes = Object.entries(scores)
      .map(([id, score]) => ({ id: parseInt(id), score }))
      .sort((a, b) => b.score - a.score);

    const mainType = sortedTypes[0];
    
    // Calculate wing
    const leftWingId = mainType.id === 1 ? 9 : mainType.id - 1;
    const rightWingId = mainType.id === 9 ? 1 : mainType.id + 1;
    const wing = scores[leftWingId] > scores[rightWingId] ? leftWingId : rightWingId;

    return {
      main: mainType.id,
      wing,
      alternatives: sortedTypes.slice(1, 4).map(t => t.id)
    };
  }, [answers]);

  const resetTest = () => {
    setAnswers({});
    setCurrentQuestionIndex(0);
    setState('home');
    setSelectedTypeId(null);
  };

  const renderHome = () => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl mx-auto text-center py-12 px-6"
    >
      <h1 className="text-4xl md:text-5xl font-serif font-light mb-6 text-stone-800">
        Explorador del Eneagrama
      </h1>
      <p className="text-lg text-stone-600 mb-8 leading-relaxed italic">
        "Este resultado no te define. Es apenas un mapa posible para entender ciertos patrones que quizás hoy están operando en vos."
      </p>
      <div className="bg-white/50 border border-stone-200 p-8 rounded-2xl mb-10 shadow-sm">
        <h2 className="text-xl font-medium mb-4 text-stone-700">Antes de empezar</h2>
        <ul className="text-left space-y-3 text-stone-600">
          <li className="flex gap-3">
            <span className="text-sage-600 font-bold">01.</span>
            Respondé desde quién sos hoy, no desde quién te gustaría ser.
          </li>
          <li className="flex gap-3">
            <span className="text-sage-600 font-bold">02.</span>
            Tratá de no pensar demasiado; la primera respuesta suele ser la más honesta.
          </li>
          <li className="flex gap-3">
            <span className="text-sage-600 font-bold">03.</span>
            El Eneagrama no es una etiqueta, es una invitación a la libertad.
          </li>
        </ul>
      </div>
      <button 
        onClick={() => setState('test')}
        className="bg-stone-800 text-stone-50 px-10 py-4 rounded-full text-lg font-medium hover:bg-stone-700 transition-all shadow-lg hover:shadow-xl active:scale-95"
      >
        Comenzar exploración
      </button>
      
      <div className="mt-16 text-stone-400 text-sm italic">
      </div>
    </motion.div>
  );

  const renderTest = () => {
    const question = questions[currentQuestionIndex];
    return (
      <div className="max-w-2xl mx-auto py-12 px-6">
        <div className="mb-12">
          <div className="flex justify-between items-end mb-2">
            <span className="text-xs uppercase tracking-widest text-stone-400 font-bold">
              Pregunta {currentQuestionIndex + 1} de {questions.length}
            </span>
            <span className="text-xs font-mono text-stone-400">{Math.round(progress)}%</span>
          </div>
          <div className="h-1 w-full bg-stone-200 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-stone-800"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={question.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="min-h-[300px] flex flex-col justify-center"
          >
            <h2 className="text-2xl md:text-3xl font-serif text-stone-800 mb-12 leading-snug">
              {question.text}
            </h2>

            <div className="grid grid-cols-1 gap-3">
              {[
                { val: 1, label: "Para nada de acuerdo" },
                { val: 2, label: "Poco de acuerdo" },
                { val: 3, label: "A veces / Neutral" },
                { val: 4, label: "Bastante de acuerdo" },
                { val: 5, label: "Totalmente de acuerdo" }
              ].map((option) => (
                <button
                  key={option.val}
                  onClick={() => handleAnswer(option.val)}
                  className="group flex items-center justify-between p-5 rounded-xl border border-stone-200 bg-white hover:border-stone-800 hover:bg-stone-50 transition-all text-left"
                >
                  <span className="text-stone-700 group-hover:text-stone-900 font-medium">{option.label}</span>
                  <div className="w-6 h-6 rounded-full border border-stone-300 flex items-center justify-center group-hover:border-stone-800">
                    <div className="w-2 h-2 rounded-full bg-stone-800 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-12 flex justify-between">
          <button 
            disabled={currentQuestionIndex === 0}
            onClick={() => setCurrentQuestionIndex(prev => prev - 1)}
            className="flex items-center gap-2 text-stone-400 hover:text-stone-600 disabled:opacity-0 transition-all"
          >
            <ChevronLeft size={20} />
            Anterior
          </button>
        </div>
      </div>
    );
  };

  const renderResults = () => {
    const { main, wing, alternatives } = calculateResults;
    const mainType = typesData[main];

    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-4xl mx-auto py-12 px-6"
      >
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-[0.3em] text-stone-400 font-bold mb-4">Tu Esencia Probable</h2>
          <h1 className="text-5xl md:text-7xl font-serif font-light text-stone-800 mb-4">
            Eneatipo {main}
          </h1>
          <p className="text-2xl text-stone-500 font-serif italic">{mainType.name}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white p-8 rounded-3xl border border-stone-100 shadow-sm text-center">
            <p className="text-xs uppercase tracking-widest text-stone-400 mb-2">Ala posible</p>
            <p className="text-xl font-medium text-stone-700">Eneatipo {wing}</p>
          </div>
          {alternatives.map((altId, idx) => (
            <div key={altId} className="bg-white/50 p-8 rounded-3xl border border-stone-100 shadow-sm text-center">
              <p className="text-xs uppercase tracking-widest text-stone-400 mb-2">Alternativa {idx + 1}</p>
              <p className="text-xl font-medium text-stone-700">Eneatipo {altId}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <button 
            onClick={() => {
              setSelectedTypeId(main);
              setState('explore');
            }}
            className="bg-stone-800 text-stone-50 px-10 py-4 rounded-full text-lg font-medium hover:bg-stone-700 transition-all shadow-lg flex items-center gap-3"
          >
            Explorar mi tipo <ArrowRight size={20} />
          </button>
          <button 
            onClick={resetTest}
            className="text-stone-500 px-8 py-4 rounded-full text-lg font-medium hover:bg-stone-100 transition-all flex items-center gap-2"
          >
            <RotateCcw size={18} /> Recomenzar
          </button>
        </div>
      </motion.div>
    );
  };

  const renderTypeDetail = (typeId: number) => {
    const type = typesData[typeId];
    if (!type) return null;

    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto py-12 px-6"
      >
        <div className="mb-12">
          <button 
            onClick={() => state === 'explore-all' ? setState('explore-all') : setState('results')}
            className="flex items-center gap-2 text-stone-400 hover:text-stone-600 mb-8 transition-all"
          >
            <ChevronLeft size={20} /> Volver
          </button>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-stone-200 pb-8">
            <div>
              <h2 className="text-sm uppercase tracking-[0.3em] text-stone-400 font-bold mb-2">Eneatipo {type.id}</h2>
              <h1 className="text-4xl md:text-6xl font-serif font-light text-stone-800">{type.name}</h1>
              <p className="text-xl text-stone-500 font-serif italic mt-2">{type.alias}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <section>
            <h3 className="flex items-center gap-2 text-lg font-medium text-stone-800 mb-6">
              <Shield size={20} className="text-stone-400" /> Estructura del Ego
            </h3>
            <div className="space-y-6">
              <div>
                <p className="text-xs uppercase tracking-widest text-stone-400 mb-1">Miedo Básico</p>
                <p className="text-stone-700 leading-relaxed">{type.coreFear}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-stone-400 mb-1">Deseo Básico</p>
                <p className="text-stone-700 leading-relaxed">{type.coreDesire}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-stone-400 mb-1">Motivación Principal</p>
                <p className="text-stone-700 leading-relaxed">{type.motivation}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-stone-400 mb-1">Mecanismo de Defensa</p>
                <p className="text-stone-700 leading-relaxed">{type.defenseMechanism}</p>
              </div>
            </div>
          </section>

          <section>
            <h3 className="flex items-center gap-2 text-lg font-medium text-stone-800 mb-6">
              <Zap size={20} className="text-stone-400" /> Sombra y Luz
            </h3>
            <div className="space-y-6">
              <div className="bg-stone-50 p-6 rounded-2xl border border-stone-100">
                <p className="text-xs uppercase tracking-widest text-stone-400 mb-2">La Sombra</p>
                <p className="text-stone-700 leading-relaxed italic">{type.shadow}</p>
              </div>
              <div className="bg-stone-800 text-stone-50 p-6 rounded-2xl shadow-md">
                <p className="text-xs uppercase tracking-widest text-stone-300 mb-2">Dones y Virtudes</p>
                <p className="leading-relaxed">{type.gifts}</p>
              </div>
            </div>
          </section>
        </div>

        <section className="mb-20">
          <h3 className="flex items-center gap-2 text-lg font-medium text-stone-800 mb-8">
            <BookOpen size={20} className="text-stone-400" /> Niveles de Conciencia
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: 'Nivel Bajo', content: type.levels.low, color: 'border-red-100 bg-red-50/30' },
              { label: 'Nivel Medio', content: type.levels.average, color: 'border-stone-100 bg-stone-50/50' },
              { label: 'Nivel Alto', content: type.levels.high, color: 'border-sage-100 bg-sage-50/30' }
            ].map((lvl) => (
              <div key={lvl.label} className={`p-6 rounded-2xl border ${lvl.color}`}>
                <p className="text-xs uppercase tracking-widest text-stone-400 mb-3 font-bold">{lvl.label}</p>
                <p className="text-stone-700 text-sm leading-relaxed">{lvl.content}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20 bg-white p-10 rounded-3xl border border-stone-100 shadow-sm">
          <h3 className="flex items-center gap-2 text-lg font-medium text-stone-800 mb-8">
            <RotateCcw size={20} className="text-stone-400" /> Dinámica de Flechas
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-xs uppercase tracking-widest text-stone-400 mb-3 font-bold">Dirección de Estrés (Desintegración)</p>
              <p className="text-stone-700 leading-relaxed mb-4">
                Hacia el <strong>Eneatipo {type.stressArrow}</strong>: {type.stressDescription}
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-stone-400 mb-3 font-bold">Dirección de Crecimiento (Integración)</p>
              <p className="text-stone-700 leading-relaxed mb-4">
                Hacia el <strong>Eneatipo {type.growthArrow}</strong>: {type.growthDescription}
              </p>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h3 className="flex items-center gap-2 text-lg font-medium text-stone-800 mb-8">
            <Heart size={20} className="text-stone-400" /> Espacio de Reflexión
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-stone-600 italic">Tomate un momento para respirar y observar estas preguntas en vos:</p>
              <ul className="space-y-4">
                {type.reflectionQuestions.map((q, i) => (
                  <li key={i} className="flex gap-3 text-stone-700 font-serif text-lg">
                    <span className="text-stone-300">¿</span>
                    {q}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <textarea 
                placeholder="Escribí acá lo que sientas..."
                value={journalText}
                onChange={(e) => setJournalText(e.target.value)}
                className="w-full h-64 p-6 rounded-2xl border border-stone-200 bg-stone-50/50 focus:ring-2 focus:ring-stone-200 focus:border-stone-400 outline-none transition-all font-serif italic"
              />
              <p className="text-xs text-stone-400 mt-2 text-right">Tus notas no se guardan en ningún servidor, son solo para vos en este momento.</p>
            </div>
          </div>
        </section>

        <section className="mb-20 bg-stone-800 text-stone-50 p-10 rounded-3xl">
          <h3 className="text-xl font-medium mb-8 text-stone-200">Guía para el Crecimiento</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {type.guidance.map((g, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-stone-700 flex items-center justify-center shrink-0 text-xs font-bold">
                  {i + 1}
                </div>
                <p className="text-stone-300 leading-relaxed">{g}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="text-center pt-12 border-t border-stone-200">
          <p className="text-stone-400 text-sm mb-8 italic">
            "Recordá: el Eneagrama no es para ponerte en una caja, sino para mostrarte la caja en la que ya estás y ayudarte a salir de ella."
          </p>
          <button 
            onClick={resetTest}
            className="text-stone-500 hover:text-stone-800 transition-all font-medium flex items-center gap-2 mx-auto"
          >
            <RotateCcw size={18} /> Volver al inicio
          </button>
        </div>
      </motion.div>
    );
  };

  const renderExploreAll = () => (
    <div className="max-w-6xl mx-auto py-12 px-6">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-serif font-light text-stone-800 mb-4">Explorar los 9 Eneatipos</h1>
        <p className="text-stone-500">Conocé los diferentes patrones de la personalidad humana.</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.values(typesData).map((type) => (
          <button
            key={type.id}
            onClick={() => {
              setSelectedTypeId(type.id);
              setState('explore');
            }}
            className="group bg-white p-8 rounded-3xl border border-stone-100 shadow-sm hover:shadow-md transition-all text-left"
          >
            <p className="text-xs uppercase tracking-widest text-stone-400 mb-2 font-bold">Eneatipo {type.id}</p>
            <h3 className="text-2xl font-serif text-stone-800 group-hover:text-stone-600 transition-colors mb-2">{type.name}</h3>
            <p className="text-stone-500 text-sm italic mb-4">{type.alias}</p>
            <div className="flex items-center gap-1 text-xs font-medium text-stone-400 group-hover:text-stone-800 transition-colors">
              Explorar <ChevronRight size={14} />
            </div>
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2D2D2D] font-sans selection:bg-stone-200 selection:text-stone-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#FDFBF7]/80 backdrop-blur-md border-b border-stone-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <button 
            onClick={() => setState('home')}
            className="text-lg font-serif font-light tracking-tight hover:opacity-70 transition-opacity"
          >
            Explorador del Eneagrama
          </button>
          
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => setState('home')} className={`text-sm font-medium transition-colors ${state === 'home' ? 'text-stone-900' : 'text-stone-400 hover:text-stone-600'}`}>Inicio</button>
            <button onClick={() => setState('explore-all')} className={`text-sm font-medium transition-colors ${state === 'explore-all' ? 'text-stone-900' : 'text-stone-400 hover:text-stone-600'}`}>Explorar Tipos</button>
            <button onClick={() => setState('test')} className="bg-stone-800 text-stone-50 px-5 py-2 rounded-full text-sm font-medium hover:bg-stone-700 transition-all">Hacer Test</button>
          </div>

          <button className="md:hidden text-stone-800" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-stone-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              <button onClick={() => { setState('home'); setIsMenuOpen(false); }} className="text-left py-2 font-medium">Inicio</button>
              <button onClick={() => { setState('explore-all'); setIsMenuOpen(false); }} className="text-left py-2 font-medium">Explorar Tipos</button>
              <button onClick={() => { setState('test'); setIsMenuOpen(false); }} className="text-left py-2 font-medium text-stone-500">Hacer Test</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="pb-24">
        {state === 'home' && renderHome()}
        {state === 'test' && renderTest()}
        {state === 'results' && renderResults()}
        {state === 'explore' && selectedTypeId && renderTypeDetail(selectedTypeId)}
        {state === 'explore-all' && renderExploreAll()}
      </main>

      {/* Footer / Disclaimer */}
      <footer className="bg-stone-100 py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 text-stone-400 mb-4">
            <Info size={16} />
            <span className="text-xs uppercase tracking-widest font-bold">Aviso Ético</span>
          </div>
          <p className="text-stone-500 text-sm max-w-xl mx-auto leading-relaxed">
            Esta herramienta es para la auto-exploración y no reemplaza una evaluación psicológica profesional. 
            El Eneagrama es un sistema dinámico y complejo; usalo con respeto hacia vos mismo y hacia los demás.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4">
            <div className="flex justify-center gap-6">
              <a href="#" className="text-stone-400 hover:text-stone-600 transition-colors"><ExternalLink size={18} /></a>
            </div>
            <p className="text-stone-400 text-xs font-medium tracking-widest uppercase">2026 - Rincón Zen</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
