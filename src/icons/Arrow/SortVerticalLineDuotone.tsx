import React, { forwardRef, SVGProps } from 'react';

interface SortVerticalLineDuotoneProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const SortVerticalLineDuotone = forwardRef<
  SVGSVGElement,
  SortVerticalLineDuotoneProps
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
        d="M16 18V6m0 0 4 4.125M16 6l-4 4.125"
        opacity=".5"
      ></path>
      <path
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="M8 6v12m0 0 4-4.125M8 18l-4-4.125"
      ></path>
    </svg>
  );
});

SortVerticalLineDuotone.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default SortVerticalLineDuotone;
