import React from 'react';
import { Brain, Mic, Smartphone, Infinity } from 'lucide-react';

const Hacks: React.FC = () => {
  const hacks = [
    {
      id: 1,
      icon: Brain,
      title: "Aprenda sem estudar",
      content: "Você fica bom criando conteúdo quando consome o tipo de conteúdo que quer postar. Sem decorar. Sem forçar. Seu cérebro absorve padrões."
    },
    {
      id: 2,
      icon: Mic,
      title: "Fale bem com espelhamento",
      content: "Assista pessoas que falam bem. Seu cérebro copia a naturalidade delas."
    },
    {
      id: 3,
      icon: Smartphone,
      title: "O truque do TikTok",
      content: "Grave e poste primeiro no TikTok. Depois exporte para os Reels. Zero gasto de memória."
    },
    {
      id: 4,
      icon: Infinity,
      title: "Criação infinita",
      content: "Consuma conteúdos curtos. Consuma conteúdos diretos. Seu cérebro replica o formato automaticamente."
    }
  ];

  return (
    <div className="max-w-3xl mx-auto pb-20">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-light tracking-tight text-white mb-2">Hacks do Conteúdo Fácil</h2>
        <p className="text-zinc-500 font-light">Estratégias para destravar sua criatividade</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {hacks.map((hack) => (
          <div 
            key={hack.id} 
            className="bg-zinc-900/40 border border-white/5 rounded-2xl p-8 hover:bg-zinc-900/60 transition-all duration-300 flex flex-col h-full"
          >
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6">
              <hack.icon className="w-6 h-6 text-white" />
            </div>
            
            <h3 className="text-xl font-medium text-white mb-4">
              <span className="text-zinc-600 font-mono text-sm block mb-1">HACK {hack.id}</span>
              {hack.title}
            </h3>
            
            <p className="text-zinc-400 font-light leading-relaxed flex-grow">
              {hack.content}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-2xl font-light text-white italic tracking-wide">
          “Use esses hacks e você nunca mais trava para criar.”
        </p>
      </div>
    </div>
  );
};

export default Hacks;