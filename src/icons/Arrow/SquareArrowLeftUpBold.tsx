import React, { forwardRef, SVGProps } from 'react';

interface SquareArrowLeftUpBoldProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const SquareArrowLeftUpBold = forwardRef<
  SVGSVGElement,
  SquareArrowLeftUpBoldProps
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
        d="M3.464 20.536C2 19.07 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465M9.172 8.421a.75.75 0 0 0-.75.75v4.242a.75.75 0 0 0 1.5 0v-2.432l4.376 4.377a.75.75 0 0 0 1.06-1.06l-4.376-4.377h2.432a.75.75 0 0 0 0-1.5z"
        clip-rule="evenodd"
      ></path>
    </svg>
  );
});

SquareArrowLeftUpBold.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default SquareArrowLeftUpBold;
