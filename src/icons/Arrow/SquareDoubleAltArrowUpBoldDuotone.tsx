import React, { forwardRef, SVGProps } from 'react';

interface SquareDoubleAltArrowUpBoldDuotoneProps
  extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const SquareDoubleAltArrowUpBoldDuotone = forwardRef<
  SVGSVGElement,
  SquareDoubleAltArrowUpBoldDuotoneProps
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
        d="M20.536 3.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464"
        opacity=".5"
      ></path>
      <path
        fill={color}
        d="M9.53 12.03a.75.75 0 0 1-1.06-1.06l3-3a.75.75 0 0 1 1.06 0l3 3a.75.75 0 1 1-1.06 1.06L12 9.56z"
      ></path>
      <path
        fill={color}
        d="M9.53 16.03a.75.75 0 0 1-1.06-1.06l3-3a.75.75 0 0 1 1.06 0l3 3a.75.75 0 1 1-1.06 1.06L12 13.56z"
      ></path>
    </svg>
  );
});

SquareDoubleAltArrowUpBoldDuotone.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default SquareDoubleAltArrowUpBoldDuotone;
