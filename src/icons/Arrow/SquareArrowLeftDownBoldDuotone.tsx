import React, { forwardRef, SVGProps } from 'react';

interface SquareArrowLeftDownBoldDuotoneProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const SquareArrowLeftDownBoldDuotone = forwardRef<
  SVGSVGElement,
  SquareArrowLeftDownBoldDuotoneProps
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
        d="M3.464 20.536C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535"
        opacity=".5"
      ></path>
      <path
        fill={color}
        d="M8.421 14.828c0 .414.336.75.75.75h4.243a.75.75 0 0 0 0-1.5h-2.432L15.359 9.7a.75.75 0 1 0-1.061-1.06L9.92 13.017v-2.432a.75.75 0 0 0-1.5 0z"
      ></path>
    </svg>
  );
});

SquareArrowLeftDownBoldDuotone.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default SquareArrowLeftDownBoldDuotone;