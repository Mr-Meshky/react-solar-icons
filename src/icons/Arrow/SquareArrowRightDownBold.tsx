import React, { forwardRef, SVGProps } from 'react';

interface SquareArrowRightDownBoldProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const SquareArrowRightDownBold = forwardRef<
  SVGSVGElement,
  SquareArrowRightDownBoldProps
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
        d="M20.536 3.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464m-5.708 12.114a.75.75 0 0 0 .75-.75v-4.242a.75.75 0 0 0-1.5 0v2.432L9.702 8.64a.75.75 0 0 0-1.06 1.06l4.376 4.377h-2.432a.75.75 0 0 0 0 1.5z"
        clip-rule="evenodd"
      ></path>
    </svg>
  );
});

SquareArrowRightDownBold.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default SquareArrowRightDownBold;