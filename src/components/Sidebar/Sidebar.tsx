export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-900 p-4">
      <h2 className="text-2xl font-bold text-amber-500 mb-6">لوحة التحكم</h2>
      <ul className="space-y-2">
        <li>
          <a href="#sections" className="block p-2 hover:bg-amber-500 hover:text-black rounded">
            إدارة الأقسام
          </a>
        </li>
        <li>
          <a href="#products" className="block p-2 hover:bg-amber-500 hover:text-black rounded">
            إدارة المنتجات
          </a>
        </li>
        <li>
          <a href="#users" className="block p-2 hover:bg-amber-500 hover:text-black rounded">
            إدارة المستخدمين
          </a>
        </li>
        <li>
          <a href="#orders" className="block p-2 hover:bg-amber-500 hover:text-black rounded">
            الطلبات
          </a>
        </li>
        <li>
          <a href="#notifications" className="block p-2 hover:bg-amber-500 hover:text-black rounded">
            الإشعارات
          </a>
        </li>
        <li>
          <a href="#branches" className="block p-2 hover:bg-amber-500 hover:text-black rounded">
            الفروع
          </a>
        </li>
      </ul>
    </div>
  );
}