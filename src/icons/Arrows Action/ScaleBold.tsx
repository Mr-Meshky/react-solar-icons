import React, { forwardRef, SVGProps } from 'react';

interface ScaleBoldProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const ScaleBold = forwardRef<SVGSVGElement, ScaleBoldProps>(
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
          d="M15.906 2c0 .414.336.75.75.75h3.533l-7.439 7.44V8a.75.75 0 0 0-1.5 0v4c0 .414.336.75.75.75h4a.75.75 0 0 0 0-1.5h-2.19l7.44-7.44v3.534a.75.75 0 0 0 1.5 0V2a.75.75 0 0 0-.75-.75h-5.344a.75.75 0 0 0-.75.75"
        ></path>
        <path
          fill={color}
          d="M19.752 7.43a2.25 2.25 0 0 0 2.238 2.164C22 10.32 22 11.119 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c.881 0 1.68 0 2.406.01a2.25 2.25 0 0 0 2.164 2.238l-2.623 2.623A2.25 2.25 0 0 0 9.75 8v4A2.25 2.25 0 0 0 12 14.25h4a2.25 2.25 0 0 0 1.129-4.197z"
        ></path>
      </svg>
    );
  },
);

ScaleBold.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default ScaleBold;
