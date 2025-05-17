export default function NotificationManagement() {
  return (
    <div id="notifications" className="mb-8">
      <h2 className="text-2xl font-bold text-amber-500 mb-4">الإشعارات</h2>
      <div className="bg-gray-900 p-4 rounded">
        <button className="bg-amber-500 text-black px-4 py-2 rounded hover:bg-amber-600 mb-4">
          إرسال إشعار
        </button>
      </div>
    </div>
  );
}