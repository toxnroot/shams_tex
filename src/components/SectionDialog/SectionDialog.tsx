'use client';
import { useState } from 'react';

export default function SectionDialog({ isOpen, onClose }) {
  const [sectionName, setSectionName] = useState('');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0  bg-opacity-50 flex items-center justify-center z-50 w-full h-screen ">
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-96">
        <h3 className="text-xl font-bold text-amber-500 mb-4">إضافة قسم جديد</h3>
        <input
          type="text"
          value={sectionName}
          onChange={(e) => setSectionName(e.target.value)}
          placeholder="أدخل اسم القسم"
          className="w-full p-2 mb-4 bg-gray-800 text-white border border-amber-500 rounded"
        />
        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-red-600 rounded hover:bg-red-700"
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