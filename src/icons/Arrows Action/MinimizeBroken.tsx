import React, { forwardRef, SVGProps } from 'react';

interface MinimizeBrokenProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const MinimizeBroken = forwardRef<SVGSVGElement, MinimizeBrokenProps>(
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
          d="m2 22 .875-.875M9 15H3.143M9 15v5.857M9 15l-3.5 3.5M22 2l-7 7m0 0h5.857M15 9V3.143"
        ></path>
      </svg>
    );
  },
);

MinimizeBroken.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default MinimizeBroken;
