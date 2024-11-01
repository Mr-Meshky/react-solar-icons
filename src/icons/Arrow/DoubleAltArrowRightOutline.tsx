import React, { forwardRef, SVGProps } from 'react';

interface DoubleAltArrowRightOutlineProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const DoubleAltArrowRightOutline = forwardRef<
  SVGSVGElement,
  DoubleAltArrowRightOutlineProps
>(({ variant, color = 'currentColor', size = 24, className, ...rest }, ref) => {
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
        d="M6.512 4.43a.75.75 0 0 1 1.057.082l6 7a.75.75 0 0 1 0 .976l-6 7a.75.75 0 0 1-1.139-.976L12.012 12 6.43 5.488a.75.75 0 0 1 .082-1.057m4 0a.75.75 0 0 1 1.057.082l6 7a.75.75 0 0 1 0 .976l-6 7a.75.75 0 0 1-1.139-.976L16.013 12l-5.581-6.512a.75.75 0 0 1 .08-1.057"
        clip-rule="evenodd"
      ></path>
    </svg>
  );
});

DoubleAltArrowRightOutline.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default DoubleAltArrowRightOutline;
