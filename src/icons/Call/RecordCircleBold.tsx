import React, { forwardRef, SVGProps } from 'react';

interface RecordCircleBoldProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const RecordCircleBold = forwardRef<SVGSVGElement, RecordCircleBoldProps>(
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
        <path d="M14.25 12a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0M8 13.75a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5"></path>
        <path
          fill-rule="evenodd"
          d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m1.26-8.25a3.25 3.25 0 1 1 2.74 1.5H8a3.25 3.25 0 1 1 2.74-1.5z"
          clip-rule="evenodd"
        ></path>
      </svg>
    );
  },
);

RecordCircleBold.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default RecordCircleBold;
