import React from 'react';
import { ArrowRight, Star, Video, Zap } from 'lucide-react';

const Welcome: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto space-y-12 animate-fade-in pb-20">
      <div className="space-y-6">
        <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white">
          Bem-vinda ao <span className="font-semibold text-white/90">Gancho Viral</span>
        </h2>
        <p className="text-lg md:text-xl text-zinc-400 leading-relaxed font-light">
          O Gancho Viral é sua área de membros premium criada para te entregar ganchos, 
          hacks e estratégias de criação natural. Aqui você aprende a criar conteúdo todos os dias, 
          sem travar, sem precisar decorar roteiro e sem depender do ChatGPT o tempo todo.
        </p>
      </div>

      <div className="bg-zinc-900/50 border border-white/5 rounded-2xl p-8 backdrop-blur-sm">
        <h3 className="text-xl font-medium text-white mb-6 flex items-center gap-2">
          <Zap className="w-5 h-5 text-white/70" />
          Como usar
        </h3>
        
        <div className="space-y-6">
          {[
            { icon: Video, text: "Escolha um gancho e transforme em um vídeo" },
            { icon: Star, text: "Use os hacks para criar com naturalidade" },
            { icon: Zap, text: "Publique diariamente" },
            { icon: ArrowRight, text: "Salve seus ganchos favoritos" },
            { icon: ArrowRight, text: "Volte sempre para desbloquear novas ideias" },
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-4 group">
              <div className="mt-1 p-2 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
                <item.icon className="w-4 h-4 text-white/80" />
              </div>
              <p className="text-zinc-300 font-light text-lg pt-1">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Welcome;