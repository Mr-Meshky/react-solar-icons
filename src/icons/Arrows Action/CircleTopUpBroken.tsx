import React, { forwardRef, SVGProps } from 'react';

interface CircleTopUpBrokenProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const CircleTopUpBroken = forwardRef<SVGSVGElement, CircleTopUpBrokenProps>(
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
          d="m13 11 9-9m0 0h-5.344M22 2v5.344"
        ></path>
        <path
          stroke={color}
          stroke-linecap="round"
          stroke-width="1.5"
          d="M12 2C6.477 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5M22 12c0 5.523-4.477 10-10 10a9.96 9.96 0 0 1-5-1.338"
        ></path>
      </svg>
    );
  },
);

CircleTopUpBroken.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default CircleTopUpBroken;
