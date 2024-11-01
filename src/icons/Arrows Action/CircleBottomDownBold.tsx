import React, { forwardRef, SVGProps } from 'react';

interface CircleBottomDownBoldProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const CircleBottomDownBold = forwardRef<
  SVGSVGElement,
  CircleBottomDownBoldProps
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
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="m10 14-8 8m0 0h6m-6 0v-6"
      ></path>
      <path
        fill={color}
        fill-rule="evenodd"
        d="M8.75 22a.75.75 0 0 1-.75.75H2a.75.75 0 0 1-.75-.75v-6a.75.75 0 0 1 1.5 0v4.19l6.72-6.72a.75.75 0 1 1 1.06 1.06l-6.72 6.72H8a.75.75 0 0 1 .75.75"
        clip-rule="evenodd"
      ></path>
      <path
        fill={color}
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12q.001.9.154 1.755A2.25 2.25 0 0 1 4.25 16v.568l4.159-4.159a2.25 2.25 0 1 1 3.182 3.182L7.432 19.75H8a2.25 2.25 0 0 1 2.245 2.096Q11.1 22 12 22"
      ></path>
    </svg>
  );
});

CircleBottomDownBold.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default CircleBottomDownBold;
