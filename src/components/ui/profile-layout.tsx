import { SidebarNav } from './sidebar-nav';

const sidebarNavItems = [
  {
    title: 'Profile',
    to: '/profile',
  },
  {
    title: 'Account',
    to: '/profile/account',
  },
  {
    title: 'Wishlist',
    to: '/profile/wishlist',
  },
  {
    title: 'Order History',
    to: '/profile/orders',
  },
];

interface ProfileLayoutProps {
  children: React.ReactNode;
}

export default function ProfileLayout({ children }: ProfileLayoutProps) {
  return (
    <>
      <div className="hidden space-y-6 p-20 pb-24 md:block">
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <SidebarNav items={sidebarNavItems} />
          <div className="flex-1 lg:max-w-2xl">{children}</div>
        </div>
      </div>
    </>
  );
}
