import React, { forwardRef, SVGProps } from 'react';

interface SortVerticalOutlineProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const SortVerticalOutline = forwardRef<SVGSVGElement, SortVerticalOutlineProps>(
  ({ variant, color = 'currentColor', size = 24, className, ...rest }, ref) => {
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
          d="M16 5.25a.75.75 0 0 1 .538.228l4 4.125a.75.75 0 1 1-1.076 1.044L16.75 7.851V18a.75.75 0 0 1-1.5 0V7.85l-2.712 2.797a.75.75 0 1 1-1.076-1.044l4-4.125A.75.75 0 0 1 16 5.25m-8 0a.75.75 0 0 1 .75.75v10.15l2.712-2.797a.75.75 0 1 1 1.076 1.044l-4 4.125a.75.75 0 0 1-1.076 0l-4-4.125a.75.75 0 1 1 1.076-1.044l2.712 2.796V6A.75.75 0 0 1 8 5.25"
          clip-rule="evenodd"
        ></path>
      </svg>
    );
  },
);

SortVerticalOutline.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default SortVerticalOutline;
