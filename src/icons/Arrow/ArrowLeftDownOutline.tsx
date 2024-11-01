import React, { forwardRef, SVGProps } from 'react';

interface ArrowLeftDownOutlineProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const ArrowLeftDownOutline = forwardRef<
  SVGSVGElement,
  ArrowLeftDownOutlineProps
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
        d="M18.53 5.47a.75.75 0 0 1 0 1.06L7.81 17.25H15a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75V9a.75.75 0 0 1 1.5 0v7.19L17.47 5.47a.75.75 0 0 1 1.06 0"
        clip-rule="evenodd"
      ></path>
    </svg>
  );
});

ArrowLeftDownOutline.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default ArrowLeftDownOutline;
