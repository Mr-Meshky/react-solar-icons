import React, { forwardRef, SVGProps } from 'react';

interface RestartBrokenProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const RestartBroken = forwardRef<SVGSVGElement, RestartBrokenProps>(
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
        <g clip-path="url(#a)">
          <path
            stroke={color}
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M19.729 10.928A8.003 8.003 0 0 1 8.5 20.196M18.363 8.05l-.707-.707A8 8 0 0 0 5.754 18m12.61-9.95h-4.243m4.243 0V3.808"
          ></path>
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

RestartBroken.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default RestartBroken;
