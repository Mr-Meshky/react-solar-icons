import React, { forwardRef, SVGProps } from 'react';

interface ArrowLeftUpBoldDuotoneProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const ArrowLeftUpBoldDuotone = forwardRef<
  SVGSVGElement,
  ArrowLeftUpBoldDuotoneProps
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
        d="M6.53 15.53A.75.75 0 0 1 5.25 15V6A.75.75 0 0 1 6 5.25h9a.75.75 0 0 1 .53 1.28z"
        clip-rule="evenodd"
      ></path>
      <path
        fill={color}
        d="M18.53 17.47a.75.75 0 1 1-1.06 1.06l-6.97-6.97 1.06-1.06z"
        opacity=".5"
      ></path>
    </svg>
  );
});

ArrowLeftUpBoldDuotone.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default ArrowLeftUpBoldDuotone;
