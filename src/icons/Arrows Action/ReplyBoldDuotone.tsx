import React, { forwardRef, SVGProps } from 'react';

interface ReplyBoldDuotoneProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const ReplyBoldDuotone = forwardRef<SVGSVGElement, ReplyBoldDuotoneProps>(
  ({ variant, color = 'currentColor', size = 24, className, ...rest }, ref) => {
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
          d="M10.03 6.47a.75.75 0 0 0-1.06 0l-5 5a.75.75 0 0 0 0 1.06l5 5a.75.75 0 1 0 1.06-1.06L5.56 12l4.47-4.47a.75.75 0 0 0 0-1.06"
          clip-rule="evenodd"
        ></path>
        <g fill={color} opacity=".5">
          <path d="M6.31 11.25h8.19c.953 0 2.367.28 3.563 1.141 1.235.89 2.187 2.365 2.187 4.609a.75.75 0 0 1-1.5 0c0-1.756-.715-2.78-1.563-3.391-.887-.639-1.974-.859-2.687-.859H6.31L5.56 12zM3.807 11.713"></path>
        </g>
      </svg>
    );
  },
);

ReplyBoldDuotone.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default ReplyBoldDuotone;
