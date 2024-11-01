import React, { forwardRef, SVGProps } from 'react';

interface DoubleAltArrowDownBrokenProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const DoubleAltArrowDownBroken = forwardRef<
  SVGSVGElement,
  DoubleAltArrowDownBrokenProps
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
        d="m19 11-7 6-1.75-1.5M5 11l2.333 2M5 7l7 6 1.75-1.5M19 7l-2.333 2"
      ></path>
    </svg>
  );
});

DoubleAltArrowDownBroken.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default DoubleAltArrowDownBroken;
