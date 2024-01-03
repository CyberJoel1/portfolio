import { NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';


const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, href , ...props }, ref) => {

  return (
    <NavigationMenuItem asChild>
      <Link href={href || ''} legacyBehavior passHref
        ref={ref}
        className={cn(
          "w-full block select-none space-y-1 rounded-md p-1 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          className
        )}
        {...props}>
        <NavigationMenuLink className={navigationMenuTriggerStyle().concat(" !w-full text-xs text-white bg-black md:!w-max !px-3")}>
          {children}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  )
})
ListItem.displayName = "ListItem"

export default ListItem;