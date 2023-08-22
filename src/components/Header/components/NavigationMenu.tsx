import Link from 'next/link';
import React from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@codewinglet/ui/navigation-menu';
import { cn } from '@codewinglet/utils';
import { navMenu } from '../constants';

const NavMenu = () => (
  <NavigationMenu>
    <NavigationMenuList className='flex gap-4'>
      {navMenu.map((menu, index) => (
        <NavigationMenuItem
          key={index}
          className='uppercase text-black font-500'
        >
          {menu.children ? (
            <>
              <NavigationMenuTrigger className='uppercase'>
                {menu.label}
              </NavigationMenuTrigger>
              <NavigationMenuContent className='bg-white px-5 py-4'>
                <ul
                  className={`${
                    menu.label !== 'Technology'
                      ? 'grid grid-rows-5 grid-flow-col gap-4'
                      : 'flex gap-5'
                  } `}
                >
                  {menu.children.map((item: any, index) => (
                    <>
                      {item.menu ? (
                        <li>
                          <NavigationMenuLink className='text-black'>
                            {item.name}
                          </NavigationMenuLink>
                          <hr />
                          {item.menu.map((list: any) => (
                            <ListItem key={index} href={list.path}>
                              {list.label}
                            </ListItem>
                          ))}
                        </li>
                      ) : (
                        <ListItem
                          className='whitespace-nowrap p-0 text-lightBlack'
                          key={index}
                          href={item.path}
                        >
                          {item.label}
                        </ListItem>
                      )}
                    </>
                  ))}
                </ul>
              </NavigationMenuContent>
            </>
          ) : (
            <Link href={menu.path || ''} legacyBehavior passHref>
              <NavigationMenuLink>{menu.label}</NavigationMenuLink>
            </Link>
          )}
        </NavigationMenuItem>
      ))}
    </NavigationMenuList>
  </NavigationMenu>
);

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => (
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
        <div className='text-sm font-medium leading-none'>{title}</div>
        <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
          {children}
        </p>
      </a>
    </NavigationMenuLink>
  </li>
));
ListItem.displayName = 'ListItem';

export default NavMenu;
