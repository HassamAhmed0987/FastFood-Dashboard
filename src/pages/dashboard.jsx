import Table from "../components/table"
import StateCard from "../components/stateCard"
// import { recentOrders } from "../data/recentOrder"
// import { topProducts } from "../data/topSelling";
import { useEffect, useState } from "react";
import { Await } from "react-router-dom";
import { Banknote, Boxes, ShoppingBag, Timer } from "lucide-react";
import Modal from "../components/modal";
import ProductForm from "../forms/productForm";
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
const productColumns = [
    { header: "Product", accessor: "name" },
    { header: "Sold", accessor: "sold" },
    { header: "Revenue", accessor: "revenue" },
    { header: "Action", accessor: "action" },
];

function Dashboard() {
    const [orders, setOrders] = useState([])
    const [topProducts, setTopProducts] = useState([])
    const [products, setProducts] = useState([])
    const [isOpen, setIsOpen] = useState(false)
    const [modalType, setModalType] = useState("");
    const [selectedData, setSelectedData] = useState(null);

    const API_URL = "http://localhost:3000/"

    useEffect(() => {
        fetchData()
        fetchProducts()
    }, [])

    async function fetchData() {
        try {
            const response = await fetch(`${API_URL}orders`)
            const resp = await fetch(`${API_URL}topProducts`)

            const topProductData = await resp.json()

            const data = await response.json()

            setTopProducts(topProductData)
            setOrders(data)
        } catch (error) {
            console.log(error);
        }
    }
    async function fetchProducts() {
        try {
            const response = await fetch(`${API_URL}products`)

            const productData = await response.json()

            setProducts(productData)
        } catch (error) {
            console.log(error);
        }
    }




    const totalProducts = products.length
    const totalOrders = orders.length
    const totalRevenue = orders
        .filter(order => order.status === "Completed")
        .reduce((acc, order) => (acc = acc + order.total), 0);

    const pendingOrders = orders.filter(order => order.status === "Pending").length

    const handleOrderView = (order) => {
        setSelectedData(order);
        setModalType("order-detail");
        setIsOpen(true);
    };

    const handleProductView = (product) => {
        setSelectedData(product);
        setModalType("product-detail");
        setIsOpen(true);
    };

    // console.log(totalRevenue);

    // console.log(products.length);    

    return (
        <div>
            <Modal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                title={
                    modalType === "order-detail"
                        ? "Order Details"
                        : "Product Details"
                }
            >
                {modalType === "order-detail" && (
                    <OrderDetail order={selectedData} />
                )}

                {modalType === "product-detail" && (
                    <ProductDetail product={selectedData} />
                )}
            </Modal>
            <div className="px-2 py-3 flex justify-around">
                <StateCard title={"Total Products"} value={totalProducts} icon={<Boxes />} />
                <StateCard title={"Total Orders"} value={totalOrders} icon={<ShoppingBag />} />
                <StateCard title={"$ Revenue"} value={totalRevenue} icon={<Banknote />} />
                <StateCard title={"Pending Orders"} value={pendingOrders} icon={<Timer />} />
            </div>
            <div className="h-[100vh] overflow-auto">
                <Table
                    title="Recent Orders"
                    orderColumns={orderColumns}
                    data={orders}
                    view={handleOrderView}
                />
                {/* Top Selling Products table is kept commented to prevent a second table header from rendering. */}
                {/* <Table
                    title="Top Selling Products"
                    orderColumns={productColumns}
                    data={topSellingProducts}
                    view={handleProductView}
                /> */}

            </div>
        </div>
    )
}

export default Dashboard
