// import { Columns } from "lucide-react" // Kept commented: currently not used in this component.

function Table(props) {

    const { title, orderColumns, data } = props

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
                                {orderColumns.map(item => {
                                    {/* Original key kept for reference: key={item} */}
                                    return <th key={item.accessor} className="px-5 py-4">{item.header}</th>
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
                            {data.map((row, index) => {
                                return (
                                    <tr key={index} className="transition-colors hover:bg-orange-50/50">
                                        {orderColumns.map(col => {
                                            /* Original cell markup kept for reference.
                                            return <td key={col.accessor}>
                                                {data[col.accessor]}
                                            </td>
                                            */
                                            const value = row[col.accessor]

                                            if (col.accessor === "status") {
                                                const statusStyle = {
                                                    Completed: "bg-emerald-100 text-emerald-700 ring-emerald-200",
                                                    Preparing: "bg-sky-100 text-sky-700 ring-sky-200",
                                                    Pending: "bg-amber-100 text-amber-700 ring-amber-200",
                                                }[value] || "bg-slate-100 text-slate-600 ring-slate-200"

                                                return (
                                                    <td key={col.accessor} className="whitespace-nowrap px-5 py-4">
                                                        {value ? <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-bold ring-1 ring-inset ${statusStyle}`}>{value}</span> : <span className="text-slate-400">—</span>}
                                                    </td>
                                                )
                                            }

                                            if (col.accessor === "action") {
                                                return (
                                                    <td key={col.accessor} className="whitespace-nowrap px-5 py-4">
                                                        {value ? <button type="button" className="font-semibold text-orange-500 transition hover:text-orange-600 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500">{value}</button> : <span className="text-slate-400">—</span>}
                                                    </td>
                                                )
                                            }

                                            return (
                                                <td key={col.accessor} className="whitespace-nowrap px-5 py-4 font-medium text-slate-700">
                                                    {value ?? <span className="font-normal text-slate-400">—</span>}
                                                </td>
                                            )
                                        })}
                                    </tr>   
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    )
}

export default Table
