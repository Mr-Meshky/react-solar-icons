import React, { forwardRef, SVGProps } from 'react';

interface ArrowRightDownOutlineProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const ArrowRightDownOutline = forwardRef<
  SVGSVGElement,
  ArrowRightDownOutlineProps
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
        d="M5.47 5.47a.75.75 0 0 1 1.06 0l10.72 10.72V9a.75.75 0 0 1 1.5 0v9a.75.75 0 0 1-.75.75H9a.75.75 0 0 1 0-1.5h7.19L5.47 6.53a.75.75 0 0 1 0-1.06"
        clip-rule="evenodd"
      ></path>
    </svg>
  );
});

ArrowRightDownOutline.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default ArrowRightDownOutline;
