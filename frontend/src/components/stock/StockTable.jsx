import StockRow from './StockRow';

export default function StockTable({ products, onEdit }) {
  if (products.length === 0) {
    return (
      <div className="rounded-lg border border-white/10 bg-white/5 p-12 text-center">
        <p className="text-sm text-slate-400">No products found</p>
      </div>
    );
  }

  return (
    <div className="rounded-lg border border-white/10 bg-white/5 overflow-hidden shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10 bg-white/5">
              <th className="text-left py-3 px-4 text-xs font-medium text-slate-400 uppercase tracking-wider">
                Product
              </th>
              <th className="text-left py-3 px-4 text-xs font-medium text-slate-400 uppercase tracking-wider">
                Per Unit Cost
              </th>
              <th className="text-left py-3 px-4 text-xs font-medium text-slate-400 uppercase tracking-wider">
                On Hand
              </th>
              <th className="text-left py-3 px-4 text-xs font-medium text-slate-400 uppercase tracking-wider">
                Free to Use
              </th>
              <th className="text-center py-3 px-4 text-xs font-medium text-slate-400 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10">
            {products.map((product) => (
              <StockRow key={product.id} product={product} onEdit={onEdit} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
