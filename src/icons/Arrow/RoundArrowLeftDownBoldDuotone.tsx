import React, { forwardRef, SVGProps } from 'react';

interface RoundArrowLeftDownBoldDuotoneProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const RoundArrowLeftDownBoldDuotone = forwardRef<
  SVGSVGElement,
  RoundArrowLeftDownBoldDuotoneProps
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
        d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2"
        opacity=".5"
      ></path>
      <path
        fill={color}
        d="M13.5 15.75a.75.75 0 0 0 0-1.5h-2.69l4.72-4.72a.75.75 0 0 0-1.06-1.06l-4.72 4.72V10.5a.75.75 0 0 0-1.5 0V15c0 .414.336.75.75.75z"
      ></path>
    </svg>
  );
});

RoundArrowLeftDownBoldDuotone.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default RoundArrowLeftDownBoldDuotone;
