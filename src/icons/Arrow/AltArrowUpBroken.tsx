import React, { forwardRef, SVGProps } from 'react';

interface AltArrowUpBrokenProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const AltArrowUpBroken = forwardRef<SVGSVGElement, AltArrowUpBrokenProps>(
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
          d="m19 15-7-6-1.75 1.5M5 15l2.333-2"
        ></path>
      </svg>
    );
  },
);

AltArrowUpBroken.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default AltArrowUpBroken;
