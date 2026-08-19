import { useEffect, useState } from "react";
function AddOrder() {
    const [customer, setCustomer] = useState("");
    const [phone, setPhone] = useState("");

    const [selectedProduct, setSelectedProduct] = useState("");
    const [quantity, setQuantity] = useState(1);

    const [items, setItems] = useState([]);

    const [delivery, setDelivery] = useState(150);
    const [discount, setDiscount] = useState(0);
    const [payment, setPayment] = useState("Cash");
    const [status, setStatus] = useState("Pending");
    const [notes, setNotes] = useState("");
    const [products, setProducts] = useState([])


    const API_URL = "http://localhost:3000/"

    useEffect(() => {
        fetchData()
    }, [])

    async function fetchData() {
        const response = await fetch(`${API_URL}products`)
        const data = await response.json()
        setProducts(data)
    }





    // Add product to items
    const handleAddItem = () => {
        if (!selectedProduct) return;

        const product = products.find(
            (product) => String(product.id) === String(selectedProduct)
        );

        if (!product) return;

        const existingItem = items.find(
            (item) => String(item.productId) === String(product.id)
        );

        if (existingItem) {
            setItems(
                items.map((item) =>
                    String(item.productId) === String(product.id)
                        ? {
                            ...item,
                            quantity: item.quantity + Number(quantity),
                        }
                        : item
                )
            );
        } else {
            setItems([
                ...items,
                {
                    productId: product.id,
                    name: product.name,
                    quantity: Number(quantity),
                    price: Number(product.price),
                },
            ]);
        }

        setSelectedProduct("");
        setQuantity(1);
    };
    //   const handleAddItem = () => {
    //     if (!selectedProduct) return;

    //     const product = products.find(
    //       (product) => product.id === Number(selectedProduct)
    //     );

    //     if (!product) return;

    //     const existingItem = items.find(
    //       (item) => item.productId === product.id
    //     );

    //     if (existingItem) {
    //       setItems(
    //         items.map((item) =>
    //           item.productId === product.id
    //             ? {
    //                 ...item,
    //                 quantity: item.quantity + Number(quantity),
    //               }
    //             : item
    //         )
    //       );
    //     } else {
    //       setItems([
    //         ...items,
    //         {
    //           productId: product.id,
    //           name: product.name,
    //           quantity: Number(quantity),
    //           price: product.price,
    //         },
    //       ]);
    //     }

    //     setSelectedProduct("");
    //     setQuantity(1);
    //   };

    // Remove item
    const handleRemoveItem = (productId) => {
        setItems(
            items.filter((item) => item.productId !== productId)
        );
    };

    // Subtotal
    const subtotal = items.reduce(
        (total, item) => total + item.quantity * item.price,
        0
    );

    // Final total
    const total = subtotal + Number(delivery) - Number(discount);

    // Save Order
    const handleSubmit = (e) => {
        e.preventDefault();

        const order = {
            id: Date.now(),
            orderId: `#ORD-${Date.now()}`,
            customer,
            phone,
            items,
            delivery: Number(delivery),
            discount: Number(discount),
            total,
            payment,
            status,
            time: "Just now",
            notes,
        };

        console.log(order);

        // Yahan API / JSON Server mein POST kar sakte ho
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">

            {/* Customer Information */}
            <div>
                <h3 className="mb-4 text-lg font-semibold text-slate-800">
                    Customer Information
                </h3>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="mb-1 block text-sm font-medium">
                            Customer Name
                        </label>

                        <input
                            type="text"
                            value={customer}
                            onChange={(e) => setCustomer(e.target.value)}
                            placeholder="Enter customer name"
                            className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label className="mb-1 block text-sm font-medium">
                            Phone
                        </label>

                        <input
                            type="text"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="03XXXXXXXXX"
                            className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                </div>
            </div>

            {/* Add Product */}
            <div>
                <h3 className="mb-4 text-lg font-semibold text-slate-800">
                    Add Products
                </h3>

                <div className="flex items-end gap-3">

                    {/* Product Dropdown */}
                    <div className="flex-1">
                        <label className="mb-1 block text-sm font-medium">
                            Product
                        </label>

                        <select
                            value={selectedProduct}
                            onChange={(e) => setSelectedProduct(e.target.value)}
                            className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-blue-500"
                        >
                            <option value="">Select Product</option>

                            {products.map((product) => (
                                <option key={product.id} value={product.id}>
                                    {product.name} - Rs. {product.price}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Quantity */}
                    <div className="w-28">
                        <label className="mb-1 block text-sm font-medium">
                            Quantity
                        </label>

                        <input
                            type="number"
                            min="1"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                            className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-blue-500"
                        />
                    </div>

                    {/* Add Button */}
                    <button
                        type="button"
                        onClick={handleAddItem}
                        className="rounded-lg bg-blue-600 px-5 py-2 font-medium text-white hover:bg-blue-700"
                    >
                        Add Item
                    </button>
                </div>
            </div>

            {/* Items Table */}
            {items.length > 0 && (
                <div className="overflow-hidden rounded-xl border border-slate-200">
                    <table className="w-full text-left">

                        <thead className="bg-slate-50">
                            <tr>
                                <th className="px-4 py-3 text-sm font-semibold">
                                    Product
                                </th>

                                <th className="px-4 py-3 text-sm font-semibold">
                                    Price
                                </th>

                                <th className="px-4 py-3 text-sm font-semibold">
                                    Quantity
                                </th>

                                <th className="px-4 py-3 text-sm font-semibold">
                                    Total
                                </th>

                                <th className="px-4 py-3 text-sm font-semibold">
                                    Action
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {items.map((item) => (
                                <tr
                                    key={item.productId}
                                    className="border-t border-slate-200"
                                >
                                    <td className="px-4 py-3">
                                        {item.name}
                                    </td>

                                    <td className="px-4 py-3">
                                        Rs. {item.price}
                                    </td>

                                    <td className="px-4 py-3">
                                        {item.quantity}
                                    </td>

                                    <td className="px-4 py-3 font-medium">
                                        Rs. {item.quantity * item.price}
                                    </td>

                                    <td className="px-4 py-3">
                                        <button
                                            type="button"
                                            onClick={() =>
                                                handleRemoveItem(item.productId)
                                            }
                                            className="text-sm font-medium text-red-500 hover:text-red-700"
                                        >
                                            Remove
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>

                    </table>
                </div>
            )}

            {/* Order Summary */}
            <div className="grid grid-cols-3 gap-4">

                <div>
                    <label className="mb-1 block text-sm font-medium">
                        Delivery
                    </label>

                    <input
                        type="number"
                        value={delivery}
                        onChange={(e) => setDelivery(e.target.value)}
                        className="w-full rounded-lg border border-slate-300 px-3 py-2"
                    />
                </div>

                <div>
                    <label className="mb-1 block text-sm font-medium">
                        Discount
                    </label>

                    <input
                        type="number"
                        value={discount}
                        onChange={(e) => setDiscount(e.target.value)}
                        className="w-full rounded-lg border border-slate-300 px-3 py-2"
                    />
                </div>

                <div>
                    <label className="mb-1 block text-sm font-medium">
                        Payment
                    </label>

                    <select
                        value={payment}
                        onChange={(e) => setPayment(e.target.value)}
                        className="w-full rounded-lg border border-slate-300 px-3 py-2"
                    >
                        <option>Cash</option>
                        <option>Card</option>
                        <option>Online</option>
                    </select>
                </div>

            </div>

            {/* Status */}
            <div>
                <label className="mb-1 block text-sm font-medium">
                    Status
                </label>

                <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="w-full rounded-lg border border-slate-300 px-3 py-2"
                >
                    <option>Pending</option>
                    <option>Preparing</option>
                    <option>Out for Delivery</option>
                    <option>Completed</option>
                    <option>Cancelled</option>
                </select>
            </div>

            {/* Notes */}
            <div>
                <label className="mb-1 block text-sm font-medium">
                    Notes
                </label>

                <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Any special instructions..."
                    rows="3"
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-blue-500"
                />
            </div>

            {/* Total */}
            <div className="rounded-xl bg-slate-50 p-4">
                <div className="flex justify-between text-sm">
                    <span>Subtotal</span>
                    <span>Rs. {subtotal}</span>
                </div>

                <div className="mt-2 flex justify-between text-sm">
                    <span>Delivery</span>
                    <span>Rs. {delivery}</span>
                </div>

                <div className="mt-2 flex justify-between text-sm">
                    <span>Discount</span>
                    <span>- Rs. {discount}</span>
                </div>

                <div className="mt-3 flex justify-between border-t pt-3 text-lg font-bold">
                    <span>Total</span>
                    <span>Rs. {total}</span>
                </div>
            </div>

            {/* Submit */}
            <button
                type="submit"
                disabled={items.length === 0}
                className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
                Create Order
            </button>

        </form>
    );
}

export default AddOrder;
