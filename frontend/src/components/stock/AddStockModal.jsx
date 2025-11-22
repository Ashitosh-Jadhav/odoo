import { useState, useEffect } from 'react';
import Modal from '../ui/Modal';
import Input from '../ui/Input';
import Button from '../ui/Button';

export default function AddStockModal({ isOpen, onClose, products, onSave }) {
  const [formData, setFormData] = useState({
    productId: '',
    quantity: '',
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (isOpen) {
      setFormData({ productId: '', quantity: '' });
      setErrors({});
    }
  }, [isOpen]);

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

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const selectedProduct = products.find(p => p.id === parseInt(formData.productId));
    if (selectedProduct) {
      const currentOnHand = selectedProduct.onHand ?? selectedProduct.stock ?? 0;
      const currentFreeToUse = selectedProduct.freeToUse ?? currentOnHand;
      
      onSave({
        productId: parseInt(formData.productId),
        onHand: currentOnHand + quantityNum,
        freeToUse: currentFreeToUse + quantityNum,
      });
    }
    onClose();
  };

  const productOptions = products.map(p => ({
    value: p.id.toString(),
    label: p.name,
  }));

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add Stock" size="sm">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="w-full">
          <label className="block text-sm font-medium text-slate-300 mb-1.5">
            Select Product
            <span className="text-rose-400 ml-1">*</span>
          </label>
          <select
            value={formData.productId}
            onChange={(e) => {
              setFormData({ ...formData, productId: e.target.value });
              setErrors({ ...errors, productId: '' });
            }}
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

        <Input
          label="Quantity to Add"
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
        />

        <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
          <Button type="button" variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" variant="primary">
            Add Stock
          </Button>
        </div>
      </form>
    </Modal>
  );
}

