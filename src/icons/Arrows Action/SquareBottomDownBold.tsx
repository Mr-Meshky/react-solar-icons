import React, { forwardRef, SVGProps } from 'react';

interface SquareBottomDownBoldProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const SquareBottomDownBold = forwardRef<
  SVGSVGElement,
  SquareBottomDownBoldProps
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
        d="M9.75 21a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75v-6a.75.75 0 0 1 1.5 0v4.19l6.72-6.72a.75.75 0 1 1 1.06 1.06l-6.72 6.72H9a.75.75 0 0 1 .75.75"
        clip-rule="evenodd"
      ></path>
      <path
        fill={color}
        d="M2 12.984A2.25 2.25 0 0 1 5.25 15v.568l4.159-4.159a2.25 2.25 0 1 1 3.182 3.182L8.432 18.75H9A2.25 2.25 0 0 1 11.016 22H12c4.714 0 7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12z"
      ></path>
    </svg>
  );
});

SquareBottomDownBold.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default SquareBottomDownBold;
