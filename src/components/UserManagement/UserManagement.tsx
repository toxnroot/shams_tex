export default function UserManagement() {
  return (
    <div id="users" className="mb-8">
      <h2 className="text-2xl font-bold text-amber-500 mb-4">إدارة المستخدمين</h2>
      <div className="bg-gray-900 p-4 rounded">
        <button className="bg-amber-500 text-black px-4 py-2 rounded hover:bg-amber-600 mb-4">
          إضافة مستخدم جديد
        </button>
        <div className="mt-4">
          <div className="flex justify-between items-center p-2 bg-gray-700 rounded">
            <span>مستخدم 1 (مشرف)</span>
            <div>
              <button className="bg-amber-500 text-black px-2 py-1 rounded mr-2 hover:bg-amber-600">
                تعديل صلاحيات
              </button>
              <button className="bg-red-600 px-2 py-1 rounded hover:bg-red-700">
                حذف
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}