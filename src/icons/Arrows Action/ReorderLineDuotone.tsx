import React, { forwardRef, SVGProps } from 'react';

interface ReorderLineDuotoneProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const ReorderLineDuotone = forwardRef<SVGSVGElement, ReorderLineDuotoneProps>(
  ({ variant, color = 'currentColor', size = 24, className, ...rest }, ref) => {
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
          stroke-width="1.5"
          d="M2 17.5c0-.935 0-1.402.201-1.75a1.5 1.5 0 0 1 .549-.549C3.098 15 3.565 15 4.5 15s1.402 0 1.75.201a1.5 1.5 0 0 1 .549.549C7 16.098 7 16.565 7 17.5s0 1.402-.201 1.75a1.5 1.5 0 0 1-.549.549C5.902 20 5.435 20 4.5 20s-1.402 0-1.75-.201a1.5 1.5 0 0 1-.549-.549C2 18.902 2 18.435 2 17.5Z"
        ></path>
        <path
          stroke={color}
          stroke-width="1.5"
          d="M9.5 17.5c0-.935 0-1.402.201-1.75a1.5 1.5 0 0 1 .549-.549C10.598 15 11.065 15 12 15s1.402 0 1.75.201a1.5 1.5 0 0 1 .549.549c.201.348.201.815.201 1.75s0 1.402-.201 1.75a1.5 1.5 0 0 1-.549.549C13.402 20 12.935 20 12 20s-1.402 0-1.75-.201a1.5 1.5 0 0 1-.549-.549c-.201-.348-.201-.815-.201-1.75Z"
          opacity=".5"
        ></path>
        <path
          stroke={color}
          stroke-width="1.5"
          d="M17 17.5c0-.935 0-1.402.201-1.75a1.5 1.5 0 0 1 .549-.549C18.098 15 18.565 15 19.5 15s1.402 0 1.75.201a1.5 1.5 0 0 1 .549.549c.201.348.201.815.201 1.75s0 1.402-.201 1.75a1.5 1.5 0 0 1-.549.549c-.348.201-.815.201-1.75.201s-1.402 0-1.75-.201a1.5 1.5 0 0 1-.549-.549C17 18.902 17 18.435 17 17.5Z"
          opacity=".7"
        ></path>
        <path
          stroke={color}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="M4.5 15V9c0-2.357 0-3.536.732-4.268S7.143 4 9.5 4h5c2.357 0 3.535 0 4.268.732S19.5 6.643 19.5 9v3m0 0 2-2m-2 2-2-2"
        ></path>
      </svg>
    );
  },
);

ReorderLineDuotone.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default ReorderLineDuotone;
