import React, { forwardRef, SVGProps } from 'react';

interface SquareArrowLeftUpBoldDuotoneProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const SquareArrowLeftUpBoldDuotone = forwardRef<
  SVGSVGElement,
  SquareArrowLeftUpBoldDuotoneProps
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
        d="M3.464 3.464C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536"
        opacity=".5"
      ></path>
      <path
        fill={color}
        d="M8.422 9.172a.75.75 0 0 1 .75-.75h4.242a.75.75 0 1 1 0 1.5h-2.432l4.377 4.376a.75.75 0 0 1-1.06 1.061l-4.377-4.376v2.432a.75.75 0 0 1-1.5 0z"
      ></path>
    </svg>
  );
});

SquareArrowLeftUpBoldDuotone.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default SquareArrowLeftUpBoldDuotone;
