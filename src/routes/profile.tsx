import { Outlet, createFileRoute } from '@tanstack/react-router';
import ProfileLayout from '@/components/ui/profile-layout';
export const Route = createFileRoute('/profile')({
  component: ProfileLayoutComponent,
});

function ProfileLayoutComponent() {
  return (
    <>
      <ProfileLayout>
        <Outlet />
      </ProfileLayout>
    </>
  );
}
