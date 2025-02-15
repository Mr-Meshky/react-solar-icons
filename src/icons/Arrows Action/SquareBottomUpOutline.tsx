import React, { forwardRef, SVGProps } from 'react';

interface SquareBottomUpOutlineProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const SquareBottomUpOutline = forwardRef<
  SVGSVGElement,
  SquareBottomUpOutlineProps
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
        d="M11.943 1.25c-2.309 0-4.118 0-5.53.19-1.444.194-2.584.6-3.479 1.494-.828.829-1.238 1.868-1.448 3.167-.207 1.276-.232 2.882-.236 4.898a.75.75 0 1 0 1.5.002c.004-2.04.032-3.523.217-4.66.18-1.117.5-1.818 1.028-2.346.57-.57 1.34-.897 2.618-1.069 1.3-.174 3.009-.176 5.387-.176s4.086.002 5.386.176c1.279.172 2.05.5 2.62 1.069.569.57.896 1.34 1.067 2.619.175 1.3.177 3.008.177 5.386s-.002 4.086-.177 5.386c-.171 1.279-.498 2.05-1.068 2.62-.528.528-1.23.847-2.345 1.027-1.138.184-2.621.213-4.661.216a.75.75 0 0 0 .002 1.5c2.015-.003 3.621-.028 4.898-.235 1.299-.21 2.338-.62 3.167-1.448.895-.895 1.3-2.035 1.494-3.48.19-1.411.19-3.22.19-5.529v-.114c0-2.309 0-4.118-.19-5.53-.194-1.444-.6-2.584-1.494-3.479-.895-.895-2.035-1.3-3.48-1.494-1.411-.19-3.22-.19-5.529-.19z"
      ></path>
      <path
        fill={color}
        d="M5 12.25a.75.75 0 0 0 0 1.5h4.19l-6.72 6.72a.75.75 0 1 0 1.06 1.06l6.72-6.72V19a.75.75 0 0 0 1.5 0v-6a.75.75 0 0 0-.75-.75z"
      ></path>
    </svg>
  );
});

SquareBottomUpOutline.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default SquareBottomUpOutline;
