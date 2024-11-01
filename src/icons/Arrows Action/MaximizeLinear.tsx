import React, { forwardRef, SVGProps } from 'react';

interface MaximizeLinearProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const MaximizeLinear = forwardRef<SVGSVGElement, MaximizeLinearProps>(
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
          d="m9 15-7 7m0 0h5.857M2 22v-5.857M15 9l7-7m0 0h-5.857M22 2v5.857"
        ></path>
      </svg>
    );
  },
);

MaximizeLinear.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default MaximizeLinear;
