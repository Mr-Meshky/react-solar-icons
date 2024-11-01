import React, { forwardRef, SVGProps } from 'react';

interface EndCallRoundedLineDuotoneProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const EndCallRoundedLineDuotone = forwardRef<
  SVGSVGElement,
  EndCallRoundedLineDuotoneProps
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
      <path d="M3.083 10.503C2.277 11.373 2 12.613 2 13.85c0 2.06 1.782 3.565 3.607 3.047l1.34-.38C8.156 16.174 9 14.983 9 13.618m11.917-3.115c.806.87 1.083 2.11 1.083 3.347 0 2.06-1.782 3.565-3.607 3.047l-1.34-.38C15.844 16.174 15 14.983 15 13.618"></path>
      <path
        d="M3.083 10.503C4.44 9.04 7.193 7 12 7s7.56 2.039 8.917 3.503M9 13.619s0-1.655 3-1.655 3 1.654 3 1.654"
        opacity=".5"
      ></path>
    </svg>
  );
});

EndCallRoundedLineDuotone.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default EndCallRoundedLineDuotone;
