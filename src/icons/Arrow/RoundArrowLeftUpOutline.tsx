import React, { forwardRef, SVGProps } from 'react';

interface RoundArrowLeftUpOutlineProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const RoundArrowLeftUpOutline = forwardRef<
  SVGSVGElement,
  RoundArrowLeftUpOutlineProps
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
        d="M12 2.75a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12m7-3A.75.75 0 0 1 9 8.25h4.5a.75.75 0 0 1 0 1.5h-2.69l4.72 4.72a.75.75 0 1 1-1.06 1.06l-4.72-4.72v2.69a.75.75 0 0 1-1.5 0z"
        clip-rule="evenodd"
      ></path>
    </svg>
  );
});

RoundArrowLeftUpOutline.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default RoundArrowLeftUpOutline;
