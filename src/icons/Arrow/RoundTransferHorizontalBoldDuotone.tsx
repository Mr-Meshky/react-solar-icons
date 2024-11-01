import React, { forwardRef, SVGProps } from 'react';

interface RoundTransferHorizontalBoldDuotoneProps
  extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const RoundTransferHorizontalBoldDuotone = forwardRef<
  SVGSVGElement,
  RoundTransferHorizontalBoldDuotoneProps
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
        d="M10.93 7.565a.75.75 0 1 0-.986-1.13l-3.437 3A.75.75 0 0 0 7 10.75h10a.75.75 0 0 0 0-1.5H9zM7 14.75h8l-1.93 1.685a.75.75 0 0 0 .986 1.13l3.437-3A.75.75 0 0 0 17 13.25H7a.75.75 0 0 0 0 1.5"
      ></path>
    </svg>
  );
});

RoundTransferHorizontalBoldDuotone.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default RoundTransferHorizontalBoldDuotone;
