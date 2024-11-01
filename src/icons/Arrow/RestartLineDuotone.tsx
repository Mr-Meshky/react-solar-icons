import React, { forwardRef, SVGProps } from 'react';

interface RestartLineDuotoneProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const RestartLineDuotone = forwardRef<SVGSVGElement, RestartLineDuotoneProps>(
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
        <g
          stroke={color}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          clip-path="url(#a)"
        >
          <path
            d="M19.729 10.928a8 8 0 1 1-2.072-3.585l.707.707"
            opacity=".5"
          ></path>
          <path d="M14.121 8.05h4.243V3.808"></path>
        </g>
        <defs>
          <clipPath id="a">
            <path fill={color} d="M0 0h24v24H0z"></path>
          </clipPath>
        </defs>
      </svg>
    );
  },
);

RestartLineDuotone.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default RestartLineDuotone;
