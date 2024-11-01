import React, { forwardRef, SVGProps } from 'react';

interface RoundSortVerticalBoldDuotoneProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const RoundSortVerticalBoldDuotone = forwardRef<
  SVGSVGElement,
  RoundSortVerticalBoldDuotoneProps
>(({ variant, color = 'currentColor', size = 24, className, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      className={className}
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...rest}
    >
      <path
        fill={color}
        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10"
        opacity=".5"
      ></path>
      <path
        fill={color}
        d="M11.445 10.246a.75.75 0 1 0 1.11 1.008L13.75 9.94V16a.75.75 0 0 0 1.5 0V9.94l1.195 1.315a.75.75 0 1 0 1.11-1.01l-2.5-2.75a.75.75 0 0 0-1.11 0z"
      ></path>
      <path
        fill={color}
        d="M7.555 12.746a.75.75 0 1 0-1.11 1.008l2.5 2.75a.75.75 0 0 0 1.11 0l2.5-2.75a.75.75 0 0 0-1.11-1.008L10.25 14.06V8a.75.75 0 1 0-1.5 0v6.06z"
      ></path>
    </svg>
  );
});

RoundSortVerticalBoldDuotone.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default RoundSortVerticalBoldDuotone;
