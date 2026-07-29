





function Table(props) {

    const { title, columns, data } = props

    return (
        <>
            {/*
            <div>
                <table>
                    <thead>
                        <th>Order ID</th>
                        <th>Customer</th>
                        <th>Items</th>
                        <th>Total</th>
                        <th>Payment</th>
                        <th>Status</th>
                        <th>Time</th>
                        <th>Action</th>
                    </thead>
                </table>
                <tr>
                    <td>1001</td>
                    <td>Ahmed</td>
                    <td>Buger + Coca Cola</td>
                    <td>1500</td>
                    <td>Cash</td>
                    <td>Pending</td>
                    <td>30m ago</td>
                    <td><button>Update Status</button></td>
                </tr>
            </div>
            */}
            <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-200/60">
                <div className="flex items-center justify-between gap-4 border-b border-slate-100 px-5 py-4">
                    <div>
                        <h2 className="text-lg font-bold text-slate-800">{title}</h2>
                        <p className="mt-1 text-sm text-slate-500">Track your latest customer orders.</p>
                    </div>
                    <button className="rounded-lg bg-orange-500 px-3 py-2 text-sm font-semibold text-white transition hover:bg-orange-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500">
                        View All
                    </button>
                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full text-left text-sm">
                        <thead className="bg-slate-50 text-xs font-bold uppercase tracking-wider text-slate-500">
                            <tr>
                                {columns.map(item => {
                                    return <th key={item} className="px-5 py-4">{item}</th>
                                })}
                                {/* <th className="px-5 py-4">Order ID</th>
                                <th className="px-5 py-4">Customer</th>
                                <th className="px-5 py-4">Items</th>
                                <th className="px-5 py-4">Total</th>
                                <th className="px-5 py-4">Payment</th>
                                <th className="px-5 py-4">Status</th>
                                <th className="px-5 py-4">Time</th>
                                <th className="px-5 py-4">Action</th> */}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-slate-600">
                            {data.map(data => {
                                return (
                                    <tr className="transition-colors hover:bg-orange-50/50">
                                        <td className="px-5 py-4 font-semibold text-slate-800">{data.orderId}</td>
                                        <td className="px-5 py-4 font-medium text-slate-700">{data.customer}</td>
                                        <td className="px-5 py-4">{data.items}</td>
                                        <td className="px-5 py-4 font-semibold text-slate-800">{data.total}</td>
                                        <td className="px-5 py-4">{data.payment}</td>
                                        <td className="px-5 py-4"><span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-700">{data.status}</span></td>
                                        <td className="px-5 py-4 whitespace-nowrap text-slate-500">{data.time}</td>
                                        <td className="px-5 py-4"><button className="whitespace-nowrap rounded-lg border border-orange-200 px-3 py-2 text-xs font-bold text-orange-600 transition hover:bg-orange-500 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500">{data.action}</button></td>
                                    </tr>

                                )
                            })}

                                {/* <tr className="transition-colors hover:bg-orange-50/50">
                                    <td className="px-5 py-4 font-semibold text-slate-800">#1001</td>
                                    <td className="px-5 py-4 font-medium text-slate-700">Ahmed</td>
                                    <td className="px-5 py-4">Burger + Coca Cola</td>
                                    <td className="px-5 py-4 font-semibold text-slate-800">Rs. 1,500</td>
                                    <td className="px-5 py-4">Cash</td>
                                    <td className="px-5 py-4"><span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-700">Pending</span></td>
                                    <td className="px-5 py-4 whitespace-nowrap text-slate-500">30m ago</td>
                                    <td className="px-5 py-4"><button className="whitespace-nowrap rounded-lg border border-orange-200 px-3 py-2 text-xs font-bold text-orange-600 transition hover:bg-orange-500 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500">Update Status</button></td>
                                </tr>
                                <tr className="transition-colors hover:bg-orange-50/50">
                                    <td className="px-5 py-4 font-semibold text-slate-800">#1001</td>
                                    <td className="px-5 py-4 font-medium text-slate-700">Ahmed</td>
                                    <td className="px-5 py-4">Burger + Coca Cola</td>
                                    <td className="px-5 py-4 font-semibold text-slate-800">Rs. 1,500</td>
                                    <td className="px-5 py-4">Cash</td>
                                    <td className="px-5 py-4"><span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-700">Pending</span></td>
                                    <td className="px-5 py-4 whitespace-nowrap text-slate-500">30m ago</td>
                                    <td className="px-5 py-4"><button className="whitespace-nowrap rounded-lg border border-orange-200 px-3 py-2 text-xs font-bold text-orange-600 transition hover:bg-orange-500 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500">Update Status</button></td>
                                </tr>
                                <tr className="transition-colors hover:bg-orange-50/50">
                                    <td className="px-5 py-4 font-semibold text-slate-800">#1001</td>
                                    <td className="px-5 py-4 font-medium text-slate-700">Ahmed</td>
                                    <td className="px-5 py-4">Burger + Coca Cola</td>
                                    <td className="px-5 py-4 font-semibold text-slate-800">Rs. 1,500</td>
                                    <td className="px-5 py-4">Cash</td>
                                    <td className="px-5 py-4"><span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-700">Pending</span></td>
                                    <td className="px-5 py-4 whitespace-nowrap text-slate-500">30m ago</td>
                                    <td className="px-5 py-4"><button className="whitespace-nowrap rounded-lg border border-orange-200 px-3 py-2 text-xs font-bold text-orange-600 transition hover:bg-orange-500 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500">Update Status</button></td>
                                </tr>
                                <tr className="transition-colors hover:bg-orange-50/50">
                                    <td className="px-5 py-4 font-semibold text-slate-800">#1001</td>
                                    <td className="px-5 py-4 font-medium text-slate-700">Ahmed</td>
                                    <td className="px-5 py-4">Burger + Coca Cola</td>
                                    <td className="px-5 py-4 font-semibold text-slate-800">Rs. 1,500</td>
                                    <td className="px-5 py-4">Cash</td>
                                    <td className="px-5 py-4"><span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-700">Pending</span></td>
                                    <td className="px-5 py-4 whitespace-nowrap text-slate-500">30m ago</td>
                                    <td className="px-5 py-4"><button className="whitespace-nowrap rounded-lg border border-orange-200 px-3 py-2 text-xs font-bold text-orange-600 transition hover:bg-orange-500 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500">Update Status</button></td>
                                </tr> */}
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    )
}

export default Table
