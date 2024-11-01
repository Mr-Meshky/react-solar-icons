import React, { forwardRef, SVGProps } from 'react';

interface SquareBottomUpLinearProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const SquareBottomUpLinear = forwardRef<
  SVGSVGElement,
  SquareBottomUpLinearProps
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
      ></path>
      <path
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="m3 21 8-8m0 0H5m6 0v6"
      ></path>
    </svg>
  );
});

SquareBottomUpLinear.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default SquareBottomUpLinear;
