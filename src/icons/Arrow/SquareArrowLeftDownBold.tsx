import React, { forwardRef, SVGProps } from 'react';

interface SquareArrowLeftDownBoldProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const SquareArrowLeftDownBold = forwardRef<
  SVGSVGElement,
  SquareArrowLeftDownBoldProps
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
        d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464m5.708 12.114a.75.75 0 0 1-.75-.75v-4.242a.75.75 0 0 1 1.5 0v2.432l4.376-4.377a.75.75 0 0 1 1.06 1.06l-4.376 4.377h2.432a.75.75 0 0 1 0 1.5z"
        clip-rule="evenodd"
      ></path>
    </svg>
  );
});

SquareArrowLeftDownBold.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default SquareArrowLeftDownBold;
