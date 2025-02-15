import React, { forwardRef, SVGProps } from 'react';

interface RoundArrowLeftUpBoldDuotoneProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const RoundArrowLeftUpBoldDuotone = forwardRef<
  SVGSVGElement,
  RoundArrowLeftUpBoldDuotoneProps
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
        d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10"
        opacity=".5"
      ></path>
      <path
        fill={color}
        d="M13.5 8.25a.75.75 0 0 1 0 1.5h-2.69l4.72 4.72a.75.75 0 1 1-1.06 1.06l-4.72-4.72v2.69a.75.75 0 0 1-1.5 0V9A.75.75 0 0 1 9 8.25z"
      ></path>
    </svg>
  );
});

RoundArrowLeftUpBoldDuotone.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default RoundArrowLeftUpBoldDuotone;
