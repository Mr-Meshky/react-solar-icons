import React, { forwardRef, SVGProps } from 'react';

interface SquareDoubleAltArrowDownBoldDuotoneProps
  extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const SquareDoubleAltArrowDownBoldDuotone = forwardRef<
  SVGSVGElement,
  SquareDoubleAltArrowDownBoldDuotoneProps
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
        d="M3.464 20.536C2 19.07 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465"
        opacity=".5"
      ></path>
      <path
        fill={color}
        d="M14.47 11.97a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 1 1 1.06-1.06L12 14.44z"
      ></path>
      <path
        fill={color}
        d="M14.47 7.97a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 0 1 1.06-1.06L12 10.44z"
      ></path>
    </svg>
  );
});

SquareDoubleAltArrowDownBoldDuotone.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default SquareDoubleAltArrowDownBoldDuotone;
