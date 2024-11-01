import React, { forwardRef, SVGProps } from 'react';

interface AltArrowRightBrokenProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const AltArrowRightBroken = forwardRef<SVGSVGElement, AltArrowRightBrokenProps>(
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
          d="m9 5 2 2.333M9 19l6-7-1.5-1.75"
        ></path>
      </svg>
    );
  },
);

AltArrowRightBroken.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default AltArrowRightBroken;
