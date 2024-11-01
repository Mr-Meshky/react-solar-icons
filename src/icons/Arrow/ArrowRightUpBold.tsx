import React, { forwardRef, SVGProps } from 'react';

interface ArrowRightUpBoldProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const ArrowRightUpBold = forwardRef<SVGSVGElement, ArrowRightUpBoldProps>(
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
          d="M5.47 17.47a.75.75 0 1 0 1.06 1.06l6.97-6.97 3.97 3.97a.75.75 0 0 0 1.28-.53V6a.75.75 0 0 0-.75-.75H9a.75.75 0 0 0-.53 1.28l3.97 3.97z"
        ></path>
      </svg>
    );
  },
);

ArrowRightUpBold.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default ArrowRightUpBold;
