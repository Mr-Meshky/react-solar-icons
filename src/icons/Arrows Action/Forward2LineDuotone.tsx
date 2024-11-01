import React, { forwardRef, SVGProps } from 'react';

interface Forward2LineDuotoneProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const Forward2LineDuotone = forwardRef<SVGSVGElement, Forward2LineDuotoneProps>(
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
          stroke-linejoin="round"
          stroke-width="1.5"
          d="m14.5 17 5-5-5-5"
        ></path>
        <path
          stroke={color}
          stroke-linecap="round"
          stroke-width="1.5"
          d="M19.5 12h-10c-1.667 0-5-1-5-5"
          opacity=".5"
        ></path>
      </svg>
    );
  },
);

Forward2LineDuotone.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default Forward2LineDuotone;
