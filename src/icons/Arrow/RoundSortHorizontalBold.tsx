import React, { forwardRef, SVGProps } from 'react';

interface RoundSortHorizontalBoldProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const RoundSortHorizontalBold = forwardRef<
  SVGSVGElement,
  RoundSortHorizontalBoldProps
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
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-8.245-.555a.75.75 0 0 0-1.01 1.11l1.315 1.195H8a.75.75 0 0 0 0 1.5h6.06l-1.315 1.195a.75.75 0 0 0 1.01 1.11l2.75-2.5a.75.75 0 0 0 0-1.11zm-2.45-4.95a.75.75 0 0 1-.05 1.06L9.94 8.75H16a.75.75 0 0 1 0 1.5H9.94l1.315 1.195a.75.75 0 0 1-1.01 1.11l-2.75-2.5a.75.75 0 0 1 0-1.11l2.75-2.5a.75.75 0 0 1 1.06.05"
        clip-rule="evenodd"
      ></path>
    </svg>
  );
});

RoundSortHorizontalBold.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default RoundSortHorizontalBold;
