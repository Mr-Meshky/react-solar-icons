import React, { forwardRef, SVGProps } from 'react';

interface RoundDoubleAltArrowDownBoldDuotoneProps
  extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const RoundDoubleAltArrowDownBoldDuotone = forwardRef<
  SVGSVGElement,
  RoundDoubleAltArrowDownBoldDuotoneProps
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
        fill={color}
        d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2"
        opacity=".5"
      ></path>
      <path
        fill={color}
        d="M8.47 9.03a.75.75 0 0 1 1.06-1.06L12 10.44l2.47-2.47a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0z"
      ></path>
      <path
        fill={color}
        d="M8.47 13.03a.75.75 0 1 1 1.06-1.06L12 14.44l2.47-2.47a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0z"
      ></path>
    </svg>
  );
});

RoundDoubleAltArrowDownBoldDuotone.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default RoundDoubleAltArrowDownBoldDuotone;
