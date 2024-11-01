import React, { forwardRef, SVGProps } from 'react';

interface MaximizeBrokenProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const MaximizeBroken = forwardRef<SVGSVGElement, MaximizeBrokenProps>(
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
          d="M22 2h-5.857M22 2v5.857M22 2l-3.5 3.5M15 9l.875-.875M9 15l-7 7m0 0h5.857M2 22v-5.857"
        ></path>
      </svg>
    );
  },
);

MaximizeBroken.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default MaximizeBroken;
