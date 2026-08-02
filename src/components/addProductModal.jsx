





function AddProductModal({ view }) {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 p-4">
            <div className="w-full max-w-2xl rounded-xl bg-white shadow-xl">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-gray-300 px-6 py-4">
                    <h2 className="text-xl font-semibold">Add Product</h2>

                    <button className="text-2xl text-gray-500 hover:text-black" onClick={() => view(false)}>
                        ×
                    </button>
                </div>

                {/* Body */}
                <div className="grid grid-cols-2 gap-5 p-6">

                    {/* Product Name */}
                    <div className="col-span-2">
                        <label className="mb-2 block text-sm font-medium">
                            Product Name
                        </label>

                        <input
                            type="text"
                            placeholder="Enter product name"
                            className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-orange-500"
                        />
                    </div>

                    {/* Category */}
                    <div>
                        <label className="mb-2 block text-sm font-medium">
                            Category
                        </label>

                        <select className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-orange-500">
                            <option>Pizza</option>
                            <option>Burger</option>
                            <option>Fries</option>
                            <option>Drinks</option>
                            <option>Dessert</option>
                        </select>
                    </div>

                    {/* Price */}
                    <div>
                        <label className="mb-2 block text-sm font-medium">
                            Price (Rs)
                        </label>

                        <input
                            type="number"
                            placeholder="500"
                            className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-orange-500"
                        />
                    </div>

                    {/* Stock */}
                    <div>
                        <label className="mb-2 block text-sm font-medium">
                            Stock
                        </label>

                        <input
                            type="number"
                            placeholder="20"
                            className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-orange-500"
                        />
                    </div>

                    {/* Status */}
                    <div>
                        <label className="mb-2 block text-sm font-medium">
                            Status
                        </label>

                        <select className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-orange-500">
                            <option>Available</option>
                            <option>Out of Stock</option>
                            <option>Hidden</option>
                        </select>
                    </div>

                    {/* Description */}
                    <div className="col-span-2">
                        <label className="mb-2 block text-sm font-medium">
                            Description
                        </label>

                        <textarea
                            rows={4}
                            placeholder="Write product description..."
                            className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-orange-500"
                        ></textarea>
                    </div>

                    {/* Image */}
                    <div className="col-span-2">
                        <label className="mb-2 block text-sm font-medium">
                            Product Image
                        </label>

                        <input
                            type="file"
                            className="w-full rounded-lg border border-gray-300 p-3"
                        />
                    </div>
                </div>

                {/* Footer */}
                <div className="flex justify-end gap-3 border-t border-gray-300 px-6 py-4">
                    <button className="rounded-lg border border-gray-300 px-5 py-2 hover:bg-gray-100" onClick={() => view(false)}>
                        Cancel
                    </button>

                    <button className="rounded-lg bg-orange-500 px-5 py-2 text-white hover:bg-orange-600">
                        Add Product
                    </button>
                </div>
            </div>
        </div>
    )
}



export default AddProductModal