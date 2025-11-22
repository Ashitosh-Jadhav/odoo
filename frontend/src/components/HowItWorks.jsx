import { Download, ArrowLeftRight, Upload, Wand2 } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: Download,
      iconColor: 'text-emerald-300',
      title: 'Step 1: Receive Goods',
      description: 'Receive 100 kg Steel → Stock: +100'
    },
    {
      icon: ArrowLeftRight,
      iconColor: 'text-fuchsia-300',
      title: 'Step 2: Internal Transfer',
      description: 'Main Store → Production Rack (total unchanged, location updated)'
    },
    {
      icon: Upload,
      iconColor: 'text-sky-300',
      title: 'Step 3: Deliver',
      description: 'Deliver 20 steel → Stock: -20'
    },
    {
      icon: Wand2,
      iconColor: 'text-rose-300',
      title: 'Step 4: Adjust',
      description: '3 kg damaged → Stock: -3. Everything logs to the Stock Ledger.'
    }
  ];

  return (
    <section id="how" className="relative">
      <div className="mx-auto max-w-7xl px-6 pb-14">
        <div className="mx-auto max-w-2xl text-center">
          <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-50">
            From receipt to delivery in four steps
          </h3>
          <p className="mt-3 text-base text-slate-300">
            A simple flow for accurate, auditable stock.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="rounded-xl border border-white/10 bg-white/5 p-5">
                <div className="flex items-center gap-2">
                  <IconComponent className={`h-5 w-5 ${step.iconColor}`} />
                  <div className="text-sm font-medium text-slate-200">{step.title}</div>
                </div>
                <p className="mt-2 text-xs text-slate-400">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

