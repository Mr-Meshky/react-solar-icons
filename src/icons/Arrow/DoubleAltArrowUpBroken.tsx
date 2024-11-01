import React, { forwardRef, SVGProps } from 'react';

interface DoubleAltArrowUpBrokenProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const DoubleAltArrowUpBroken = forwardRef<
  SVGSVGElement,
  DoubleAltArrowUpBrokenProps
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
        d="m19 13-7-6-1.75 1.5M5 13l2.333-2M5 17l7-6 1.75 1.5M19 17l-2.333-2"
      ></path>
    </svg>
  );
});

DoubleAltArrowUpBroken.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default DoubleAltArrowUpBroken;
