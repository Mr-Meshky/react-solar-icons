import React, { forwardRef, SVGProps } from 'react';

interface RecordCircleLineDuotoneProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const RecordCircleLineDuotone = forwardRef<
  SVGSVGElement,
  RecordCircleLineDuotoneProps
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
      <path d="M18.5 12a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"></path>
      <path
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10"
        opacity=".5"
      ></path>
      <path d="M10.5 12a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0M8 14.5h8"></path>
    </svg>
  );
});

RecordCircleLineDuotone.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default RecordCircleLineDuotone;
