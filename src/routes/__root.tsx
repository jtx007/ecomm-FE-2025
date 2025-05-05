import { createRootRouteWithContext, Link, Outlet } from '@tanstack/react-router';
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

import { cn } from '@/lib/utils';
import React, { memo } from 'react';
import { buttonVariants } from '@/components/ui/button';
import { UserRound, ShoppingBag, Star } from 'lucide-react';
import User from '@/types/user';
import { ThemeProvider } from '@/components/ui/theme-provider';
import { ThemeToggle } from '@/components/ui/theme-toggle';

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

const Navigation = memo(() => (
  <>
    <div className="p-2 flex justify-around  w-full ">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link to="/new-arrivals" className={navigationMenuTriggerStyle()}>
              New Arrivals
            </Link>
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
            <Link to="/about" className={navigationMenuTriggerStyle()}>
              About Us
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex  place-self-end">
        <Link to="/profile" className={cn(buttonVariants({ variant: 'link' }))}>
          <UserRound />
        </Link>
        <Link to="/profile/wishlist" className={cn(buttonVariants({ variant: 'link' }))}>
          <Star />
        </Link>
        <Link to="/cart" className={cn(buttonVariants({ variant: 'link' }))}>
          <ShoppingBag />
        </Link>
        <ThemeToggle />
      </div>
    </div>
  </>
));
Navigation.displayName = 'Navigation';

interface MyRouterContext {
  user: User;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: () => (
    <>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <Navigation />
        <hr />
        <Outlet />
        <TanStackRouterDevtools />
      </ThemeProvider>
    </>
  ),
});
