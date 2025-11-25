import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { allHooks } from '../data/hooks';

const HooksList: React.FC = () => {
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const copyToClipboard = (text: string, id: number) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto pb-20">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-light tracking-tight text-white mb-2">127 Ganchos Virais</h2>
        <p className="text-zinc-500 font-light">Alta Conversão e Retenção</p>
        <p className="text-zinc-600 font-light text-sm mt-2">adapte esses ganchos para o seu nicho</p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {allHooks.map((hook) => (
          <div 
            key={hook.id} 
            className="group bg-zinc-900/30 hover:bg-zinc-900/80 border border-white/5 hover:border-white/10 rounded-xl p-5 transition-all duration-300 flex items-center justify-between gap-4"
          >
            <div className="flex gap-4 items-start">
              <span className="text-zinc-600 font-mono text-sm pt-1 min-w-[2.5rem]">
                #{hook.id.toString().padStart(3, '0')}
              </span>
              <p className="text-zinc-200 font-light text-lg leading-relaxed select-text">
                {hook.text}
              </p>
            </div>
            
            <button
              onClick={() => copyToClipboard(hook.text, hook.id)}
              className="p-2 rounded-full text-zinc-500 hover:text-white hover:bg-white/10 transition-colors shrink-0 opacity-0 group-hover:opacity-100 focus:opacity-100"
              title="Copiar gancho"
            >
              {copiedId === hook.id ? (
                <Check className="w-5 h-5 text-green-400" />
              ) : (
                <Copy className="w-5 h-5" />
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HooksList;