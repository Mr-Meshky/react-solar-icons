import React, { forwardRef, SVGProps } from 'react';

interface RoundAltArrowRightBoldDuotoneProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const RoundAltArrowRightBoldDuotone = forwardRef<
  SVGSVGElement,
  RoundAltArrowRightBoldDuotoneProps
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
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
        opacity=".5"
      ></path>
      <path
        fill={color}
        d="M11.03 8.47a.75.75 0 1 0-1.06 1.06L12.44 12l-2.47 2.47a.75.75 0 1 0 1.06 1.06l3-3a.75.75 0 0 0 0-1.06z"
      ></path>
    </svg>
  );
});

RoundAltArrowRightBoldDuotone.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default RoundAltArrowRightBoldDuotone;
