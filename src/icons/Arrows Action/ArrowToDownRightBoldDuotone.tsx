import React, { forwardRef, SVGProps } from 'react';

interface ArrowToDownRightBoldDuotoneProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const ArrowToDownRightBoldDuotone = forwardRef<
  SVGSVGElement,
  ArrowToDownRightBoldDuotoneProps
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
        d="M6.47 13.97a.75.75 0 0 0 0 1.06l5 5a.75.75 0 0 0 1.06 0l5-5a.75.75 0 1 0-1.06-1.06L12 18.44l-4.47-4.47a.75.75 0 0 0-1.06 0"
        clip-rule="evenodd"
      ></path>
      <g fill={color} opacity=".5">
        <path d="M11.25 9.5c0-.953.28-2.367 1.141-3.563.89-1.235 2.365-2.187 4.609-2.187a.75.75 0 0 1 0 1.5c-1.756 0-2.78.715-3.391 1.563-.639.887-.859 1.974-.859 2.687v8.19l-.75.75-.75-.75zM11.802 20.224"></path>
      </g>
    </svg>
  );
});

ArrowToDownRightBoldDuotone.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default ArrowToDownRightBoldDuotone;
