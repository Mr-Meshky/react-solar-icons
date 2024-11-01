import React, { forwardRef, SVGProps } from 'react';

interface DoubleAltArrowLeftBrokenProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const DoubleAltArrowLeftBroken = forwardRef<
  SVGSVGElement,
  DoubleAltArrowLeftBrokenProps
>(({ variant, color = 'currentColor', size = 24, className, ...rest }, ref) => {
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
        d="m13 19-6-7 1.5-1.75M13 5l-2 2.333M17 5l-6 7 1.5 1.75M17 19l-2-2.333"
      ></path>
    </svg>
  );
});

DoubleAltArrowLeftBroken.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default DoubleAltArrowLeftBroken;
