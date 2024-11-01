import React, { forwardRef, SVGProps } from 'react';

interface ArrowRightUpBoldDuotoneProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const ArrowRightUpBoldDuotone = forwardRef<
  SVGSVGElement,
  ArrowRightUpBoldDuotoneProps
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
        d="M17.47 15.53a.75.75 0 0 0 1.28-.53V6a.75.75 0 0 0-.75-.75H9a.75.75 0 0 0-.53 1.28z"
        clip-rule="evenodd"
      ></path>
      <path
        fill={color}
        d="M5.47 17.47a.75.75 0 1 0 1.06 1.06l6.97-6.97-1.06-1.06z"
        opacity=".5"
      ></path>
    </svg>
  );
});

ArrowRightUpBoldDuotone.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default ArrowRightUpBoldDuotone;
