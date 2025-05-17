import SectionManagement from '@/components/SectionManagement/SectionManagement';
import ProductManagement from '@/components/ProductManagement/ProductManagement';
import UserManagement from '@/components/UserManagement/UserManagement';
import OrderManagement from '@/components/OrderManagement/OrderManagement';
import NotificationManagement from '@/components/NotificationManagement/NotificationManagement';
import BranchManagement from '@/components/BranchManagement/BranchManagement';

export default function MainContent() {
  return (
    <div className="flex-1 p-6 bg-gray-800 ">
      <h1 className="text-3xl font-bold text-amber-500 mb-6">لوحة التحكم</h1>
      <SectionManagement />
      <ProductManagement />
      <UserManagement />
      <OrderManagement />
      <NotificationManagement />
      <BranchManagement />
    </div>
  );
}