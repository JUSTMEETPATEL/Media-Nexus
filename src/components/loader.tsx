import { Loader2 } from 'lucide-react';

export function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <Loader2 className="w-16 h-16 text-cyan-400 animate-spin" />
      <span className="sr-only">Loading...</span>
    </div>
  );
}
