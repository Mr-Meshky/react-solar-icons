import React, { forwardRef, SVGProps } from 'react';

interface AltArrowLeftBrokenProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const AltArrowLeftBroken = forwardRef<SVGSVGElement, AltArrowLeftBrokenProps>(
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
          d="m15 19-6-7 1.5-1.75M15 5l-2 2.333"
        ></path>
      </svg>
    );
  },
);

AltArrowLeftBroken.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default AltArrowLeftBroken;
