function OrderDetails({ order }) {
  return (
    <div className="space-y-5">

      <div className="grid grid-cols-2 gap-4">

        <div>
          <p className="text-sm text-gray-500">Order ID</p>
          <h2 className="font-semibold">{order.id}</h2>
        </div>

        <div>
          <p className="text-sm text-gray-500">Customer</p>
          <h2 className="font-semibold">{order.customer}</h2>
        </div>

        <div>
          <p className="text-sm text-gray-500">Items</p>
          <h2 className="font-semibold">{order.items}</h2>
        </div>

        <div>
          <p className="text-sm text-gray-500">Total</p>
          <h2 className="font-semibold">
            PKR {order.total}
          </h2>
        </div>

        <div className="col-span-2">
          <p className="text-sm text-gray-500">Status</p>
          <span className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-sm">
            {order.status}
          </span>
        </div>

      </div>

    </div>
  );
}

export default OrderDetails;