import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/profile/account')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Account Information</div>;
}
