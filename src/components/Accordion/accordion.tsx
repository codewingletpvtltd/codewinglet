'use client';

import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { cn } from '@codewinglet/utils';
import { ExternalAccordionPrimitiveTrigger } from './types';

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn('border-b1', className)}
    {...props}
  />
));
AccordionItem.displayName = 'AccordionItem';

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> &
    ExternalAccordionPrimitiveTrigger
>(({ className, children, icon, ...props }, ref) => (
  <AccordionPrimitive.Header className='flex'>
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        'flex flex-1 items-center justify-between py-4 font-medium transition-all leading-[30px] [&[data-state=open]>.icon-container>.icon-container]:rotate-90 [&[data-state=open]>.icon-container>.vertical]:rotate-90 [&[data-state=open]>.icon-container>.horizontal]:opacity-0 font-[800] md:text-[22px] lg:text-[25px]',
        className
      )}
      {...props}
    >
      {children}
      {}

      {icon ? (
        icon
      ) : (
        <div className='icon-container relative h-[15px] w-[15px] md:h-[19px] md:w-[19px]'>
          <span className='horizontal absolute block rounded-full w-full h-[3px] bg-primary translate-y-[-50%] top-[50%] transition-all'></span>
          <span className='vertical absolute block rounded-full w-[3px] h-full bg-primary translate-x-[-50%] left-[50%] transition-all'></span>
        </div>
      )}
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      'overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
      className
    )}
    {...props}
  >
    <div className='pb-[9px] pt-[21px]'>{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
