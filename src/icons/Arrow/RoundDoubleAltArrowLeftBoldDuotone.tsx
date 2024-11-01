import React, { forwardRef, SVGProps } from 'react';

interface RoundDoubleAltArrowLeftBoldDuotoneProps
  extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const RoundDoubleAltArrowLeftBoldDuotone = forwardRef<
  SVGSVGElement,
  RoundDoubleAltArrowLeftBoldDuotoneProps
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
        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10"
        opacity=".5"
      ></path>
      <path
        fill={color}
        d="M14.97 15.53a.75.75 0 1 0 1.06-1.06L13.56 12l2.47-2.47a.75.75 0 0 0-1.06-1.06l-3 3a.75.75 0 0 0 0 1.06z"
      ></path>
      <path
        fill={color}
        d="M10.97 15.53a.75.75 0 1 0 1.06-1.06L9.56 12l2.47-2.47a.75.75 0 0 0-1.06-1.06l-3 3a.75.75 0 0 0 0 1.06z"
      ></path>
    </svg>
  );
});

RoundDoubleAltArrowLeftBoldDuotone.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default RoundDoubleAltArrowLeftBoldDuotone;
