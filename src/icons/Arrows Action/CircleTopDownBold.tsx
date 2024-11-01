import React, { forwardRef, SVGProps } from 'react';

interface CircleTopDownBoldProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const CircleTopDownBold = forwardRef<SVGSVGElement, CircleTopDownBoldProps>(
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
          d="M21.53 2.47a.75.75 0 0 1 0 1.06l-7.72 7.72h3.534a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75V6.656a.75.75 0 0 1 1.5 0v3.533l7.72-7.72a.75.75 0 0 1 1.06 0"
          clip-rule="evenodd"
        ></path>
        <path
          fill={color}
          d="M20.482 6.7 17.43 9.752a2.25 2.25 0 0 1-.086 4.498H12A2.25 2.25 0 0 1 9.75 12V6.656a2.25 2.25 0 0 1 4.498-.086L17.3 3.518A9.95 9.95 0 0 0 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10a9.95 9.95 0 0 0-1.518-5.3"
        ></path>
      </svg>
    );
  },
);

CircleTopDownBold.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default CircleTopDownBold;
