import { X } from "lucide-react";





function Modal({ isOpen, onClose, title, children }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
            <div className="bg-white w-[500px] rounded-xl p-6">

                <div className="flex justify-between items-center border-b border-gray-300 pb-3">
                    <h2 className="text-xl font-semibold">
                        {title}
                    </h2>

                    <button onClick={onClose}>
                        <X/>
                    </button>
                </div>

                <div className="mt-5">
                    {children}
                </div>

            </div>
        </div>
    );
}

export default Modal;











