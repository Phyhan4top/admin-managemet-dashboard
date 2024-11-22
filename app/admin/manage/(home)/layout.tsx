import DashboardTemplate from '@component/templates/DashboardTemplate';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <DashboardTemplate>
      <div className="min-h-[calc(100vh-50px)] rounded-[2rem] bg-white-50 px-5 py-[25px] md:px-[30px]">
        {children}
      </div>
    </DashboardTemplate>
  );
}
