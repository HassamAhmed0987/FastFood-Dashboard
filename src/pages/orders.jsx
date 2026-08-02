import { useState } from "react";
import AddOrderModal from "../components/addOrderModal";
import SearchInput from "../components/searchInput";
import { recentOrders } from "../data/recentOrder";
import Table from "../components/table";
import StateCard from "../components/stateCard";
import ViewModal from "../components/viewModal";
import { ZodiacSagittarius, ZodiacVirgo } from "lucide-react";

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

function Order() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [orders, setOrders] = useState(recentOrders);
    const [viewModal, setViewModal] = useState(false)

    const addOrder = (formData) => {
        const newOrder = {
            orderId: `#ORD-${1000 + orders.length + 1}`,
            customer: formData.customer,
            items: formData.items,
            total: `Rs. ${Number(formData.total).toLocaleString()}`,
            payment: formData.payment,
            status: formData.status,
            time: "Just now",
            action: "View",
        };

        setOrders((currentOrders) => [newOrder, ...currentOrders]);
    };

    return (
        <div>
            {/* <ZodiacVirgo/> */}
            {viewModal ? <ViewModal view={setViewModal}/> : ""}
            <div className="flex justify-between px-2">
                <StateCard/>
                <StateCard/>
                <StateCard/>
                <StateCard/>
            </div>
            <div className="flex justify-between">
                <SearchInput />
                <button type="button" onClick={() => setIsModalOpen(true)} className="rounded-lg bg-orange-500 px-3 py-2 text-sm font-semibold text-white transition hover:bg-orange-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500">Add Order</button>
            </div>
            <div>
                <Table title="Recent Orders" orderColumns={orderColumns} data={orders}  view={setViewModal}/>
            </div>

            <AddOrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={addOrder} />
        </div>
    );
}

export default Order;
