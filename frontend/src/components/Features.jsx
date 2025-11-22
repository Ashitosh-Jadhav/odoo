import {
  PackagePlus, Download, Upload, ArrowLeftRight, Wand2, Bell,
  Building2, ScanLine, ClipboardList
} from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: PackagePlus,
      iconColor: 'text-indigo-300',
      title: 'Product Management',
      description: 'Create products with name, SKU/code, category, UoM, and optional initial stock. Organize by categories and set reordering rules.'
    },
    {
      icon: Download,
      iconColor: 'text-emerald-300',
      title: 'Receipts (Incoming)',
      description: 'Create receipts, add supplier/products, record quantities, and validate to auto-increase stock. Example: +50 Steel Rods.'
    },
    {
      icon: Upload,
      iconColor: 'text-sky-300',
      title: 'Delivery Orders (Outgoing)',
      description: 'Pick, pack, validate and stock decreases automatically. Example: Sales order 10 chairs → -10.'
    },
    {
      icon: ArrowLeftRight,
      iconColor: 'text-fuchsia-300',
      title: 'Internal Transfers',
      description: 'Move stock between locations or warehouses. Ledger logs every movement; total stock unchanged.'
    },
    {
      icon: Wand2,
      iconColor: 'text-rose-300',
      title: 'Stock Adjustments',
      description: 'Fix mismatches by selecting product/location, entering counted quantity, and posting the difference to the ledger.'
    },
    {
      icon: Bell,
      iconColor: 'text-amber-300',
      title: 'Alerts & Reordering',
      description: 'Set low-stock thresholds and reordering rules. Get proactive alerts to avoid stockouts.'
    },
    {
      icon: Building2,
      iconColor: 'text-emerald-300',
      title: 'Multi-warehouse',
      description: 'Manage many warehouses and locations with location-level availability and transfers.'
    },
    {
      icon: ScanLine,
      iconColor: 'text-sky-300',
      title: 'Smart Filters & SKU Search',
      description: 'Filter by document type, status, warehouse/location, category; search by SKU/code instantly.'
    },
    {
      icon: ClipboardList,
      iconColor: 'text-indigo-300',
      title: 'Stock Ledger',
      description: 'A complete audit trail for every receipt, delivery, transfer, and adjustment.'
    }
  ];

  return (
    <section id="product" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-14 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-50">
            Everything you need to move stock with confidence
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Clean product catalogs, precise operations, instant visibility, and guardrails for accuracy.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="rounded-xl border border-white/10 bg-white/5 p-5">
                <div className="flex items-center gap-2">
                  <IconComponent className={`h-5 w-5 ${feature.iconColor}`} />
                  <div className="text-sm font-medium text-slate-200">{feature.title}</div>
                </div>
                <p className="mt-2 text-xs text-slate-400">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

