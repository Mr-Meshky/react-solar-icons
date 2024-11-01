import React, { forwardRef, SVGProps } from 'react';

interface DoubleAltArrowRightBrokenProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const DoubleAltArrowRightBroken = forwardRef<
  SVGSVGElement,
  DoubleAltArrowRightBrokenProps
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
        d="m11 19 6-7-1.5-1.75M11 5l2 2.333M7 5l6 7-1.5 1.75M7 19l2-2.333"
      ></path>
    </svg>
  );
});

DoubleAltArrowRightBroken.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default DoubleAltArrowRightBroken;
