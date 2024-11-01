import React, { forwardRef, SVGProps } from 'react';

interface RoundAltArrowUpBoldDuotoneProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const RoundAltArrowUpBoldDuotone = forwardRef<
  SVGSVGElement,
  RoundAltArrowUpBoldDuotoneProps
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
        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.478 10-10"
        opacity=".5"
      ></path>
      <path
        fill={color}
        d="M8.47 12.97a.75.75 0 0 0 1.06 1.06L12 11.56l2.47 2.47a.75.75 0 0 0 1.06-1.06l-3-3a.75.75 0 0 0-1.06 0z"
      ></path>
    </svg>
  );
});

RoundAltArrowUpBoldDuotone.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default RoundAltArrowUpBoldDuotone;
