'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import PixelCard from './PixelCard';

interface CodeBlockProps {
  code: string;
  language?: string;
  showCopy?: boolean;
  className?: string;
}

export default function CodeBlock({ 
  code, 
  language = 'bash', 
  showCopy = true, 
  className = '' 
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className={`relative group ${className}`}>
      <PixelCard variant="code">
        <div className="flex items-center justify-between">
          <code className="text-sm font-mono text-white/90 flex-1">{code}</code>
          {showCopy && (
            <button
              onClick={copyToClipboard}
              className="ml-4 p-1.5 rounded-none border border-white/20 bg-black/50 hover:bg-white/10 transition-colors duration-200 opacity-0 group-hover:opacity-100 focus:opacity-100"
              title={copied ? 'Copied!' : 'Copy code'}
            >
              {copied ? (
                <Check className="w-4 h-4 text-white" />
              ) : (
                <Copy className="w-4 h-4 text-white/70" />
              )}
            </button>
          )}
        </div>
      </PixelCard>
    </div>
  );
}
