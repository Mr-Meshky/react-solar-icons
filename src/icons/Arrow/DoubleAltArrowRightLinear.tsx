import React, { forwardRef, SVGProps } from 'react';

interface DoubleAltArrowRightLinearProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const DoubleAltArrowRightLinear = forwardRef<
  SVGSVGElement,
  DoubleAltArrowRightLinearProps
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
        d="m11 19 6-7-6-7"
      ></path>
      <path
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="m7 19 6-7-6-7"
      ></path>
    </svg>
  );
});

DoubleAltArrowRightLinear.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default DoubleAltArrowRightLinear;
