import React, { forwardRef, SVGProps } from 'react';

interface RoundArrowRightDownBoldDuotoneProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const RoundArrowRightDownBoldDuotone = forwardRef<
  SVGSVGElement,
  RoundArrowRightDownBoldDuotoneProps
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
        d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2"
        opacity=".5"
      ></path>
      <path
        fill={color}
        d="M10.5 15.75a.75.75 0 0 1 0-1.5h2.69L8.47 9.53a.75.75 0 0 1 1.06-1.06l4.72 4.72V10.5a.75.75 0 0 1 1.5 0V15a.75.75 0 0 1-.75.75z"
      ></path>
    </svg>
  );
});

RoundArrowRightDownBoldDuotone.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default RoundArrowRightDownBoldDuotone;
