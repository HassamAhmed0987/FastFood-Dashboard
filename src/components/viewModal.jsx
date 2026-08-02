// import { X } from "lucide-react"



// function ViewModal({ view }) {
//     return (
//         <div>
//             <div>
//                 <div>
//                     <h1>View Order</h1>
//                     <h1><X onClick={() => view(false) } /></h1>
//                 </div>
//                 <div>
//                     <h1>Order Information</h1>
//                     <h2>Order : #1025</h2>
//                     <h2>Status : Preparing</h2>
//                     <h2>Payment : Paid(Cash)</h2>
//                 </div>
//                 <div>
//                     <h1>Customer Information</h1>
//                     <h2>Name : Hassam Ahmed</h2>
//                     <h2>Phone : 03214798756</h2>
//                 </div>
//                 <div>
//                     <h1>Items</h1>
//                     <hr />
//                     <table>
//                         <thead>
//                             <tr>
//                                 <th>item</th>
//                                 <th>Qty</th>
//                                 <th>Price</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             <tr>
//                                 <td>Burger</td>
//                                 <td>2</td>
//                                 <td>Rs.1300</td>
//                             </tr>
//                             <tr>
//                                 <td>Burger</td>
//                                 <td>2</td>
//                                 <td>Rs.1300</td>
//                             </tr>
//                         </tbody>
//                     </table>
//                 </div>
//                 <div>
//                     <h1>Summery</h1>
//                     <hr />
//                     <h2>Subtotal: 1840</h2>
//                     <h2>Delivery: 150</h2>
//                     <h2>Discount: 100</h2>
//                     <hr />
//                     <h2>Total : 1890</h2>
//                 </div>
//                 <div>
//                     <h1>Notes</h1>
//                     <hr />
//                     <p>No onion please.</p>
//                 </div>

//                 <button onClick={() => view(false) } >Close</button>
//             </div>
//         </div>
//     )
// }


// export default ViewModal

import { X } from "lucide-react";

function ViewModal({ view }) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <div className="w-full max-w-2xl rounded-2xl bg-white shadow-2xl">

                {/* Header */}
                <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
                    <h1 className="text-xl font-bold text-slate-800">
                        View Order
                    </h1>

                    <button
                        onClick={() => view(false)}
                        className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-red-500"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Body */}
                <div className="space-y-6 p-6 max-h-[75vh] overflow-y-auto">

                    {/* Order Info */}
                    <div className="rounded-xl border border-slate-200 p-4">
                        <h2 className="mb-3 text-lg font-semibold text-slate-800">
                            Order Information
                        </h2>

                        <div className="space-y-2 text-sm text-slate-600">
                            <p><span className="font-semibold">Order:</span> #1025</p>
                            <p><span className="font-semibold">Status:</span> <span className="rounded bg-blue-100 px-2 py-1 text-blue-700">Preparing</span></p>
                            <p><span className="font-semibold">Payment:</span> Paid (Cash)</p>
                        </div>
                    </div>

                    {/* Customer */}
                    <div className="rounded-xl border border-slate-200 p-4">
                        <h2 className="mb-3 text-lg font-semibold text-slate-800">
                            Customer Information
                        </h2>

                        <div className="space-y-2 text-sm text-slate-600">
                            <p><span className="font-semibold">Name:</span> Hassam Ahmed</p>
                            <p><span className="font-semibold">Phone:</span> 03214798756</p>
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
                                    <tr>
                                        <td className="px-4 py-3">Burger</td>
                                        <td className="px-4 py-3">2</td>
                                        <td className="px-4 py-3">Rs.1300</td>
                                    </tr>

                                    <tr>
                                        <td className="px-4 py-3">Fries</td>
                                        <td className="px-4 py-3">1</td>
                                        <td className="px-4 py-3">Rs.300</td>
                                    </tr>
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
                                <span>Rs.1840</span>
                            </div>

                            <div className="flex justify-between">
                                <span>Delivery</span>
                                <span>Rs.150</span>
                            </div>

                            <div className="flex justify-between">
                                <span>Discount</span>
                                <span>-Rs.100</span>
                            </div>

                            <hr className="my-2" />

                            <div className="flex justify-between text-base font-bold text-orange-500">
                                <span>Total</span>
                                <span>Rs.1890</span>
                            </div>
                        </div>
                    </div>

                    {/* Notes */}
                    <div className="rounded-xl border border-slate-200 p-4">
                        <h2 className="mb-3 text-lg font-semibold text-slate-800">
                            Notes
                        </h2>

                        <p className="text-sm text-slate-600">
                            No onion please.
                        </p>
                    </div>

                </div>

                {/* Footer */}
                <div className="flex justify-end gap-3 border-t border-slate-200 px-6 py-4">
                    <button
                        onClick={() => view(false)}
                        className="rounded-lg bg-orange-500 px-5 py-2 font-medium text-white transition hover:bg-orange-600"
                    >
                        Close
                    </button>
                </div>

            </div>
        </div>
    );
}

export default ViewModal;