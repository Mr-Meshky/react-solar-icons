import React, { forwardRef, SVGProps } from 'react';

interface RoundTransferVerticalBoldProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const RoundTransferVerticalBold = forwardRef<
  SVGSVGElement,
  RoundTransferVerticalBoldProps
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
        d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m2.75 15V9l1.685 1.93a.75.75 0 0 0 1.13-.986l-3-3.437A.75.75 0 0 0 13.25 7v10a.75.75 0 0 0 1.5 0m-8.243-4.003a.75.75 0 0 1 1.058.072L9.25 15V7a.75.75 0 0 1 1.5 0v10a.75.75 0 0 1-1.315.493l-3-3.437a.75.75 0 0 1 .072-1.059"
        clip-rule="evenodd"
      ></path>
    </svg>
  );
});

RoundTransferVerticalBold.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default RoundTransferVerticalBold;
