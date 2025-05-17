'use client';
import { useState } from 'react';

export default function ProductDialog({ isOpen, onClose }) {
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productColor, setProductColor] = useState('');
  const [selectedSection, setSelectedSection] = useState('');
  const [image, setImage] = useState(null);

  // قائمة أمثلة للأقسام (يمكن استبدالها ببيانات من Firebase)
  const sections = ['قسم 1', 'قسم 2', 'قسم 3', 'قسم 4'];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-black">
        <h3 className="text-xl font-bold text-amber-500 mb-4">إضافة منتج جديد</h3>
        {/* قائمة منسدلة قابلة للبحث */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">اختر القسم</label>
          <input
            type="text"
            list="sections"
            value={selectedSection}
            onChange={(e) => setSelectedSection(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            placeholder="ابحث عن القسم..."
          />
          <datalist id="sections">
            {sections.map((section, index) => (
              <option key={index} value={section} />
            ))}
          </datalist>
        </div>
        {/* اسم المنتج */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">اسم المنتج</label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            placeholder="أدخل اسم المنتج"
          />
        </div>
        {/* وصف المنتج */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">وصف المنتج</label>
          <textarea
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            placeholder="أدخل وصف المنتج"
          />
        </div>
        {/* سعر المنتج */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">سعر المنتج</label>
          <input
            type="number"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            placeholder="أدخل السعر"
          />
        </div>
        {/* ألوان المنتج */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">ألوان المنتج</label>
          <input
            type="text"
            value={productColor}
            onChange={(e) => setProductColor(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            placeholder="أدخل الألوان (مثال: أحمر, أزرق)"
          />
        </div>
        {/* اختيار الصورة */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">صورة المنتج</label>
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            className="w-full p-2 border border-gray-300 rounded mt-1"
          />
        </div>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            إلغاء
          </button>
          <button
            className="px-4 py-2 bg-amber-500 text-black rounded hover:bg-amber-600"
          >
            تأكيد
          </button>
        </div>
      </div>
    </div>
  );
}