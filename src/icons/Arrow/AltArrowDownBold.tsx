import React, { forwardRef, SVGProps } from 'react';

interface AltArrowDownBoldProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const AltArrowDownBold = forwardRef<SVGSVGElement, AltArrowDownBoldProps>(
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
          d="m12.37 15.835 6.43-6.63C19.201 8.79 18.958 8 18.43 8H5.57c-.528 0-.771.79-.37 1.205l6.43 6.63c.213.22.527.22.74 0"
        ></path>
      </svg>
    );
  },
);

AltArrowDownBold.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default AltArrowDownBold;
