import React, { forwardRef, SVGProps } from 'react';

interface TransferVerticalBrokenProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const TransferVerticalBroken = forwardRef<
  SVGSVGElement,
  TransferVerticalBrokenProps
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
        d="M14 20v-2.5m6-8L14 4v10M4 14.5l6 5.5V10m0-6v2.5"
      ></path>
    </svg>
  );
});

TransferVerticalBroken.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default TransferVerticalBroken;
