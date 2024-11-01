import React, { forwardRef, SVGProps } from 'react';

interface CircleTopDownBrokenProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const CircleTopDownBroken = forwardRef<SVGSVGElement, CircleTopDownBrokenProps>(
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
          d="m21 3-9 9m0 0h5.344M12 12V6.656"
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

CircleTopDownBroken.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default CircleTopDownBroken;
