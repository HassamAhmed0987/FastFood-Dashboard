import { Boxes } from "lucide-react";




function StateCard({title, value, icon}) {
    return (
        <>
            {/*
            <div className="border ">
                <div className="flex gap-x-5">
                    <h1 className="text-2xl">Total Products</h1>
                    <span>
                        <Boxes size={30} />
                    </span>
                </div>
                <h1 className="text-4xl">155</h1>
            </div>
            */}
            <div className="group w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-200/60 transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-100/70">
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <p className="text-sm font-semibold tracking-wide text-slate-500">{title}</p>
                        <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-slate-800">{value}</h1>
                    </div>
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-orange-100 text-orange-500 ring-1 ring-orange-200 transition duration-300 group-hover:bg-orange-500 group-hover:text-white">
                        {icon}
                    </span>
                </div>
                <div className="mt-5 h-1 w-12 rounded-full bg-orange-500" />
            </div>
        </>
    )
}


export default StateCard
