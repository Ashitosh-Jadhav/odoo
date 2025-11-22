import { Edit } from 'lucide-react';
import Button from '../ui/Button';

export default function StockCard({ product, onEdit }) {
  const perUnitCost = product.perUnitCost || product.cost || 0;
  const onHand = product.onHand ?? product.stock ?? 0;
  const freeToUse = product.freeToUse ?? onHand;

  return (
    <div className="rounded-lg border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition-all duration-150 shadow-sm">
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-sm font-semibold text-slate-200">{product.name}</h3>
        <Button
          variant="secondary"
          onClick={() => onEdit(product)}
          className="text-xs px-2 py-1 h-auto"
        >
          <Edit className="h-3.5 w-3.5" />
        </Button>
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-xs">
          <span className="text-slate-400">Per Unit Cost</span>
          <span className="text-slate-200 font-medium">{perUnitCost.toLocaleString()} Rs</span>
        </div>
        <div className="flex justify-between text-xs">
          <span className="text-slate-400">On Hand</span>
          <span className="text-slate-200 font-medium">{onHand}</span>
        </div>
        <div className="flex justify-between text-xs">
          <span className="text-slate-400">Free to Use</span>
          <span className="text-slate-200 font-medium">{freeToUse}</span>
        </div>
      </div>
    </div>
  );
}
