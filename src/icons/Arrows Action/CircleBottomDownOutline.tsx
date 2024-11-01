import React, { forwardRef, SVGProps } from 'react';

interface CircleBottomDownOutlineProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const CircleBottomDownOutline = forwardRef<
  SVGSVGElement,
  CircleBottomDownOutlineProps
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
        d="M2.75 12A9.25 9.25 0 1 1 12 21.25a.75.75 0 0 0 0 1.5c5.937 0 10.75-4.813 10.75-10.75S17.937 1.25 12 1.25 1.25 6.063 1.25 12a.75.75 0 0 0 1.5 0"
      ></path>
      <path
        fill={color}
        d="M8 22.75a.75.75 0 0 0 0-1.5H3.81l6.72-6.72a.75.75 0 1 0-1.06-1.06l-6.72 6.72V16a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75z"
      ></path>
    </svg>
  );
});

CircleBottomDownOutline.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default CircleBottomDownOutline;
