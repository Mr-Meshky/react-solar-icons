import React, { forwardRef, SVGProps } from 'react';

interface ArrowLeftUpOutlineProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const ArrowLeftUpOutline = forwardRef<SVGSVGElement, ArrowLeftUpOutlineProps>(
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
          d="M5.25 6A.75.75 0 0 1 6 5.25h9a.75.75 0 0 1 0 1.5H7.81l10.72 10.72a.75.75 0 1 1-1.06 1.06L6.75 7.81V15a.75.75 0 0 1-1.5 0z"
          clip-rule="evenodd"
        ></path>
      </svg>
    );
  },
);

ArrowLeftUpOutline.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default ArrowLeftUpOutline;
