import React, { forwardRef, SVGProps } from 'react';

interface SquareDoubleAltArrowDownLineDuotoneProps
  extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const SquareDoubleAltArrowDownLineDuotone = forwardRef<
  SVGSVGElement,
  SquareDoubleAltArrowDownLineDuotoneProps
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
        stroke={color}
        stroke-width="1.5"
        d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"
        opacity=".5"
      ></path>
      <path
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="m9 8.5 3 3 3-3M9 12.5l3 3 3-3"
      ></path>
    </svg>
  );
});

SquareDoubleAltArrowDownLineDuotone.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default SquareDoubleAltArrowDownLineDuotone;