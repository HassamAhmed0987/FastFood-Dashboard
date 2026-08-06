function ProductForm() {
  return (
    <form className="space-y-4">

      {/* Product Name */}
      <div>
        <label className="block text-sm font-medium mb-1">
          Product Name
        </label>
        <input
          type="text"
          placeholder="Classic Beef Burger"
          className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none"
        />
      </div>

      {/* Category */}
      <div>
        <label className="block text-sm font-medium mb-1">
          Category
        </label>
        <select className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none">
          <option>Burger</option>
          <option>Pizza</option>
          <option>Fries</option>
          <option>Drinks</option>
          <option>Dessert</option>
        </select>
      </div>

      {/* Price */}
      <div>
        <label className="block text-sm font-medium mb-1">
          Price (PKR)
        </label>
        <input
          type="number"
          placeholder="749"
          className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none"
        />
      </div>

      {/* Rating */}
      <div>
        <label className="block text-sm font-medium mb-1">
          Rating
        </label>
        <input
          type="number"
          min="0"
          max="5"
          step="0.1"
          placeholder="4.5"
          className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none"
        />
      </div>

      {/* Image URL */}
      <div>
        <label className="block text-sm font-medium mb-1">
          Image URL
        </label>
        <input
          type="url"
          placeholder="https://images.unsplash.com/..."
          className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none"
        />
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-medium mb-1">
          Description
        </label>
        <textarea
          rows={4}
          placeholder="Write product description..."
          className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none resize-none"
        />
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-3 pt-2">
        <button
          type="button"
          className="px-4 py-2 rounded-lg border border-orange-500 text-orange-500 font-bold transition-all duration-200 hover:bg-orange-500 hover:text-white"
        >
          Cancel
        </button>

        <button
          type="submit"
          className="px-4 py-2 rounded-lg bg-orange-500 text-white font-bold"
        >
          Save Product
        </button>
      </div>

    </form>
  );
}

export default ProductForm;