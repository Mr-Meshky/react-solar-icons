import React, { forwardRef, SVGProps } from 'react';

interface MaximizeBoldDuotoneProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const MaximizeBoldDuotone = forwardRef<SVGSVGElement, MaximizeBoldDuotoneProps>(
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
          d="M8.607 22a.75.75 0 0 1-.75.75H2a.75.75 0 0 1-.75-.75v-5.857a.75.75 0 1 1 1.5 0v4.046l5.72-5.72a.75.75 0 0 1 1.06 1.061l-5.72 5.72h4.047a.75.75 0 0 1 .75.75"
          clip-rule="evenodd"
          opacity=".5"
        ></path>
        <path
          fill={color}
          fill-rule="evenodd"
          d="M15.393 2a.75.75 0 0 1 .75-.75H22a.75.75 0 0 1 .75.75v5.857a.75.75 0 0 1-1.5 0V3.811l-5.72 5.72a.75.75 0 1 1-1.06-1.061l5.72-5.72h-4.047a.75.75 0 0 1-.75-.75"
          clip-rule="evenodd"
        ></path>
      </svg>
    );
  },
);

MaximizeBoldDuotone.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default MaximizeBoldDuotone;
