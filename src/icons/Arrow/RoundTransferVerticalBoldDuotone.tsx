import React, { forwardRef, SVGProps } from 'react';

interface RoundTransferVerticalBoldDuotoneProps
  extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const RoundTransferVerticalBoldDuotone = forwardRef<
  SVGSVGElement,
  RoundTransferVerticalBoldDuotoneProps
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
        d="M7.565 13.07a.75.75 0 1 0-1.13.986l3 3.437A.75.75 0 0 0 10.75 17V7a.75.75 0 0 0-1.5 0v8zM14.75 17V9l1.685 1.93a.75.75 0 0 0 1.13-.986l-3-3.437A.75.75 0 0 0 13.25 7v10a.75.75 0 0 0 1.5 0"
      ></path>
    </svg>
  );
});

RoundTransferVerticalBoldDuotone.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default RoundTransferVerticalBoldDuotone;
