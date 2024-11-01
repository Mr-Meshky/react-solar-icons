import React, { forwardRef, SVGProps } from 'react';

interface ArrowRightDownBrokenProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const ArrowRightDownBroken = forwardRef<
  SVGSVGElement,
  ArrowRightDownBrokenProps
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
        d="M18 18H9m9 0V9m0 9-6.5-6.5M6 6l2.5 2.5"
      ></path>
    </svg>
  );
});

ArrowRightDownBroken.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default ArrowRightDownBroken;
