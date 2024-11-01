import React, { forwardRef, SVGProps } from 'react';

interface ExportBrokenProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const ExportBroken = forwardRef<SVGSVGElement, ExportBrokenProps>(
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
          stroke={color}
          stroke-linecap="round"
          stroke-width="1.5"
          d="M12 20a8 8 0 0 1-8-8m16 0a7.99 7.99 0 0 1-3 6.245"
        ></path>
        <path
          stroke={color}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="M12 14V4m0 0 3 3m-3-3L9 7"
        ></path>
      </svg>
    );
  },
);

ExportBroken.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default ExportBroken;
