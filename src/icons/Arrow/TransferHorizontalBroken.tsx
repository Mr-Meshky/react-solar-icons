import React, { forwardRef, SVGProps } from 'react';

interface TransferHorizontalBrokenProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const TransferHorizontalBroken = forwardRef<
  SVGSVGElement,
  TransferHorizontalBrokenProps
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
        d="M9.5 4 4 10h10m6 0h-2.5M14.5 20l5.5-6H10m-6 0h2.5"
      ></path>
    </svg>
  );
});

TransferHorizontalBroken.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default TransferHorizontalBroken;
