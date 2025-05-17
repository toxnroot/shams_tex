import Sidebar from '@/components/Sidebar/Sidebar';
import MainContent from '@/components/MainContent/MainContent';

export default function Dashboard() {
  return (
    <div className="flex w-full min-h-screen max-h-full bg-black text-white relative">
      <Sidebar />
      <MainContent />
    </div>
  );
}