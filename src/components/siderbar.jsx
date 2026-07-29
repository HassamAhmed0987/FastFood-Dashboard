import { Link, NavLink } from "react-router-dom";
import {
    Home,
    ShoppingBag,
    ClipboardList,
    Users,
    UserCog,
    Settings,
    BarChart3,
    Package,
    MessageSquare,
    LogOut,
} from "lucide-react";

export const navItems = [
    {
        title: "Dashboard",
        url: "/",
        icon: Home,
    },
    {
        title: "Orders",
        url: "/orders",
        icon: ClipboardList,
    },
    {
        title: "Products",
        url: "/products",
        icon: ShoppingBag,
    },
    {
        title: "Categories",
        url: "/categories",
        icon: Package,
    },
    {
        title: "Customers",
        url: "/customers",
        icon: Users,
    },
    {
        title: "Staff",
        url: "/staff",
        icon: UserCog,
    },
    {
        title: "Analytics",
        url: "/analytics",
        icon: BarChart3,
    },
    {
        title: "Reviews",
        url: "/reviews",
        icon: MessageSquare,
    },
];

const lastItems = [
    {
        title: "Settings",
        url: "/settings",
        icon: Settings,
    },
    {
        title: "Logout",
        url: "/logout",
        icon: LogOut,
    },
]




/* Original Sidebar code (kept as requested before Tailwind-only styling).
function Sidebar() {
    return (
        <div className="border h-full">
            <div className="h-full">
                <h1 className="text-2xl"><span></span> FastFood</h1>
                <div className="h-[100vh] flex flex-col justify-between px-2">
                    <ul>
                        {navItems.map(item => {
                            const Icon = item.icon
                            return <li className="border px-2 py-2 rounded-xl my-1" key={item.title}><Link className="flex items-center" to={item.url}><span className="mx-1"><Icon size={20} /></span> {item.title}</Link></li>
                        })}
                    </ul>
                    <ul>
                        {lastItems.map(item => {
                            const Icon = item.icon
                            return <li className="border px-2 py-2 rounded-xl my-1" key={item.title}><Link className="flex items-center" to={item.url}><span className="mx-1"><Icon size={20} /></span> {item.title}</Link></li>
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}
*/

function Sidebar() {
    const itemClass = "group overflow-hidden rounded-xl border border-transparent transition duration-200 hover:translate-x-1 hover:border-white/10 hover:bg-white/8";
    const linkClass = "flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold text-slate-300 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-orange-400";

    return (
        <aside className="h-full min-w-55 overflow-hidden bg-linear-to-b from-slate-800 to-slate-950 text-slate-50 shadow-xl shadow-slate-950/15">
            <div className="flex h-full flex-col">
                <h1 className="flex items-center gap-3 px-6 pt-7 pb-5 text-2xl font-extrabold tracking-tight text-white">
                    <span className="h-3 w-3 rounded-full bg-orange-500 ring-5 ring-orange-500/15" />
                    FastFood
                </h1>

                <div className="flex min-h-0 flex-1 flex-col justify-between px-3 pb-5">
                    <ul className="space-y-1">
                        {navItems.map(item => {
                            const Icon = item.icon;

                            return (
                                <li className={itemClass} key={item.title}>
                                    <NavLink
                                        className={({ isActive }) => `${linkClass} ${isActive ? "bg-orange-500/20 text-white ring-1 ring-inset ring-orange-400/30" : ""}`}
                                        to={item.url}
                                        end
                                    >
                                        {({ isActive }) => (
                                            <>
                                                <span className={`grid h-7 w-7 place-items-center rounded-lg ${isActive ? "bg-orange-500/20 text-orange-300" : "bg-white/6 text-slate-400 group-hover:text-slate-200"}`}>
                                                    <Icon size={19} />
                                                </span>
                                                {item.title}
                                            </>
                                        )}
                                    </NavLink>
                                </li>
                            );
                        })}
                    </ul>

                    <ul className="border-t border-white/10 pt-3 space-y-1">
                        {lastItems.map(item => {
                            const Icon = item.icon;

                            return (
                                <li className={itemClass} key={item.title}>
                                    <Link className={linkClass} to={item.url}>
                                        <span className="grid h-7 w-7 place-items-center rounded-lg bg-white/6 text-slate-400 group-hover:text-slate-200">
                                            <Icon size={19} />
                                        </span>
                                        {item.title}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </aside>
    );
}



export default Sidebar
