import React, { forwardRef, SVGProps } from 'react';

interface SortHorizontalOutlineProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const SortHorizontalOutline = forwardRef<
  SVGSVGElement,
  SortHorizontalOutlineProps
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
        d="M10.663 3.478a.75.75 0 0 1-.016 1.06L7.851 7.25H18a.75.75 0 0 1 0 1.5H7.85l2.797 2.712a.75.75 0 1 1-1.044 1.076l-4.125-4a.75.75 0 0 1 0-1.076l4.125-4a.75.75 0 0 1 1.06.016m2.674 8a.75.75 0 0 1 1.06-.016l4.125 4a.75.75 0 0 1 0 1.076l-4.125 4a.75.75 0 1 1-1.044-1.076l2.796-2.712H6a.75.75 0 0 1 0-1.5h10.15l-2.797-2.712a.75.75 0 0 1-.016-1.06"
        clip-rule="evenodd"
      ></path>
    </svg>
  );
});

SortHorizontalOutline.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default SortHorizontalOutline;
