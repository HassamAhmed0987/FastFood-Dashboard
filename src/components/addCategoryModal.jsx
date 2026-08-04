


// function AddCategory() {
//     return(
//         <div>
//             <div>
//                 <h1>Add Category</h1>

//                 <input type="text" name="" id="" />
//                 <input type="textarea" name="" id="" />
//                 <select name="" id="">
//                     <option value="">Active</option>
//                     <option value="">inactive</option>
//                 </select>
//                 <hr />
//                 <div>
//                     <button>Cencel</button>
//                     <button>Save</button>
//                 </div>
//             </div>

//         </div>
//     )
// }

// export default AddCategory


function AddCategory({ view }) {
    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="w-full max-w-lg bg-white rounded-xl shadow-xl p-6">
                {/* Header */}
                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-gray-800">
                        Add Category
                    </h1>
                    <p className="text-sm text-gray-500 mt-1">
                        Create a new category for your products.
                    </p>
                </div>

                {/* Form */}
                <div className="space-y-5">
                    {/* Category Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Category Name
                        </label>
                        <input
                            type="text"
                            placeholder="Enter category name"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Description
                        </label>

                        <textarea
                            rows="4"
                            placeholder="Enter category description"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 resize-none outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                    </div>

                    {/* Status */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Status
                        </label>

                        <select className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500">
                            <option>Active</option>
                            <option>Inactive</option>
                        </select>
                    </div>
                </div>

                {/* Footer */}
                <hr className="my-6" />

                <div className="flex justify-end gap-3">
                    <button className="px-5 py-2 rounded-lg border border-orange-600 text-orange-600 font-bold hover:bg-orange-500 hover:text-white transition"
                        onClick={() => view(false)}
                    >
                        Cancel
                    </button>

                    <button className="rounded-lg bg-orange-500 px-3 py-2 text-sm font-semibold text-white transition hover:bg-orange-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500">
                        Save Category
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AddCategory;




