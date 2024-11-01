import React, { forwardRef, SVGProps } from 'react';

interface ArrowRightDownBoldProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const ArrowRightDownBold = forwardRef<SVGSVGElement, ArrowRightDownBoldProps>(
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
          d="M5.47 6.53a.75.75 0 0 1 1.06-1.06l6.97 6.97 3.97-3.97a.75.75 0 0 1 1.28.53v9a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.53-1.28l3.97-3.97z"
        ></path>
      </svg>
    );
  },
);

ArrowRightDownBold.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default ArrowRightDownBold;
