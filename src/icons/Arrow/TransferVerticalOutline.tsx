import React, { forwardRef, SVGProps } from 'react';

interface TransferVerticalOutlineProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const TransferVerticalOutline = forwardRef<
  SVGSVGElement,
  TransferVerticalOutlineProps
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
        d="M13.698 3.314a.75.75 0 0 1 .809.133l6 5.5a.75.75 0 0 1-1.014 1.106L14.75 5.705V20a.75.75 0 0 1-1.5 0V4a.75.75 0 0 1 .448-.687M10 3.25a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-1.257.553l-6-5.5a.75.75 0 0 1 1.014-1.106l4.743 4.348V4a.75.75 0 0 1 .75-.75"
        clip-rule="evenodd"
      ></path>
    </svg>
  );
});

TransferVerticalOutline.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default TransferVerticalOutline;
