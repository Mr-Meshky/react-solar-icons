import React, { forwardRef, SVGProps } from 'react';

interface RoundTransferHorizontalOutlineProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const RoundTransferHorizontalOutline = forwardRef<
  SVGSVGElement,
  RoundTransferHorizontalOutlineProps
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
        d="M12 2.75a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12"
        clip-rule="evenodd"
      ></path>
      <path
        fill={color}
        fill-rule="evenodd"
        d="M11.003 6.507a.75.75 0 0 1-.072 1.058L9 9.25h8a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.493-1.315l3.437-3a.75.75 0 0 1 1.059.072M17.702 13.737A.75.75 0 0 0 17 13.25H7a.75.75 0 0 0 0 1.5h8l-1.93 1.685a.75.75 0 0 0 .986 1.13l3.437-3a.75.75 0 0 0 .21-.828"
        clip-rule="evenodd"
      ></path>
    </svg>
  );
});

RoundTransferHorizontalOutline.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default RoundTransferHorizontalOutline;
