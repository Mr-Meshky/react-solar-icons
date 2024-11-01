import React, { forwardRef, SVGProps } from 'react';

interface SquareTopUpBoldDuotoneProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const SquareTopUpBoldDuotone = forwardRef<
  SVGSVGElement,
  SquareTopUpBoldDuotoneProps
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
        d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12"
        opacity=".5"
      ></path>
      <path
        fill={color}
        fill-rule="evenodd"
        d="M21.53 2.47a.75.75 0 0 1 0 1.06l-7.72 7.72h3.534a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75V6.656a.75.75 0 0 1 1.5 0v3.533l7.72-7.72a.75.75 0 0 1 1.06 0"
        clip-rule="evenodd"
      ></path>
    </svg>
  );
});

SquareTopUpBoldDuotone.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default SquareTopUpBoldDuotone;
