import React, { forwardRef, SVGProps } from 'react';

interface RoundSortHorizontalLineDuotoneProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const RoundSortHorizontalLineDuotone = forwardRef<
  SVGSVGElement,
  RoundSortHorizontalLineDuotoneProps
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
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke={color}
        stroke-width="1.5"
        opacity=".5"
      ></circle>
      <path
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="M16 9.5H8m0 0L10.75 7M8 9.5l2.75 2.5M8 14.5h8m0 0L13.25 12M16 14.5 13.25 17"
      ></path>
    </svg>
  );
});

RoundSortHorizontalLineDuotone.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default RoundSortHorizontalLineDuotone;
