import { Edit } from 'lucide-react';
import Button from '../ui/Button';

export default function StockRow({ product, onEdit }) {
  const perUnitCost = product.perUnitCost || product.cost || 0;
  const onHand = product.onHand ?? product.stock ?? 0;
  const freeToUse = product.freeToUse ?? onHand;

  return (
    <tr className="border-b border-white/10 hover:bg-white/5 transition-colors duration-150">
      <td className="py-4 px-4">
        <span className="text-sm font-medium text-slate-200">{product.name}</span>
      </td>
      <td className="py-4 px-4">
        <span className="text-sm text-slate-300">{perUnitCost.toLocaleString()} Rs</span>
      </td>
      <td className="py-4 px-4">
        <span className="text-sm font-medium text-slate-200">{onHand}</span>
      </td>
      <td className="py-4 px-4">
        <span className="text-sm font-medium text-slate-200">{freeToUse}</span>
      </td>
      <td className="py-4 px-4">
        <div className="flex items-center justify-center">
          <Button
            variant="secondary"
            onClick={() => onEdit(product)}
            className="text-xs px-3 py-1.5 h-auto"
          >
            <Edit className="h-3.5 w-3.5" />
            Edit
          </Button>
        </div>
      </td>
    </tr>
  );
}
