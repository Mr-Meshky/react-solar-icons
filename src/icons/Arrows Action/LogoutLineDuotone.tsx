import React, { forwardRef, SVGProps } from 'react';

interface LogoutLineDuotoneProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const LogoutLineDuotone = forwardRef<SVGSVGElement, LogoutLineDuotoneProps>(
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
          d="M8.002 7c.012-2.175.108-3.353.877-4.121C9.757 2 11.172 2 14 2h1c2.828 0 4.243 0 5.121.879C21 3.757 21 5.172 21 8v8c0 2.828 0 4.243-.879 5.121C19.243 22 17.828 22 15 22h-1c-2.828 0-4.243 0-5.121-.879-.769-.768-.865-1.946-.877-4.121"
        ></path>
        <path
          stroke={color}
          stroke-width="1.5"
          d="M8 19.5c-2.357 0-3.536 0-4.268-.732C3 18.035 3 16.857 3 14.5v-5c0-2.357 0-3.536.732-4.268S5.643 4.5 8 4.5"
          opacity=".5"
        ></path>
        <path
          stroke={color}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="M15 12H6m0 0 2 2m-2-2 2-2"
        ></path>
      </svg>
    );
  },
);

LogoutLineDuotone.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default LogoutLineDuotone;
