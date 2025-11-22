import { Lock, LogIn, KeyRound, LayoutDashboard, Shield, Radio, History, BellRing } from 'lucide-react';

export default function Security() {
  return (
    <section id="security" className="relative">
      <div className="mx-auto max-w-7xl px-6 pb-14">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-2">
              <Lock className="h-5 w-5 text-slate-200" />
              <h4 className="text-lg font-semibold tracking-tight text-slate-50">Authentication</h4>
            </div>
            <ul className="mt-3 space-y-2 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <LogIn className="h-4 w-4 text-slate-400" /> Sign up / Sign in flow
              </li>
              <li className="flex items-center gap-2">
                <KeyRound className="h-4 w-4 text-slate-400" /> OTP-based password reset
              </li>
              <li className="flex items-center gap-2">
                <LayoutDashboard className="h-4 w-4 text-slate-400" /> Redirect to Inventory Dashboard
              </li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-slate-200" />
              <h4 className="text-lg font-semibold tracking-tight text-slate-50">Reliability</h4>
            </div>
            <ul className="mt-3 space-y-2 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <Radio className="h-4 w-4 text-slate-400" /> Real-time updates across users
              </li>
              <li className="flex items-center gap-2">
                <History className="h-4 w-4 text-slate-400" /> Immutable move history & ledger
              </li>
              <li className="flex items-center gap-2">
                <BellRing className="h-4 w-4 text-slate-400" /> Low stock alerts & thresholds
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

