export default function OrderManagement() {
  return (
    <div id="orders" className="mb-8">
      <h2 className="text-2xl font-bold text-amber-500 mb-4">الطلبات</h2>
      <div className="bg-gray-900 p-4 rounded">
        <div className="mt-4">
          <div className="flex justify-between items-center p-2 bg-gray-700 rounded">
            <span>طلب #001</span>
            <button className="bg-amber-500 text-black px-2 py-1 rounded hover:bg-amber-600">
              عرض التفاصيل
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}