import React, { forwardRef, SVGProps } from 'react';

interface RoundAltArrowDownBoldDuotoneProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const RoundAltArrowDownBoldDuotone = forwardRef<
  SVGSVGElement,
  RoundAltArrowDownBoldDuotoneProps
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
        d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2 2 6.477 2 12"
        opacity=".5"
      ></path>
      <path
        fill={color}
        d="M15.53 11.03a.75.75 0 1 0-1.06-1.06L12 12.44 9.53 9.97a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0z"
      ></path>
    </svg>
  );
});

RoundAltArrowDownBoldDuotone.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default RoundAltArrowDownBoldDuotone;
