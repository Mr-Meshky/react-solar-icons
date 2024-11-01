import React, { forwardRef, SVGProps } from 'react';

interface SortHorizontalBrokenProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const SortHorizontalBroken = forwardRef<
  SVGSVGElement,
  SortHorizontalBrokenProps
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
        d="m6 8 4.125-4M6 8l4.125 4M6 8h7m5 0h-2M18 16l-4.125-4M18 16l-4.125 4M18 16h-7m-5 0h2"
      ></path>
    </svg>
  );
});

SortHorizontalBroken.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default SortHorizontalBroken;
