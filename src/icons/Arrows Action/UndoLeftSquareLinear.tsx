import React, { forwardRef, SVGProps } from 'react';

interface UndoLeftSquareLinearProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const UndoLeftSquareLinear = forwardRef<
  SVGSVGElement,
  UndoLeftSquareLinearProps
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
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="M6.5 9.5h7.539c1.367 0 2.051 0 2.547.32a2 2 0 0 1 .594.594c.32.496.32 1.18.32 2.548s0 2.052-.32 2.547a2 2 0 0 1-.594.594c-.496.32-1.18.32-2.547.32H9.5M6.5 9.5l2.25-2.077M6.5 9.5l2.25 2.077"
      ></path>
      <path
        stroke={color}
        stroke-width="1.5"
        d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"
      ></path>
    </svg>
  );
});

UndoLeftSquareLinear.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default UndoLeftSquareLinear;
