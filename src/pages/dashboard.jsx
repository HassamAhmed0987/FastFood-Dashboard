import Table from "../components/table"
import StateCard from "../components/stateCard"
import { recentOrders } from "../data/recentOrder"
import { topProducts } from "../data/topSelling";


const orderColumns = [
    { header: "Order ID", accessor: "orderId" },
    { header: "Customer", accessor: "customer" },
    { header: "Items", accessor: "items" },
    { header: "Total", accessor: "total" },
    { header: "Payment", accessor: "payment" },
    { header: "Status", accessor: "status" },
    { header: "Time", accessor: "time" },
    { header: "Action", accessor: "action" },
];



const productColumns = [
    { header: "Product", accessor: "product" },
    { header: "Category", accessor: "category" },
    { header: "Sold", accessor: "sold" },
    { header: "Revenue", accessor: "revenue" },
    { header: "Stock", accessor: "stock" },
    { header: "Status", accessor: "status" },
    { header: "Action", accessor: "action" },
];










function Dashboard() {
    return (
        <div>
            <div className="px-2 py-3 flex justify-around">
                <StateCard />
                <StateCard />
                <StateCard />
                <StateCard />
            </div>
            <div>
                <Table
                    title="Recent Orders"
                    orderColumns={orderColumns}
                    data={recentOrders}
                />
                {/* Top Selling Products table is kept commented to prevent a second table header from rendering. */}
                <Table
                    title="Top Selling Products"
                    orderColumns={productColumns}
                    data={topProducts}
                />
               
            </div>
        </div>
    )
}

export default Dashboard
