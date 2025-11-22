import {
  Download, Upload, ArrowLeftRight, Wand2, Search, Filter,
  Package, Bell, Truck, PackagePlus, Flashlight, ChevronRight,
  Building2, Factory, Warehouse
} from 'lucide-react';

export default function DashboardPreview() {
  return (
    <div className="relative mt-10 md:mt-14">
      <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="h-2.5 w-2.5 rounded-full bg-rose-400/80"></div>
            <div className="h-2.5 w-2.5 rounded-full bg-amber-400/80"></div>
            <div className="h-2.5 w-2.5 rounded-full bg-emerald-400/80"></div>
          </div>
          <div className="text-xs text-slate-400">Demo Dashboard</div>
        </div>

        <div className="grid md:grid-cols-4 gap-6 p-4 md:p-6">
          {/* Left: Main content */}
          <div className="md:col-span-3 space-y-4">
            {/* Filters */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs text-slate-400">Type:</span>
              <button className="inline-flex items-center gap-1.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 px-3 py-1.5 text-xs">
                <Download className="h-3.5 w-3.5" /> Receipts
              </button>
              <button className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 text-xs text-slate-300 hover:bg-white/5">
                <Upload className="h-3.5 w-3.5" /> Delivery
              </button>
              <button className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 text-xs text-slate-300 hover:bg-white/5">
                <ArrowLeftRight className="h-3.5 w-3.5" /> Internal
              </button>
              <button className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 text-xs text-slate-300 hover:bg-white/5">
                <Wand2 className="h-3.5 w-3.5" /> Adjustments
              </button>
              <span className="mx-3 hidden sm:inline h-4 w-px bg-white/10"></span>
              <span className="text-xs text-slate-400">Status:</span>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1 rounded-full border border-white/10 px-2.5 py-1 text-xs text-slate-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-400"></span> Draft
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-white/10 px-2.5 py-1 text-xs text-slate-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400"></span> Waiting
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-white/10 px-2.5 py-1 text-xs text-slate-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-sky-400"></span> Ready
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-white/10 px-2.5 py-1 text-xs text-slate-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span> Done
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-white/10 px-2.5 py-1 text-xs text-slate-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-rose-400"></span> Canceled
                </span>
              </div>
              <div className="ml-auto hidden lg:flex items-center gap-2">
                <div className="relative">
                  <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <input
                    placeholder="Search SKU / product…"
                    className="w-48 rounded-md border border-white/10 bg-white/5 pl-8 pr-3 py-1.5 text-xs text-slate-200 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-indigo-500/30"
                  />
                </div>
                <button className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300 hover:bg-white/10">
                  <Filter className="h-4 w-4" /> Filters
                </button>
              </div>
            </div>

            {/* KPIs */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400">Products in Stock</span>
                  <Package className="h-4 w-4 text-slate-300" />
                </div>
                <div className="mt-2 text-2xl font-semibold tracking-tight text-slate-50">1,284</div>
                <div className="mt-1 text-[0.7rem] text-emerald-400/80">+36 today</div>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400">Low / Out</span>
                  <Bell className="h-4 w-4 text-slate-300" />
                </div>
                <div className="mt-2 text-2xl font-semibold tracking-tight text-slate-50">42</div>
                <div className="mt-1 text-[0.7rem] text-rose-400/80">12 critical</div>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400">Pending Receipts</span>
                  <Download className="h-4 w-4 text-slate-300" />
                </div>
                <div className="mt-2 text-2xl font-semibold tracking-tight text-slate-50">18</div>
                <div className="mt-1 text-[0.7rem] text-slate-400">7 waiting</div>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400">Pending Deliveries</span>
                  <Truck className="h-4 w-4 text-slate-300" />
                </div>
                <div className="mt-2 text-2xl font-semibold tracking-tight text-slate-50">12</div>
                <div className="mt-1 text-[0.7rem] text-slate-400">4 ready</div>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400">Transfers</span>
                  <ArrowLeftRight className="h-4 w-4 text-slate-300" />
                </div>
                <div className="mt-2 text-2xl font-semibold tracking-tight text-slate-50">9</div>
                <div className="mt-1 text-[0.7rem] text-slate-400">2 scheduled</div>
              </div>
            </div>

            {/* Recent Operations */}
            <div className="rounded-lg border border-white/10 bg-white/5 overflow-hidden">
              <div className="flex items-center justify-between px-3 py-2 border-b border-white/10">
                <div className="text-xs font-medium text-slate-300">Recent operations</div>
                <div className="flex items-center gap-2">
                  <button className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-300 hover:bg-white/10">
                    <Download className="h-3.5 w-3.5" /> Receipt
                  </button>
                  <button className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-300 hover:bg-white/10">
                    <Upload className="h-3.5 w-3.5" /> Delivery
                  </button>
                  <button className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-300 hover:bg-white/10">
                    <Wand2 className="h-3.5 w-3.5" /> Adjust
                  </button>
                </div>
              </div>
              <div className="divide-y divide-white/10">
                <div className="flex items-center justify-between px-3 py-3">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-emerald-500/15 text-emerald-300 border border-emerald-500/20">
                      <Download className="h-4 w-4" />
                    </span>
                    <div>
                      <div className="text-sm font-medium text-slate-200">Receipt RCP-1032</div>
                      <div className="text-xs text-slate-400">Steel Rods — 50 units</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-[0.7rem] text-emerald-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span> Done
                    </span>
                    <span className="text-xs text-slate-400">2m ago</span>
                  </div>
                </div>
                <div className="flex items-center justify-between px-3 py-3">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-sky-500/15 text-sky-300 border border-sky-500/20">
                      <Upload className="h-4 w-4" />
                    </span>
                    <div>
                      <div className="text-sm font-medium text-slate-200">Delivery DLV-2089</div>
                      <div className="text-xs text-slate-400">Chairs — 10 units</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="inline-flex items-center gap-1 rounded-full border border-sky-500/20 bg-sky-500/10 px-2.5 py-1 text-[0.7rem] text-sky-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-sky-400"></span> Ready
                    </span>
                    <span className="text-xs text-slate-400">15m ago</span>
                  </div>
                </div>
                <div className="flex items-center justify-between px-3 py-3">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-fuchsia-500/15 text-fuchsia-300 border border-fuchsia-500/20">
                      <ArrowLeftRight className="h-4 w-4" />
                    </span>
                    <div>
                      <div className="text-sm font-medium text-slate-200">Transfer TRF-0451</div>
                      <div className="text-xs text-slate-400">Main → Production Rack</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="inline-flex items-center gap-1 rounded-full border border-slate-500/20 bg-white/5 px-2.5 py-1 text-[0.7rem] text-slate-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-slate-400"></span> Draft
                    </span>
                    <span className="text-xs text-slate-400">1h ago</span>
                  </div>
                </div>
                <div className="flex items-center justify-between px-3 py-3">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-rose-500/15 text-rose-300 border border-rose-500/20">
                      <Wand2 className="h-4 w-4" />
                    </span>
                    <div>
                      <div className="text-sm font-medium text-slate-200">Adjustment ADJ-0094</div>
                      <div className="text-xs text-slate-400">Steel — -3 kg (damaged)</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="inline-flex items-center gap-1 rounded-full border border-rose-500/20 bg-rose-500/10 px-2.5 py-1 text-[0.7rem] text-rose-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-rose-400"></span> Posted
                    </span>
                    <span className="text-xs text-slate-400">2h ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Quick actions */}
          <aside className="space-y-4">
            <div className="rounded-lg border border-white/10 bg-white/5 p-3">
              <div className="flex items-center justify-between">
                <div className="text-xs font-medium text-slate-300">Quick actions</div>
                <Flashlight className="h-4 w-4 text-slate-400" />
              </div>
              <div className="mt-3 grid gap-2">
                <button className="inline-flex items-center justify-between rounded-md border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-200 hover:bg-white/10">
                  <span className="flex items-center gap-2"><PackagePlus className="h-4 w-4" />Create product</span>
                  <ChevronRight className="h-4 w-4 text-slate-400" />
                </button>
                <button className="inline-flex items-center justify-between rounded-md border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-200 hover:bg-white/10">
                  <span className="flex items-center gap-2"><Download className="h-4 w-4" />New receipt</span>
                  <ChevronRight className="h-4 w-4 text-slate-400" />
                </button>
                <button className="inline-flex items-center justify-between rounded-md border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-200 hover:bg-white/10">
                  <span className="flex items-center gap-2"><Upload className="h-4 w-4" />Delivery order</span>
                  <ChevronRight className="h-4 w-4 text-slate-400" />
                </button>
                <button className="inline-flex items-center justify-between rounded-md border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-200 hover:bg-white/10">
                  <span className="flex items-center gap-2"><ArrowLeftRight className="h-4 w-4" />Internal transfer</span>
                  <ChevronRight className="h-4 w-4 text-slate-400" />
                </button>
                <button className="inline-flex items-center justify-between rounded-md border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-200 hover:bg-white/10">
                  <span className="flex items-center gap-2"><Wand2 className="h-4 w-4" />Stock adjustment</span>
                  <ChevronRight className="h-4 w-4 text-slate-400" />
                </button>
              </div>
            </div>

            <div className="rounded-lg border border-white/10 bg-white/5 p-3">
              <div className="text-xs font-medium text-slate-300">Warehouses</div>
              <div className="mt-2 space-y-2">
                <div className="flex items-center justify-between rounded-md border border-white/10 bg-white/5 px-3 py-2">
                  <div className="flex items-center gap-2">
                    <Building2 className="h-4 w-4 text-slate-300" />
                    <span className="text-xs text-slate-200">Main Warehouse</span>
                  </div>
                  <span className="text-[0.7rem] text-slate-400">842 SKUs</span>
                </div>
                <div className="flex items-center justify-between rounded-md border border-white/10 bg-white/5 px-3 py-2">
                  <div className="flex items-center gap-2">
                    <Factory className="h-4 w-4 text-slate-300" />
                    <span className="text-xs text-slate-200">Production Floor</span>
                  </div>
                  <span className="text-[0.7rem] text-slate-400">312 SKUs</span>
                </div>
                <div className="flex items-center justify-between rounded-md border border-white/10 bg-white/5 px-3 py-2">
                  <div className="flex items-center gap-2">
                    <Warehouse className="h-4 w-4 text-slate-300" />
                    <span className="text-xs text-slate-200">Warehouse 2</span>
                  </div>
                  <span className="text-[0.7rem] text-slate-400">130 SKUs</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

