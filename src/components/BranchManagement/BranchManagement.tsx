export default function BranchManagement() {
  return (
    <div id="branches" className="mb-8">
      <h2 className="text-2xl font-bold text-amber-500 mb-4">الفروع</h2>
      <div className="bg-gray-900 p-4 rounded">
        <button className="bg-amber-500 text-black px-4 py-2 rounded hover:bg-amber-600 mb-4">
          إضافة فرع جديد
        </button>
        <div className="mt-4">
          <div className="flex justify-between items-center p-2 bg-gray-700 rounded">
            <span>فرع 1</span>
            <button className="bg-amber-500 text-black px-2 py-1 rounded hover:bg-amber-600">
              تعديل
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}