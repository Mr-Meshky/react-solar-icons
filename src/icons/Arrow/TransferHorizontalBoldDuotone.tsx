import React, { forwardRef, SVGProps } from 'react';

interface TransferHorizontalBoldDuotoneProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const TransferHorizontalBoldDuotone = forwardRef<
  SVGSVGElement,
  TransferHorizontalBoldDuotoneProps
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
        d="M10.25 4a.75.75 0 0 0-1.303-.507l-5.5 6A.75.75 0 0 0 4 10.75h16a.75.75 0 0 0 0-1.5h-9.75z"
      ></path>
      <path
        fill={color}
        d="M13.75 20v-5.25H4a.75.75 0 0 1 0-1.5h16a.75.75 0 0 1 .553 1.257l-5.5 6A.75.75 0 0 1 13.75 20"
        opacity=".5"
      ></path>
    </svg>
  );
});

TransferHorizontalBoldDuotone.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default TransferHorizontalBoldDuotone;
