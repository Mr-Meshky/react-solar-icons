import React, { forwardRef, SVGProps } from 'react';

interface SquareArrowRightUpBoldDuotoneProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const SquareArrowRightUpBoldDuotone = forwardRef<
  SVGSVGElement,
  SquareArrowRightUpBoldDuotoneProps
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
        d="M20.536 3.464C19.07 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536"
        opacity=".5"
      ></path>
      <path
        fill={color}
        d="M15.579 9.172a.75.75 0 0 0-.75-.75h-4.243a.75.75 0 0 0 0 1.5h2.432L8.64 14.298a.75.75 0 0 0 1.061 1.061l4.377-4.376v2.432a.75.75 0 0 0 1.5 0z"
      ></path>
    </svg>
  );
});

SquareArrowRightUpBoldDuotone.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default SquareArrowRightUpBoldDuotone;
