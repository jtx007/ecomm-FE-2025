import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/profile/wishlist')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Wishlist</div>;
}
