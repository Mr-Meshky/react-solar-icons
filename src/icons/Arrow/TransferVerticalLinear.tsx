import React, { forwardRef, SVGProps } from 'react';

interface TransferVerticalLinearProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const TransferVerticalLinear = forwardRef<
  SVGSVGElement,
  TransferVerticalLinearProps
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
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="M10 4v16l-6-5.5M14 20V4l6 5.5"
      ></path>
    </svg>
  );
});

TransferVerticalLinear.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default TransferVerticalLinear;
