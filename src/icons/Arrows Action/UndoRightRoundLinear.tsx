import React, { forwardRef, SVGProps } from 'react';

interface UndoRightRoundLinearProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const UndoRightRoundLinear = forwardRef<
  SVGSVGElement,
  UndoRightRoundLinearProps
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
      ></path>
      <path
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="M17.5 9.5H9.962a3.462 3.462 0 1 0 0 6.923H14.5m3-6.923-2.25-2.077M17.5 9.5l-2.25 2.077"
      ></path>
    </svg>
  );
});

UndoRightRoundLinear.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default UndoRightRoundLinear;
