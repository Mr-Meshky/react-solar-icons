import React, { forwardRef, SVGProps } from 'react';

interface PhoneBoldProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const PhoneBold = forwardRef<SVGSVGElement, PhoneBoldProps>(
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
        <path d="m16.556 12.906-.455.453s-1.083 1.076-4.038-1.862-1.872-4.014-1.872-4.014l.286-.286c.707-.702.774-1.83.157-2.654L9.374 2.86C8.61 1.84 7.135 1.705 6.26 2.575l-1.57 1.56c-.433.432-.723.99-.688 1.61.09 1.587.808 5 4.812 8.982 4.247 4.222 8.232 4.39 9.861 4.238.516-.048.964-.31 1.325-.67l1.42-1.412c.96-.953.69-2.588-.538-3.255l-1.91-1.039c-.806-.437-1.787-.309-2.417.317"></path>
      </svg>
    );
  },
);

PhoneBold.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default PhoneBold;
