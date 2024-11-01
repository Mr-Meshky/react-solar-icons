import React, { forwardRef, SVGProps } from 'react';

interface TransferHorizontalLinearProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const TransferHorizontalLinear = forwardRef<
  SVGSVGElement,
  TransferHorizontalLinearProps
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
        d="M20 10H4l5.5-6M4 14h16l-5.5 6"
      ></path>
    </svg>
  );
});

TransferHorizontalLinear.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default TransferHorizontalLinear;
