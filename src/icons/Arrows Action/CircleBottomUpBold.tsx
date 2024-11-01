import React, { forwardRef, SVGProps } from 'react';

interface CircleBottomUpBoldProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const CircleBottomUpBold = forwardRef<SVGSVGElement, CircleBottomUpBoldProps>(
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
          d="M2.47 21.53a.75.75 0 0 1 0-1.06l7.72-7.72H6.655a.75.75 0 0 1 0-1.5H12a.75.75 0 0 1 .75.75v5.344a.75.75 0 0 1-1.5 0V13.81l-7.72 7.72a.75.75 0 0 1-1.06 0"
          clip-rule="evenodd"
        ></path>
        <path
          fill={color}
          d="m3.518 17.3 3.052-3.052a2.25 2.25 0 0 1 .086-4.498H12A2.25 2.25 0 0 1 14.25 12v5.344a2.25 2.25 0 0 1-4.498.086L6.7 20.482A9.95 9.95 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 1.947.556 3.763 1.518 5.3"
        ></path>
      </svg>
    );
  },
);

CircleBottomUpBold.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default CircleBottomUpBold;
