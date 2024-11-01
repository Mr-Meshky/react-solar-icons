import React, { forwardRef, SVGProps } from 'react';

interface RoundDoubleAltArrowRightBoldDuotoneProps
  extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const RoundDoubleAltArrowRightBoldDuotone = forwardRef<
  SVGSVGElement,
  RoundDoubleAltArrowRightBoldDuotoneProps
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
        d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12"
        opacity=".5"
      ></path>
      <path
        fill={color}
        d="M9.03 15.53a.75.75 0 0 1-1.06-1.06L10.44 12 7.97 9.53a.75.75 0 0 1 1.06-1.06l3 3a.75.75 0 0 1 0 1.06z"
      ></path>
      <path
        fill={color}
        d="M13.03 15.53a.75.75 0 1 1-1.06-1.06L14.44 12l-2.47-2.47a.75.75 0 0 1 1.06-1.06l3 3a.75.75 0 0 1 0 1.06z"
      ></path>
    </svg>
  );
});

RoundDoubleAltArrowRightBoldDuotone.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default RoundDoubleAltArrowRightBoldDuotone;
