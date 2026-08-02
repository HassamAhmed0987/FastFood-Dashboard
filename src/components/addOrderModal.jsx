import { useEffect, useState } from "react";
import { X } from "lucide-react";

function AddOrderModal({ isOpen, onClose, onSubmit }) {
    const [formData, setFormData] = useState({
        customer: "",
        items: "",
        total: "",
        payment: "Cash",
        status: "Pending",
    });

    useEffect(() => {
        if (!isOpen) return undefined;

        const handleEscape = (event) => {
            if (event.key === "Escape") onClose();
        };

        document.addEventListener("keydown", handleEscape);
        return () => document.removeEventListener("keydown", handleEscape);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((currentData) => ({ ...currentData, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(formData);
        setFormData({ customer: "", items: "", total: "", payment: "Cash", status: "Pending" });
        onClose();
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 p-4"
            role="presentation"
            onMouseDown={(event) => {
                if (event.target === event.currentTarget) onClose();
            }}
        >
            <div
                className="w-full max-w-lg rounded-2xl bg-white shadow-2xl"
                role="dialog"
                aria-modal="true"
                aria-labelledby="add-order-title"
            >
                <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5">
                    <div>
                        <h2 id="add-order-title" className="text-xl font-bold text-slate-800">Add New Order</h2>
                        <p className="mt-1 text-sm text-slate-500">Enter the customer order details.</p>
                    </div>
                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Close add order modal"
                        className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700 focus-visible:outline-2 focus-visible:outline-orange-500"
                    >
                        <X size={20} />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 px-6 py-5">
                    <label className="block text-sm font-semibold text-slate-700">
                        Customer name
                        <input name="customer" value={formData.customer} onChange={handleChange} required placeholder="e.g. Ali Khan" className="mt-1.5 w-full rounded-lg border border-slate-200 px-3 py-2.5 font-normal outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100" />
                    </label>

                    <label className="block text-sm font-semibold text-slate-700">
                        Order items
                        <input name="items" value={formData.items} onChange={handleChange} required placeholder="e.g. 2x Zinger Burger, 1x Fries" className="mt-1.5 w-full rounded-lg border border-slate-200 px-3 py-2.5 font-normal outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100" />
                    </label>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <label className="block text-sm font-semibold text-slate-700">
                            Total (Rs.)
                            <input name="total" value={formData.total} onChange={handleChange} required type="number" min="0" placeholder="0" className="mt-1.5 w-full rounded-lg border border-slate-200 px-3 py-2.5 font-normal outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100" />
                        </label>
                        <label className="block text-sm font-semibold text-slate-700">
                            Payment method
                            <select name="payment" value={formData.payment} onChange={handleChange} className="mt-1.5 w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 font-normal outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100">
                                <option>Cash</option>
                                <option>Card</option>
                                <option>Online</option>
                            </select>
                        </label>
                    </div>

                    <label className="block text-sm font-semibold text-slate-700">
                        Status
                        <select name="status" value={formData.status} onChange={handleChange} className="mt-1.5 w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 font-normal outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100">
                            <option>Pending</option>
                            <option>Preparing</option>
                            <option>Completed</option>
                        </select>
                    </label>

                    <div className="flex justify-end gap-3 border-t border-slate-100 pt-5">
                        <button type="button" onClick={onClose} className="rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-50">Cancel</button>
                        <button type="submit" className="rounded-lg bg-orange-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500">Create Order</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddOrderModal;
