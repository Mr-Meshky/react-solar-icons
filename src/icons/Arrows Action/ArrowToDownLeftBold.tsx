import React, { forwardRef, SVGProps } from 'react';

interface ArrowToDownLeftBoldProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const ArrowToDownLeftBold = forwardRef<SVGSVGElement, ArrowToDownLeftBoldProps>(
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
          d="M17.53 13.97a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-5-5a.75.75 0 1 1 1.06-1.06l3.72 3.72V9.5c0-.713-.22-1.8-.859-2.687C9.781 5.965 8.756 5.25 7 5.25a.75.75 0 0 1 0-1.5c2.244 0 3.72.952 4.609 2.187.861 1.196 1.141 2.61 1.141 3.563v8.19l3.72-3.72a.75.75 0 0 1 1.06 0"
          clip-rule="evenodd"
        ></path>
      </svg>
    );
  },
);

ArrowToDownLeftBold.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default ArrowToDownLeftBold;
