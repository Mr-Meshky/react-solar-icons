import React, { forwardRef, SVGProps } from 'react';

interface RoundAltArrowUpOutlineProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const RoundAltArrowUpOutline = forwardRef<
  SVGSVGElement,
  RoundAltArrowUpOutlineProps
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
        d="M12 2.75a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12m7.22.97 3-3a.75.75 0 0 1 1.06 0l3 3a.75.75 0 1 1-1.06 1.06L12 11.56l-2.47 2.47a.75.75 0 0 1-1.06-1.06"
        clip-rule="evenodd"
      ></path>
    </svg>
  );
});

RoundAltArrowUpOutline.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default RoundAltArrowUpOutline;
