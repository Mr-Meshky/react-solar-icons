import React, { forwardRef, SVGProps } from 'react';

interface RestartBoldDuotoneProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const RestartBoldDuotone = forwardRef<SVGSVGElement, RestartBoldDuotoneProps>(
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
          d="M6.873 7.873a7.25 7.25 0 0 1 7.928-1.563l1.13-1.13a8.75 8.75 0 1 0 4.751 6.727.75.75 0 0 0-1.488.187 7.25 7.25 0 1 1-12.32-4.22"
          clip-rule="evenodd"
          opacity=".5"
        ></path>
        <path
          fill={color}
          d="M18.721 4.201a.75.75 0 0 0-1.28-.53l-1.51 1.51-1.13 1.13-1.603 1.603a.75.75 0 0 0 .53 1.28h4.243a.75.75 0 0 0 .75-.75z"
        ></path>
      </svg>
    );
  },
);

RestartBoldDuotone.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default RestartBoldDuotone;
