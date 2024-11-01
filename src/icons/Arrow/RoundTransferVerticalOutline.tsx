import React, { forwardRef, SVGProps } from 'react';

interface RoundTransferVerticalOutlineProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const RoundTransferVerticalOutline = forwardRef<
  SVGSVGElement,
  RoundTransferVerticalOutlineProps
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
        d="M12 2.75a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12"
        clip-rule="evenodd"
      ></path>
      <path
        fill={color}
        fill-rule="evenodd"
        d="M6.507 12.997a.75.75 0 0 1 1.058.072L9.25 15V7a.75.75 0 0 1 1.5 0v10a.75.75 0 0 1-1.315.493l-3-3.437a.75.75 0 0 1 .072-1.059M13.737 6.298A.75.75 0 0 0 13.25 7v10a.75.75 0 0 0 1.5 0V9l1.685 1.93a.75.75 0 0 0 1.13-.986l-3-3.437a.75.75 0 0 0-.828-.21"
        clip-rule="evenodd"
      ></path>
    </svg>
  );
});

RoundTransferVerticalOutline.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default RoundTransferVerticalOutline;
