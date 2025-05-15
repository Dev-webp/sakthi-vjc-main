'use client';

import Link from 'next/link';
import { ClipboardCheck, CheckCircle } from 'lucide-react';

const FreeEligibilitySidebar = () => {
  return (
    <div className="fixed top-1/3 left-0 z-50 flex flex-col items-center space-y-2 ml-0 sm:ml-4">
      {/* FREE ICON */}
      <div className="relative flex items-center justify-center animate-shake">
        <ClipboardCheck
          size={50}
          className="text-orange-500 drop-shadow-md animate-blink animate-shake-icon sm:size-[50px] size-[36px]"
        />
        <span className="absolute font-bold bg-white text-black px-2 py-[1px] text-[8px] sm:text-[10px] shadow-sm animate-blink animate-shake-text">
          FREE
        </span>
      </div>

      {/* Main Button */}
      <Link href="/assessment">
        <div
          className={`
            bg-gradient-to-b from-white to-orange-500 hover:from-orange-500 hover:to-white text-black 
            shadow-xl flex flex-col items-center justify-center cursor-pointer
            hover:scale-105 hover:shadow-2xl transition-transform
            sm:w-[50px] sm:h-[200px] w-[36px] h-[140px]
          `}
        >
          <div className="rotate-90 w-[160px] sm:w-[200px] h-auto flex flex-col items-center justify-center">
            <div className="flex items-center space-x-1 sm:space-x-2">
              <CheckCircle
                className="text-black sm:w-[20px] sm:h-[20px] w-[14px] h-[14px]"
              />
              <span className="font-semibold tracking-wide text-black text-[11px] sm:text-[18px]">
                Eligibility Check
              </span>
            </div>
          </div>
        </div>
      </Link>

      {/* Animations */}
      <style jsx>{`
        @keyframes blink {
          0% { opacity: 1; }
          50% { opacity: 0.5; }
          100% { opacity: 1; }
        }
        .animate-blink { animation: blink 1.5s infinite; }

        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          50% { transform: translateX(5px); }
          75% { transform: translateX(-5px); }
        }
        .animate-shake { animation: shake 0.5s infinite; }

        @keyframes shake-icon {
          0%, 100% { transform: rotate(0); }
          25% { transform: rotate(-10deg); }
          50% { transform: rotate(10deg); }
          75% { transform: rotate(-10deg); }
        }
        .animate-shake-icon { animation: shake-icon 0.5s infinite; }

        @keyframes shake-text {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-3px); }
          50% { transform: translateX(3px); }
          75% { transform: translateX(-3px); }
        }
        .animate-shake-text { animation: shake-text 0.5s infinite; }
      `}</style>
    </div>
  );
};

export default FreeEligibilitySidebar;
