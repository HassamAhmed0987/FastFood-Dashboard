





// function Header() {
//     return (
//         <div className="flex justify-between">
//             <div>
//                 <h1>Dashboard</h1>
//                 <p>welcome Admin</p>
//             </div>
//             <div className="flex items-center gap-3">
//                 <div className="bg-orange-400 rounded-full w-10 h-10 text-white font-bold flex justify-center items-center">AD</div>
//                 <div>
//                     <h2>Admin</h2>
//                     <p>Admin@outlook.com</p>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Header

function Header() {
    return (
        <header className="mb-6 flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-6 py-4 shadow-sm">

            {/* Left */}
            <div>
                <h1 className="text-2xl font-bold text-slate-800">
                    Dashboard
                </h1>

                <p className="mt-1 text-sm text-slate-500">
                    Welcome back, Admin 👋
                </p>
            </div>

            {/* Right */}
            <div className="flex items-center gap-4">

                {/* Avatar */}
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-lg font-bold text-white shadow-md">
                    AD
                </div>

                {/* User Info */}
                <div className="text-right">
                    <h2 className="font-semibold text-slate-800">
                        Admin
                    </h2>

                    <p className="text-sm text-slate-500">
                        admin@outlook.com
                    </p>
                </div>

            </div>

        </header>
    );
}

export default Header;