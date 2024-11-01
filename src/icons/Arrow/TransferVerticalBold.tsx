import React, { forwardRef, SVGProps } from 'react';

interface TransferVerticalBoldProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const TransferVerticalBold = forwardRef<
  SVGSVGElement,
  TransferVerticalBoldProps
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
        d="M4 13.75a.75.75 0 0 0-.507 1.303l6 5.5A.75.75 0 0 0 10.75 20V4a.75.75 0 0 0-1.5 0v9.75zM20 10.25h-5.25V20a.75.75 0 0 1-1.5 0V4a.75.75 0 0 1 1.257-.553l6 5.5A.75.75 0 0 1 20 10.25"
      ></path>
    </svg>
  );
});

TransferVerticalBold.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default TransferVerticalBold;
