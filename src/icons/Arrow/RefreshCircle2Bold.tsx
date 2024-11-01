import React, { forwardRef, SVGProps } from 'react';

interface RefreshCircle2BoldProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const RefreshCircle2Bold = forwardRef<SVGSVGElement, RefreshCircle2BoldProps>(
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
          d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m3.935-16.408a.75.75 0 0 1 .467.694v2.715a.75.75 0 0 1-.75.75H13a.75.75 0 0 1-.537-1.274l.762-.78a4.17 4.17 0 0 0-4.224 1.089c-1.668 1.707-1.668 4.483 0 6.19a4.17 4.17 0 0 0 5.998 0 4.4 4.4 0 0 0 1.208-2.472c.058-.418.39-.77.812-.77.406 0 .742.325.703.729a5.9 5.9 0 0 1-1.65 3.562 5.67 5.67 0 0 1-8.144 0c-2.237-2.29-2.237-5.997 0-8.287a5.67 5.67 0 0 1 6.437-1.208l.75-.768a.75.75 0 0 1 .82-.17"
          clip-rule="evenodd"
        ></path>
      </svg>
    );
  },
);

RefreshCircle2Bold.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default RefreshCircle2Bold;