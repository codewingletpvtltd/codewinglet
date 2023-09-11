'use client';

import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { cn } from '@codewinglet/utils';

const Tabs = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Root
    ref={ref}
    className={cn('md:flex', className)}
    {...props}
  />
));
Tabs.displayName = TabsPrimitive.Root.displayName;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      'inline-flex overflow-auto md:flex-col md:min-w-[max-content] md:w-auto pr-[2px] relative before:content-[""] before:absolute md:before:h-[100%] md:before:w-[1px] before:bg-lightBlack before:right-[2px]',
      className
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      'inline-flex items-center gap-[10px] xl:gap-[10px] 2xl:gap-[12px] justify-center whitespace-nowrap text-black px-3 py-1.5 text-[14px] font-primary font-800 ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative after:content-[""] after:h-[2px] after:w-[100%] after:absolute data-[state=active]:after:bg-primary after:bottom-0 :text-primary md:justify-start md:pr-[37px] md:data-[state=active]:b-r-[2px] md:py-[10px] md:after:h-[100%] md:after:w-[4px] md:after:top-0 md:after:right-[-2.8px] border-lightBlack border-b-[1px] md:border-b-0 md:border-r-[1px] lg:text-[16px] xl:text-[18px] xl:py-[12.5px] xl:pr-[12px] 2xl:pr-[29px] [&>svg]:fill-black [&[data-state=active]>svg]:fill-primary data-[state=active]:text-primary',
      className
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:w-full md:ml-[20px] lg:ml-[40px] xl:ml-[37px] 2xl:ml-[55px]',
      className
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
