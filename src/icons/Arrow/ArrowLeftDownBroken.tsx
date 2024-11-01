import React, { forwardRef, SVGProps } from 'react';

interface ArrowLeftDownBrokenProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const ArrowLeftDownBroken = forwardRef<SVGSVGElement, ArrowLeftDownBrokenProps>(
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
          d="M6 18h9m-9 0V9m0 9 6.5-6.5M18 6l-2.5 2.5"
        ></path>
      </svg>
    );
  },
);

ArrowLeftDownBroken.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default ArrowLeftDownBroken;
