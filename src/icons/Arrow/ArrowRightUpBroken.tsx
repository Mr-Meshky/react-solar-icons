import React, { forwardRef, SVGProps } from 'react';

interface ArrowRightUpBrokenProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const ArrowRightUpBroken = forwardRef<SVGSVGElement, ArrowRightUpBrokenProps>(
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
          d="m6 18 2.5-2.5M18 6H9m9 0v9m0-9-6.5 6.5"
        ></path>
      </svg>
    );
  },
);

ArrowRightUpBroken.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default ArrowRightUpBroken;
