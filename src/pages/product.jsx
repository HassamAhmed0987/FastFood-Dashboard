import Table from "../components/table"
import SearchInput from "../components/searchInput"
import { productData } from "../data/product";
import ProductViewModal from "../components/productModal";
import { useState } from "react";
import AddProductModal from "../components/addProductModal";

export const productColumns = [
    { header: "Product Name", accessor: "name" },
    { header: "Category", accessor: "category" },
    { header: "Price", accessor: "price" },
    { header: "Stock", accessor: "stock" },
    { header: "Action", accessor: "action" },
];


function Product() {

    const [openModal, setOpenModal] = useState(false)
    const [addProduct, setAddProduct] = useState(false)



    return (
        <div>
            {openModal ? <ProductViewModal view={setOpenModal} /> : " "}
            {addProduct ? <AddProductModal view={setAddProduct} /> : " "}
            <div className="flex justify-between">
                <SearchInput />
                <button className="rounded-lg bg-orange-500 px-3 py-2 text-sm font-semibold text-white transition hover:bg-orange-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500" onClick={() => setAddProduct(true)}>Add Product</button>
            </div>
            <div>
                <Table title="Products" orderColumns={productColumns} data={productData} view={setOpenModal} />
            </div>

        </div>
    )
}

export default Product
























