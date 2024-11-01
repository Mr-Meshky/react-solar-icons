import React, { forwardRef, SVGProps } from 'react';

interface Logout2LineDuotoneProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const Logout2LineDuotone = forwardRef<SVGSVGElement, Logout2LineDuotoneProps>(
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
          d="M12 20a8 8 0 1 1 0-16"
          opacity=".5"
        ></path>
        <path
          stroke={color}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="M10 12h10m0 0-3-3m3 3-3 3"
        ></path>
      </svg>
    );
  },
);

Logout2LineDuotone.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default Logout2LineDuotone;
