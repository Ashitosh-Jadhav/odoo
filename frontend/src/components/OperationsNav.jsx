import {
  LayoutDashboard, Package, Download, Upload, Wand2,
  ArrowLeftRight, Settings, User
} from 'lucide-react';

export default function OperationsNav() {
  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', active: true },
    { icon: Package, label: 'Products' },
    { icon: Download, label: 'Receipts' },
    { icon: Upload, label: 'Deliveries' },
    { icon: Wand2, label: 'Adjustments' },
    { icon: ArrowLeftRight, label: 'Move History' },
    { icon: Settings, label: 'Settings' },
    { icon: User, label: 'My Profile' }
  ];

  return (
    <section id="operations" className="relative">
      <div className="mx-auto max-w-7xl px-6 pb-14">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-400">Navigate</span>
          </div>
          <div className="mt-3 -mx-2 overflow-x-auto">
            <div className="flex items-center gap-2 px-2 whitespace-nowrap md:flex-wrap md:whitespace-normal snap-x snap-mandatory md:snap-none">
              {navItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <span
                    key={index}
                    aria-current={item.active ? 'page' : undefined}
                    className={`shrink-0 snap-start inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-xs ${
                      item.active
                        ? 'border border-indigo-500/30 bg-indigo-500/20 text-indigo-200'
                        : 'border border-white/10 bg-white/5 text-slate-200 hover:bg-white/10'
                    }`}
                  >
                    <IconComponent className="h-3.5 w-3.5" />
                    {item.label}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

