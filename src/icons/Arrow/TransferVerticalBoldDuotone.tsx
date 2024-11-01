import React, { forwardRef, SVGProps } from 'react';

interface TransferVerticalBoldDuotoneProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const TransferVerticalBoldDuotone = forwardRef<
  SVGSVGElement,
  TransferVerticalBoldDuotoneProps
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
        d="M20 10.25a.75.75 0 0 0 .507-1.303l-6-5.5A.75.75 0 0 0 13.25 4v16a.75.75 0 0 0 1.5 0v-9.75z"
      ></path>
      <path
        fill={color}
        d="M4 13.75h5.25V4a.75.75 0 1 1 1.5 0v16a.75.75 0 0 1-1.257.553l-6-5.5A.75.75 0 0 1 4 13.75"
        opacity=".5"
      ></path>
    </svg>
  );
});

TransferVerticalBoldDuotone.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default TransferVerticalBoldDuotone;
