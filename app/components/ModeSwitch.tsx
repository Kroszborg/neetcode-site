'use client';

type Mode = 'practice' | 'learn';

interface ModeSwitchProps {
  mode: Mode;
  onModeChange: (mode: Mode) => void;
}

export default function ModeSwitch({ mode, onModeChange }: ModeSwitchProps) {
  return (
    <div className="flex items-center justify-center py-10">
      <div className="relative inline-flex p-1 rounded-2xl bg-zinc-900 border border-white/10">

        {/* Sliding indicator — pure CSS transition, reliable across all browsers */}
        <div
          className="absolute top-1 bottom-1 rounded-xl bg-violet-600 transition-all duration-[240ms] ease-in-out"
          style={{
            width: 'calc(50% - 4px)',
            left: mode === 'practice' ? '4px' : '50%',
          }}
        />

        <button
          onClick={() => onModeChange('practice')}
          className={[
            'relative z-10 px-8 py-3 rounded-xl font-sans text-sm font-medium transition-colors duration-150',
            mode === 'practice' ? 'text-white' : 'text-zinc-400 hover:text-zinc-200',
          ].join(' ')}
        >
          Practice Problems
        </button>

        <button
          onClick={() => onModeChange('learn')}
          className={[
            'relative z-10 px-8 py-3 rounded-xl font-sans text-sm font-medium transition-colors duration-150',
            mode === 'learn' ? 'text-white' : 'text-zinc-400 hover:text-zinc-200',
          ].join(' ')}
        >
          Learn Concepts
        </button>
      </div>
    </div>
  );
}
