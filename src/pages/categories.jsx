import SearchInput from "../components/searchInput"
import { categoryData } from "../data/category";
import Table from "../components/table";
import { useState } from "react";
import AddCategory from "../components/addCategoryModal";
const categoryColumns = [
    { header: "Category Name", accessor: "name" },
    { header: "Description", accessor: "description" },
    { header: "Products", accessor: "products" },
    { header: "Status", accessor: "status" },
];



function Categories() {
    const [addCategory, setAddCategory] = useState(false)




    return (
        <div>
            {addCategory ? <AddCategory view={setAddCategory}/> : ""}
            <div className="flex justify-between">
                <SearchInput />
                <button type="button" onClick={() => setAddCategory(true)} className="rounded-lg bg-orange-500 px-3 py-2 text-sm font-semibold text-white transition hover:bg-orange-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500">Add Category</button>
            </div>
            <div>
                <Table title="Category" orderColumns={categoryColumns} data={categoryData} />
            </div>

        </div>
    )
}



export default Categories














