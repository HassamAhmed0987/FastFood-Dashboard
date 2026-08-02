

import React from 'react';
import {
  X,
  Pencil,
  Tag,
  Box,
  FileText,
  Utensils,
  Flame,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Eye
} from 'lucide-react';

// Default dummy product data for preview/standalone usage
const DEFAULT_PRODUCT = {
  id: 'PRD-8492',
  name: 'Double Smokehouse BBQ Burger',
  category: 'Gourmet Burgers',
  price: 14.99,
  stock: 35,
  status: 'In Stock', // 'In Stock' | 'Low Stock' | 'Out of Stock'
  image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
  description: 'Two 100% Angus beef patties smashed to perfection, layered with double smoked bacon, sharp cheddar cheese, crispy onion rings, and our house signature tangy BBQ sauce on a toasted brioche bun.',
  ingredients: [
    'Angus Beef Patty',
    'Smoked Bacon',
    'Cheddar Cheese',
    'Crispy Onion Rings',
    'Brioche Bun',
    'Signature BBQ Sauce',
    'Dill Pickles'
  ],
  nutrition: {
    calories: '850 kcal',
    protein: '48g',
    fat: '42g',
    carbs: '54g'
  }
};

export default function ProductViewModal({
  isOpen = true,
  onClose,
  onEdit,
  product = DEFAULT_PRODUCT,
  view
}) {
  if (!isOpen) return null;

  // Helper function for rendering status badges dynamically
  const getStatusBadge = (status) => {
    switch (status?.toLowerCase()) {
      case 'in stock':
        return {
          badgeClass: 'bg-emerald-50 text-emerald-700 border-emerald-200/80',
          icon: <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
        };
      case 'low stock':
        return {
          badgeClass: 'bg-amber-50 text-amber-700 border-amber-200/80',
          icon: <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
        };
      case 'out of stock':
        return {
          badgeClass: 'bg-red-50 text-red-700 border-red-200/80',
          icon: <XCircle className="w-3.5 h-3.5 text-red-600" />
        };
      default:
        return {
          badgeClass: 'bg-gray-50 text-gray-700 border-gray-200',
          icon: null
        };
    }
  };

  const statusConfig = getStatusBadge(product.status);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm transition-opacity"
      onClick={onClose}
    >
      {/* Modal Container */}
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-[700px] overflow-hidden flex flex-col max-h-[90vh] border border-gray-100 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-white sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-orange-50 text-orange-600 rounded-xl border border-orange-100">
              <Eye className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-900 leading-tight">View Product</h2>
              <p className="text-xs text-gray-500 font-medium">Product ID: {product.id || 'N/A'}</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-xl transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" onClick={() => view(false)} />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 space-y-6 overflow-y-auto">
          {/* Section 1: Product Main Info */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-start">
            {/* Product Image */}
            <div className="sm:col-span-5 relative">
              <div className="aspect-square w-full rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 shadow-sm relative group">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Main Info Details */}
            <div className="sm:col-span-7 space-y-4">
              <div>
                {/* Category & Status Badges */}
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold bg-orange-50 text-orange-600 border border-orange-100">
                    <Tag className="w-3.5 h-3.5" />
                    {product.category}
                  </span>

                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold border ${statusConfig.badgeClass}`}>
                    {statusConfig.icon}
                    {product.status}
                  </span>
                </div>

                <h3 className="text-2xl font-extrabold text-gray-900 leading-snug">
                  {product.name}
                </h3>
              </div>

              {/* Price & Stock Stats Box */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="bg-gradient-to-br from-orange-50/60 to-amber-50/40 p-3.5 rounded-xl border border-orange-100">
                  <p className="text-xs font-semibold text-gray-500 mb-0.5">Price</p>
                  <p className="text-2xl font-black text-orange-600">
                    ${Number(product.price).toFixed(2)}
                  </p>
                </div>

                <div className="bg-gray-50 p-3.5 rounded-xl border border-gray-100">
                  <p className="text-xs font-semibold text-gray-500 mb-0.5 flex items-center gap-1">
                    <Box className="w-3.5 h-3.5 text-gray-400" />
                    Stock Quantity
                  </p>
                  <p className="text-xl font-bold text-gray-900">
                    {product.stock}{' '}
                    <span className="text-xs font-medium text-gray-500">units</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Description */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-orange-500" />
              Description
            </h4>
            <div className="bg-gray-50/80 p-4 rounded-xl border border-gray-100 text-sm text-gray-600 leading-relaxed">
              {product.description}
            </div>
          </div>

          {/* Section 3: Ingredients (Optional) */}
          {product.ingredients && product.ingredients.length > 0 && (
            <div className="space-y-2.5">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
                <Utensils className="w-4 h-4 text-orange-500" />
                Ingredients
              </h4>
              <div className="flex flex-wrap gap-2">
                {product.ingredients.map((ingredient, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center text-xs font-medium bg-orange-50/70 text-orange-950 px-3 py-1.5 rounded-full border border-orange-200/60 hover:bg-orange-100 transition-colors"
                  >
                    {ingredient}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Section 4: Nutrition Info (Optional) */}
          {product.nutrition && (
            <div className="space-y-2.5">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-orange-500" />
                Nutritional Values
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="bg-gray-50 p-3 rounded-xl border border-gray-100 text-center hover:border-orange-200 transition-colors">
                  <span className="text-xs text-gray-400 font-medium block mb-0.5">Calories</span>
                  <span className="text-sm font-bold text-gray-900">{product.nutrition.calories}</span>
                </div>
                <div className="bg-gray-50 p-3 rounded-xl border border-gray-100 text-center hover:border-orange-200 transition-colors">
                  <span className="text-xs text-gray-400 font-medium block mb-0.5">Protein</span>
                  <span className="text-sm font-bold text-gray-900">{product.nutrition.protein}</span>
                </div>
                <div className="bg-gray-50 p-3 rounded-xl border border-gray-100 text-center hover:border-orange-200 transition-colors">
                  <span className="text-xs text-gray-400 font-medium block mb-0.5">Fat</span>
                  <span className="text-sm font-bold text-gray-900">{product.nutrition.fat}</span>
                </div>
                <div className="bg-gray-50 p-3 rounded-xl border border-gray-100 text-center hover:border-orange-200 transition-colors">
                  <span className="text-xs text-gray-400 font-medium block mb-0.5">Carbs</span>
                  <span className="text-sm font-bold text-gray-900">{product.nutrition.carbs}</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-end gap-3 px-6 py-4 bg-gray-50/80 border-t border-gray-100 rounded-b-2xl">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl text-sm font-semibold text-gray-700 bg-white border border-gray-200 hover:bg-gray-100 hover:text-gray-900 active:scale-95 transition-all shadow-sm"
            onClick={() => view(false)}
          >
            Close
          </button>
          
          <button
            type="button"
            onClick={() => onEdit?.(product)}
            className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-orange-500 hover:bg-orange-600 active:bg-orange-700 active:scale-95 transition-all shadow-md shadow-orange-500/20 flex items-center gap-2"
          >
            <Pencil className="w-4 h-4" />
            Edit Product
          </button>
        </div>
      </div>
    </div>
  );
}