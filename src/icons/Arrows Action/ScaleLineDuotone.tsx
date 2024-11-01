import React, { forwardRef, SVGProps } from 'react';

interface ScaleLineDuotoneProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const ScaleLineDuotone = forwardRef<SVGSVGElement, ScaleLineDuotoneProps>(
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
          stroke={color}
          stroke-linecap="round"
          stroke-width="1.5"
          d="M11 2c-4.055.007-6.178.107-7.535 1.464C2 4.928 2 7.285 2 11.999s0 7.071 1.465 8.536c1.464 1.464 3.821 1.464 8.535 1.464s7.071 0 8.536-1.464c1.357-1.357 1.456-3.48 1.463-7.536"
          opacity=".5"
        ></path>
        <path
          stroke={color}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="m13 11 9-9m0 0h-5.344M22 2v5.344M21 3l-9 9m0 0h4m-4 0V8"
        ></path>
      </svg>
    );
  },
);

ScaleLineDuotone.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default ScaleLineDuotone;
