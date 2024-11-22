import DashboardMobileNavBar from '@component/organisms/dashboardMobileNav';
import SideBar from '@component/organisms/sideBar';
import { twMerge } from 'tailwind-merge';

export default function DashboardTemplate({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <main
      className={twMerge(
        `relative flex h-screen w-screen items-center justify-center  bg-white-20`,
        className,
      )}
    >
      <aside className="hidden h-screen min-w-[20%]  lg:block">
        <SideBar />
      </aside>
      <section className="h-screen w-full overflow-y-auto p-4 md:p-5  lg:w-[85%] max-lg:pb-16">
        {children}
      </section>
      <DashboardMobileNavBar />
    </main>
  );
}
