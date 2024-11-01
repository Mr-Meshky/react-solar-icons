import React, { forwardRef, SVGProps } from 'react';

interface TransferHorizontalOutlineProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const TransferHorizontalOutline = forwardRef<
  SVGSVGElement,
  TransferHorizontalOutlineProps
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
        fill-rule="evenodd"
        d="M10.007 3.447a.75.75 0 0 1 .046 1.06L5.705 9.25H20a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.553-1.257l5.5-6a.75.75 0 0 1 1.06-.046M20.687 13.698A.75.75 0 0 0 20 13.25H4a.75.75 0 0 0 0 1.5h14.295l-4.348 4.743a.75.75 0 0 0 1.106 1.014l5.5-6a.75.75 0 0 0 .133-.809"
        clip-rule="evenodd"
      ></path>
    </svg>
  );
});

TransferHorizontalOutline.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default TransferHorizontalOutline;
