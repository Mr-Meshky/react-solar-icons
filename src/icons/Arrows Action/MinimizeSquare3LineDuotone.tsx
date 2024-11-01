import React, { forwardRef, SVGProps } from 'react';

interface MinimizeSquare3LineDuotoneProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const MinimizeSquare3LineDuotone = forwardRef<
  SVGSVGElement,
  MinimizeSquare3LineDuotoneProps
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
        stroke-width="1.5"
        d="M13 22c4.055-.008 6.179-.107 7.536-1.465C22 19.072 22 16.714 22 12s0-7.071-1.464-8.536C19.07 2 16.714 2 12 2S4.929 2 3.465 3.464C2.107 4.822 2.008 6.944 2 11"
        opacity=".5"
      ></path>
      <path
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="m17 7-5 5m0 0h3.75M12 12V8.25"
      ></path>
      <path
        stroke={color}
        stroke-width="1.5"
        d="M2 18c0-1.886 0-2.828.586-3.414S4.114 14 6 14s2.828 0 3.414.586S10 16.114 10 18s0 2.828-.586 3.414S7.886 22 6 22s-2.828 0-3.414-.586S2 19.886 2 18Z"
      ></path>
    </svg>
  );
});

MinimizeSquare3LineDuotone.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default MinimizeSquare3LineDuotone;
