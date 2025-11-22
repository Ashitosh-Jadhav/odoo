import { useEffect, useState } from 'react';

export default function Footer() {
  const [year, setYear] = useState(2025);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="relative">
      <div className="mx-auto max-w-7xl px-6 pb-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-t border-white/10 pt-6">
          <div className="flex items-center gap-3">
            <img 
              src="/logo.png" 
              alt="StockMaster Logo" 
              className="h-7 w-7 object-contain"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'grid';
              }}
            />
            <div className="h-7 w-7 grid place-items-center rounded-md bg-gradient-to-br from-indigo-500 to-violet-500 text-white text-xs font-medium tracking-tight hidden">
              SM
            </div>
            <div className="text-sm font-semibold tracking-tight text-slate-100">StockMaster</div>
          </div>
          <div className="grid grid-cols-2 sm:flex gap-4 text-xs text-slate-400">
            <a href="#product" className="hover:text-slate-200">
              Product
            </a>
            <a href="#operations" className="hover:text-slate-200">
              Operations
            </a>
            <a href="#how" className="hover:text-slate-200">
              How it works
            </a>
            <a href="#security" className="hover:text-slate-200">
              Security
            </a>
            <a href="#" className="hover:text-slate-200">
              Docs
            </a>
            <a href="#" className="hover:text-slate-200">
              Status
            </a>
          </div>
          <div className="text-[0.7rem] text-slate-500">
            © {year} StockMaster Inc. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

