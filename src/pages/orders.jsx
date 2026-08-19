import { useEffect, useState } from "react";
import AddOrderModal from "../components/addOrderModal";
import SearchInput from "../components/searchInput";
// import { recentOrders } from "../data/recentOrder";
import Table from "../components/table";
import StateCard from "../components/stateCard";
import { BadgeCheck, CookingPot, ShoppingBag, Timer } from "lucide-react";
import Modal from "../components/modal";
import OrderDetail from "../components/orderDetail";

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
const API_URL = "http://localhost:3000/"
function Order() {
    const [orders, setOrders] = useState([]);
    const [isOpen, setIsOpen] = useState(false)
    const [modalType, setModalType] = useState("");
    const [selectedData, setSelectedData] = useState(null);

    useEffect(() => {
        fetchData()
    }, [])

    async function fetchData() {
        try {

            const response = await fetch(`${API_URL}orders`)

            const data = await response.json()

            setOrders(data)
        } catch (error) {
            console.log(error);
        }

    }


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

    const handleOrderView = (data) => {
        setSelectedData(data)
        setIsOpen(true)
        setModalType("orderDetail")

    }
    const handleAddOrder = () => {
        // setSelectedData(data)
        setIsOpen(true)
        setModalType("addOrder")

    }

    const totalOrders = orders.length
    const pendingOrders = orders.filter(order => order.status === "Pending").length
    const preparingOrders = orders.filter(order => order.status === "Preparing").length
    const completedOrders = orders.filter(order => order.status === "Completed").length

    return (
        <div>
            <Modal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                title={
                    modalType === "orderDetail" ? "Order Detail" : "Add Order"
                }
            >
                {modalType === "orderDetail" && (
                    <OrderDetail order={selectedData} />
                )}
                {modalType === "addOrder" && (
                    <AddOrderModal/>
                )}
            </Modal>
            <div className="flex justify-between px-2">
                <StateCard title={"Total Orders"} value={totalOrders} icon={<ShoppingBag />} />
                <StateCard title={"Pending Orders"} value={pendingOrders} icon={<Timer />} />
                <StateCard title={"Preparing Orders"} value={preparingOrders} icon={<CookingPot />} />
                <StateCard title={"Completed Orders"} value={completedOrders} icon={<BadgeCheck />} />
            </div>
            <div className="flex justify-between">
                <SearchInput />
                <button type="button" onClick={() => handleAddOrder()} className="rounded-lg bg-orange-500 px-3 py-2 text-sm font-semibold text-white transition hover:bg-orange-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500">Add Order</button>
            </div>
            <div>
                <Table title="Recent Orders" orderColumns={orderColumns} data={orders} view={handleOrderView} />
            </div>
        </div>
    );
}

export default Order;
