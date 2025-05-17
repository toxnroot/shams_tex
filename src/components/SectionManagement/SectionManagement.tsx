'use client';
import { useState } from 'react';
import SectionDialog from '@/components/SectionDialog/SectionDialog';

export default function SectionManagement() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  return (
    <div id="sections" className="mb-8">
      <h2 className="text-2xl font-bold text-amber-500 mb-4">إدارة الأقسام</h2>
      <div className="bg-gray-900 p-4 rounded">
        <button
          onClick={openDialog}
          className="bg-amber-500 text-black px-4 py-2 rounded hover:bg-amber-600"
        >
          إضافة قسم جديد
        </button>
        <div className="mt-4">
          <div className="flex justify-between items-center p-2 bg-gray-700 rounded">
            <span>قسم 1</span>
            <div>
              <button className="bg-amber-500 text-black px-2 py-1 rounded mr-2 hover:bg-amber-600">
                تعديل
              </button>
              <button className="bg-red-600 px-2 py-1 rounded hover:bg-red-700">
                حذف
              </button>
            </div>
          </div>
        </div>
      </div>
      <SectionDialog isOpen={isDialogOpen} onClose={closeDialog} />
    </div>
  );
}