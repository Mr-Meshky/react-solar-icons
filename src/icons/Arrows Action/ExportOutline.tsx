import React, { forwardRef, SVGProps } from 'react';

interface ExportOutlineProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const ExportOutline = forwardRef<SVGSVGElement, ExportOutlineProps>(
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
          d="M14.47 7.53a.75.75 0 1 0 1.06-1.06l-3-3a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 0 0 1.06 1.06l1.72-1.72V14a.75.75 0 0 0 1.5 0V5.81z"
        ></path>
        <path
          fill={color}
          d="M20.75 12a.75.75 0 0 0-1.5 0 7.25 7.25 0 1 1-14.5 0 .75.75 0 0 0-1.5 0 8.75 8.75 0 1 0 17.5 0"
        ></path>
      </svg>
    );
  },
);

ExportOutline.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default ExportOutline;
