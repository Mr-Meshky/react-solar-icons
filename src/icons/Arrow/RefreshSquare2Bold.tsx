import React, { forwardRef, SVGProps } from 'react';

interface RefreshSquare2BoldProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const RefreshSquare2Bold = forwardRef<SVGSVGElement, RefreshSquare2BoldProps>(
  ({ variant, color = 'currentColor', size = 24, className, ...rest }, ref) => {
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
          fill-rule="evenodd"
          d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464m1.997 7.62A6.59 6.59 0 0 1 12.01 5.25c1.982 0 3.76.875 4.967 2.257a.75.75 0 0 1-1.13.986A5.08 5.08 0 0 0 12.01 6.75a5.09 5.09 0 0 0-5.037 4.333h.364a.75.75 0 0 1 .53 1.281l-1.169 1.167a.75.75 0 0 1-1.06 0L4.47 12.364a.75.75 0 0 1 .53-1.28zm11.84-.615a.75.75 0 0 1 1.06 0l1.169 1.167a.75.75 0 0 1-.53 1.28h-.46a6.59 6.59 0 0 1-6.55 5.834 6.58 6.58 0 0 1-4.967-2.256.75.75 0 0 1 1.13-.987 5.08 5.08 0 0 0 3.838 1.743 5.09 5.09 0 0 0 5.036-4.333h-.363a.75.75 0 0 1-.53-1.281z"
          clip-rule="evenodd"
        ></path>
      </svg>
    );
  },
);

RefreshSquare2Bold.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default RefreshSquare2Bold;
