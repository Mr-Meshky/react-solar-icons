import React, { forwardRef, SVGProps } from 'react';

interface ExportBoldProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const ExportBold = forwardRef<SVGSVGElement, ExportBoldProps>(
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
          d="M8.845 7.905a.75.75 0 0 0 1.06 0l1.72-1.72v8.19a.75.75 0 0 0 1.5 0v-8.19l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 0 0 0 1.06"
          clip-rule="evenodd"
        ></path>
        <path
          fill={color}
          d="M12.375 20.375a8 8 0 0 0 8-8h-3.75c-.943 0-1.414 0-1.707.293s-.293.764-.293 1.707a2.25 2.25 0 0 1-4.5 0c0-.943 0-1.414-.293-1.707s-.764-.293-1.707-.293h-3.75a8 8 0 0 0 8 8"
        ></path>
      </svg>
    );
  },
);

ExportBold.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default ExportBold;