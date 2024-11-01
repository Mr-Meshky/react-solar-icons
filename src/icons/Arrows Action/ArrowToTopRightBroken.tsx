import React, { forwardRef, SVGProps } from 'react';

interface ArrowToTopRightBrokenProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const ArrowToTopRightBroken = forwardRef<
  SVGSVGElement,
  ArrowToTopRightBrokenProps
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
        d="m12 4.5-5 5m5-5 5 5m-5-5V11m0 3.5c0 1.667 1 5 5 5"
      ></path>
    </svg>
  );
});

ArrowToTopRightBroken.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default ArrowToTopRightBroken;
