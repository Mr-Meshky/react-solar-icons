import React, { forwardRef, SVGProps } from 'react';

interface SendTwiceSquareLinearProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const SendTwiceSquareLinear = forwardRef<
  SVGSVGElement,
  SendTwiceSquareLinearProps
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
        d="M17 15.5h-7m0 0 3-2.5m-3 2.5 3 2.5M17 8.5h-7m0 0L13 6m-3 2.5 3 2.5"
      ></path>
      <path
        stroke={color}
        stroke-linecap="round"
        stroke-width="1.5"
        d="M7 6v12"
      ></path>
      <path
        stroke={color}
        stroke-width="1.5"
        d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"
      ></path>
    </svg>
  );
});

SendTwiceSquareLinear.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default SendTwiceSquareLinear;
