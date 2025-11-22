import { useState, useEffect } from 'react';
import Modal from '../ui/Modal';
import Input from '../ui/Input';
import Button from '../ui/Button';

export default function RemoveStockModal({ isOpen, onClose, products, onSave }) {
  const [formData, setFormData] = useState({
    productId: '',
    quantity: '',
  });
  const [errors, setErrors] = useState({});
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    if (isOpen) {
      setFormData({ productId: '', quantity: '' });
      setErrors({});
      setSelectedProduct(null);
    }
  }, [isOpen]);

  const handleProductChange = (productId) => {
    const product = products.find(p => p.id === parseInt(productId));
    setSelectedProduct(product);
    setFormData({ ...formData, productId });
    setErrors({ ...errors, productId: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.productId) {
      newErrors.productId = 'Please select a product';
    }

    const quantityNum = parseFloat(formData.quantity);
    if (isNaN(quantityNum) || quantityNum <= 0) {
      newErrors.quantity = 'Valid quantity is required';
    }

    if (selectedProduct) {
      const currentOnHand = selectedProduct.onHand ?? selectedProduct.stock ?? 0;
      const currentFreeToUse = selectedProduct.freeToUse ?? currentOnHand;
      
      if (quantityNum > currentOnHand) {
        newErrors.quantity = `Cannot remove more than available stock (${currentOnHand})`;
      } else if (quantityNum > currentFreeToUse) {
        newErrors.quantity = `Cannot remove more than free to use (${currentFreeToUse})`;
      }
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    if (selectedProduct) {
      const currentOnHand = selectedProduct.onHand ?? selectedProduct.stock ?? 0;
      const currentFreeToUse = selectedProduct.freeToUse ?? currentOnHand;
      
      onSave({
        productId: parseInt(formData.productId),
        onHand: Math.max(0, currentOnHand - quantityNum),
        freeToUse: Math.max(0, currentFreeToUse - quantityNum),
      });
    }
    onClose();
  };

  const productOptions = products.map(p => ({
    value: p.id.toString(),
    label: p.name,
  }));

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Remove Stock" size="sm">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="w-full">
          <label className="block text-sm font-medium text-slate-300 mb-1.5">
            Select Product
            <span className="text-rose-400 ml-1">*</span>
          </label>
          <select
            value={formData.productId}
            onChange={(e) => handleProductChange(e.target.value)}
            className={`w-full rounded-md border ${
              errors.productId ? 'border-rose-500' : 'border-white/10'
            } bg-white/5 px-3 py-2 text-sm text-slate-200 outline-none focus:ring-2 focus:ring-indigo-500/30`}
          >
            <option value="">Select a product...</option>
            {productOptions.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
          {errors.productId && <p className="mt-1 text-xs text-rose-400">{errors.productId}</p>}
        </div>

        {selectedProduct && (
          <div className="rounded-md border border-white/10 bg-white/5 p-3">
            <p className="text-xs text-slate-400 mb-1">Current Stock</p>
            <div className="flex justify-between text-sm">
              <span className="text-slate-300">On Hand:</span>
              <span className="text-slate-200 font-medium">
                {selectedProduct.onHand ?? selectedProduct.stock ?? 0}
              </span>
            </div>
            <div className="flex justify-between text-sm mt-1">
              <span className="text-slate-300">Free to Use:</span>
              <span className="text-slate-200 font-medium">
                {selectedProduct.freeToUse ?? selectedProduct.onHand ?? selectedProduct.stock ?? 0}
              </span>
            </div>
          </div>
        )}

        <Input
          label="Quantity to Remove"
          type="number"
          value={formData.quantity}
          onChange={(e) => {
            setFormData({ ...formData, quantity: e.target.value });
            setErrors({ ...errors, quantity: '' });
          }}
          error={errors.quantity}
          required
          min="0.01"
          step="0.01"
          max={selectedProduct ? (selectedProduct.freeToUse ?? selectedProduct.onHand ?? selectedProduct.stock ?? 0) : undefined}
        />

        <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
          <Button type="button" variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" variant="danger">
            Remove Stock
          </Button>
        </div>
      </form>
    </Modal>
  );
}

