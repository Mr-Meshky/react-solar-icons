import React, { forwardRef, SVGProps } from 'react';

interface SortHorizontalLineDuotoneProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const SortHorizontalLineDuotone = forwardRef<
  SVGSVGElement,
  SortHorizontalLineDuotoneProps
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
        d="M18 8H6m0 0 4.125-4M6 8l4.125 4"
      ></path>
      <path
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="M6 16h12m0 0-4.125-4M18 16l-4.125 4"
        opacity=".5"
      ></path>
    </svg>
  );
});

SortHorizontalLineDuotone.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default SortHorizontalLineDuotone;
