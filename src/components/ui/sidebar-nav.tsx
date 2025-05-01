'use client';

import { Link } from '@tanstack/react-router';
import { cn } from '@/lib/utils';
import { buttonVariants } from './button';

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    to: string;
    title: string;
  }[];
}

export function SidebarNav({ className, items, ...props }: SidebarNavProps) {
  return (
    <nav className={cn('flex justify-start lg:flex-col  ', className)} {...props}>
      {items.map(item => (
        <Link
          key={item.to}
          to={item.to}
          className={cn(buttonVariants({ variant: 'ghost' }), 'w-64  flex justify-start pb-5 pt-5')}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
}
