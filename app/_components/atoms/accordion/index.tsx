'use client';
import {
  Accordion,
  AccordionBody,
  AccordionBodyProps,
  AccordionHeader,
  AccordionHeaderProps,
} from '@material-tailwind/react';
import { twMerge } from 'tailwind-merge';

const UiAccordionHeader = (props: Omit<AccordionHeaderProps, 'ref'>) => {
  const { className = '', children, ...rest } = props;

  return (
    <AccordionHeader
      {...rest}
      className={twMerge(`${className}`)}
      style={{
        fontFamily: 'inherit',
      }}
    >
      {children}
    </AccordionHeader>
  );
};

const UiAccordionBody = (props: Omit<AccordionBodyProps, 'ref'>) => {
  const { className = '', children, ...rest } = props;

  return (
    <AccordionBody
      {...rest}
      className={twMerge(`${className}`)}
      style={{
        fontFamily: 'inherit',
      }}
    >
      {children}
    </AccordionBody>
  );
};

export { Accordion as UiAccordion, UiAccordionBody, UiAccordionHeader };
