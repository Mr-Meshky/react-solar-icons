import React, { forwardRef, SVGProps } from 'react';

interface SortVerticalBrokenProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const SortVerticalBroken = forwardRef<SVGSVGElement, SortVerticalBrokenProps>(
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
          d="M16 18v-2m0-10 4 4.125M16 6l-4 4.125M16 6v7M8 18l4-4.125M8 18l-4-4.125M8 18v-7m0-5v2"
        ></path>
      </svg>
    );
  },
);

SortVerticalBroken.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default SortVerticalBroken;
