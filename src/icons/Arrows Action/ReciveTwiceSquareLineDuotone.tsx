import React, { forwardRef, SVGProps } from 'react';

interface ReciveTwiceSquareLineDuotoneProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const ReciveTwiceSquareLineDuotone = forwardRef<
  SVGSVGElement,
  ReciveTwiceSquareLineDuotoneProps
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
        d="M7 15.5h7m0 0L11 13m3 2.5L11 18M7 8.5h7m0 0L11 6m3 2.5L11 11"
      ></path>
      <path
        stroke={color}
        stroke-linecap="round"
        stroke-width="1.5"
        d="M17 6v12"
      ></path>
      <path
        stroke={color}
        stroke-width="1.5"
        d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"
        opacity=".5"
      ></path>
    </svg>
  );
});

ReciveTwiceSquareLineDuotone.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default ReciveTwiceSquareLineDuotone;
