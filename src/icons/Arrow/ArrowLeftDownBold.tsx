import React, { forwardRef, SVGProps } from 'react';

interface ArrowLeftDownBoldProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const ArrowLeftDownBold = forwardRef<SVGSVGElement, ArrowLeftDownBoldProps>(
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
          d="M18.53 6.53a.75.75 0 0 0-1.06-1.06l-6.97 6.97-3.97-3.97A.75.75 0 0 0 5.25 9v9c0 .414.336.75.75.75h9a.75.75 0 0 0 .53-1.28l-3.97-3.97z"
        ></path>
      </svg>
    );
  },
);

ArrowLeftDownBold.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default ArrowLeftDownBold;
