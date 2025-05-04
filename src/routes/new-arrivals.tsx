import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/new-arrivals')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>New Arrivals</div>;
}
