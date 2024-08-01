/* eslint-disable import/order */
'use client';

import { cn } from '@codewinglet/utils';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import * as React from 'react';
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
        'relative flex flex-1 items-center justify-between py-[30px] [&[data-state=open]]:py-0 [&[data-state=open]]:pb-5 first:pt-0 font-medium transition-all cubic-bezier-0.59,-0.01,0.42,0.98 duration-500 leading-[30px] [&[data-state=open]>.icon-container>.icon-container]:rotate-90 [&[data-state=open]>.icon-container>.vertical]:rotate-90 [&[data-state=open]>.icon-container>.horizontal]:opacity-0 md:text-[22px] lg:text-[25px]',
        className
      )}
      {...props}
    >
      {children}

      {icon ? (
        icon
      ) : (
        <div className='absolute right-5 icon-container h-[15px] w-[15px] md:h-[19px] md:w-[19px]'>
          <span className='horizontal absolute block rounded-full w-full h-[1px] bg-secondary translate-y-[-50%] top-[50%] transition-all cubic-bezier-0.59,-0.01,0.42,0.98 duration-500'></span>
          <span className='vertical absolute block rounded-full w-[1px] h-full bg-secondary translate-x-[-50%] left-[50%] transition-all cubic-bezier-0.59,-0.01,0.42,0.98 duration-500'></span>
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
      'overflow-hidden text-sm  data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down AccordionContent',
      className
    )}
    {...props}
  >
    <div className='mb-[30px] border-l border-headerBoxBorder'>{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
