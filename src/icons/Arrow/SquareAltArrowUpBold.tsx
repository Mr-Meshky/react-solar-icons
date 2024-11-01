import React, { forwardRef, SVGProps } from 'react';

interface SquareAltArrowUpBoldProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const SquareAltArrowUpBold = forwardRef<
  SVGSVGElement,
  SquareAltArrowUpBoldProps
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
        d="M3.464 20.536C2 19.07 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465M8.47 14.03a.75.75 0 0 0 1.06 0L12 11.56l2.47 2.47a.75.75 0 1 0 1.06-1.06l-3-3a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 0 0 0 1.06"
        clip-rule="evenodd"
      ></path>
    </svg>
  );
});

SquareAltArrowUpBold.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default SquareAltArrowUpBold;