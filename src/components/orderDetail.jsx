function OrderDetail({ order }) {
    if (!order) return null;


    const items = order.items

    const subtotal = items.reduce((acc, value) => acc + value.price, 0)

    console.log(subtotal);
    

    return (
        <div className="space-y-6 max-h-[75vh] overflow-y-auto">

            {/* Order Information */}
            <div className="rounded-xl border border-slate-200 p-4">
                <h2 className="mb-3 text-lg font-semibold text-slate-800">
                    Order Information
                </h2>

                <div className="space-y-2 text-sm text-slate-600">
                    <p>
                        <span className="font-semibold">Order:</span>{" "}
                        #{order.orderId}
                    </p>

                    <p>
                        <span className="font-semibold">Status:</span>{" "}
                        <span className="rounded bg-blue-100 px-2 py-1 text-blue-700">
                            {order.status}
                        </span>
                    </p>

                    <p>
                        <span className="font-semibold">Payment:</span>{" "}
                        {order.payment}
                    </p>
                </div>
            </div>


            {/* Customer Information */}
            <div className="rounded-xl border border-slate-200 p-4">
                <h2 className="mb-3 text-lg font-semibold text-slate-800">
                    Customer Information
                </h2>

                <div className="space-y-2 text-sm text-slate-600">
                    <p>
                        <span className="font-semibold">Name:</span>{" "}
                        {order.customer}
                    </p>

                    <p>
                        <span className="font-semibold">Phone:</span>{" "}
                        {order.phone}
                    </p>
                </div>
            </div>


            {/* Items */}
            <div className="rounded-xl border border-slate-200 p-4">
                <h2 className="mb-4 text-lg font-semibold text-slate-800">
                    Items
                </h2>

                <div className="overflow-x-auto">
                    <table className="min-w-full text-left">

                        <thead className="bg-slate-100 text-sm text-slate-600">
                            <tr>
                                <th className="px-4 py-3">Item</th>
                                <th className="px-4 py-3">Qty</th>
                                <th className="px-4 py-3">Price</th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-slate-200 text-sm">
                            {order.items?.map((item, index) => (
                                <tr key={index}>
                                    <td className="px-4 py-3">
                                        {item.name}
                                    </td>

                                    <td className="px-4 py-3">
                                        {item.quantity}
                                    </td>

                                    <td className="px-4 py-3">
                                        Rs.{item.price}
                                    </td>
                                </tr>
                            ))}
                        </tbody>

                    </table>
                </div>
            </div>


            {/* Summary */}
            <div className="rounded-xl border border-slate-200 p-4">
                <h2 className="mb-3 text-lg font-semibold text-slate-800">
                    Summary
                </h2>

                <div className="space-y-2 text-sm">

                    <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span>Rs.{subtotal}</span>
                    </div>

                    <div className="flex justify-between">
                        <span>Delivery</span>
                        <span>Rs.{order.delivery}</span>
                    </div>

                    <div className="flex justify-between">
                        <span>Discount</span>
                        <span>-Rs.{order.discount}</span>
                    </div>

                    <hr className="my-2" />

                    <div className="flex justify-between text-base font-bold text-orange-500">
                        <span>Total</span>
                        <span>Rs.{(subtotal + order.delivery) - order.discount}</span>
                    </div>

                </div>
            </div>


            {/* Notes */}
            <div className="rounded-xl border border-slate-200 p-4">
                <h2 className="mb-3 text-lg font-semibold text-slate-800">
                    Notes
                </h2>

                <p className="text-sm text-slate-600">
                    {order.notes || "No notes"}
                </p>
            </div>

        </div>
    );
}

export default OrderDetail;