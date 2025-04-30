import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { buttonVariants } from '@/components/ui/button';
import { User, UserRound } from 'lucide-react';
import { cn } from '@/lib/utils';
import React from 'react';

const navItems: { title: string; href: string; description: string }[] = [
  {
    title: 'Tops',
    href: '/docs/primitives/alert-dialog',
    description: 'Shirts, jackets, tees, coats, sweaters',
  },
  {
    title: 'Bottoms',
    href: '/docs/primitives/hover-card',
    description: 'Pants, trousers, shorts, and things',
  },
  {
    title: 'Accessories',
    href: '/docs/primitives/progress',
    description: 'Hats, scarves, gloves, socks, belts, jewelry',
  },
  {
    title: 'Objects',
    href: '/docs/primitives/scroll-area',
    description: 'housewares, knick knacks, tings',
  },
];

const ListItem = React.forwardRef<React.ElementRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = 'ListItem';

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex border-2 border-amber-600 gap-2">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                New Arrivals
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {navItems.map(navItem => (
                    <ListItem key={navItem.title} title={navItem.title} href={navItem.href}>
                      {navItem.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink>
                <Link to="/about">About Us</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <Link to="/profile" className={buttonVariants({ variant: 'link' })}>
          <UserRound />
        </Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
