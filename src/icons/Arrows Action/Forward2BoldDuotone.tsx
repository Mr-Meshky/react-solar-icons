import React, { forwardRef, SVGProps } from 'react';

interface Forward2BoldDuotoneProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const Forward2BoldDuotone = forwardRef<SVGSVGElement, Forward2BoldDuotoneProps>(
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
          d="M13.97 17.53a.75.75 0 0 0 1.06 0l5-5a.75.75 0 0 0 0-1.06l-5-5a.75.75 0 1 0-1.06 1.06L18.44 12l-4.47 4.47a.75.75 0 0 0 0 1.06"
          clip-rule="evenodd"
        ></path>
        <g fill={color} opacity=".5">
          <path d="M17.69 12.75H9.5c-.953 0-2.367-.28-3.563-1.141C4.702 10.719 3.75 9.244 3.75 7a.75.75 0 1 1 1.5 0c0 1.756.715 2.78 1.563 3.391.887.639 1.974.859 2.687.859h8.19l.75.75zM20.193 12.287"></path>
        </g>
      </svg>
    );
  },
);

Forward2BoldDuotone.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default Forward2BoldDuotone;
