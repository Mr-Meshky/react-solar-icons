import React, { forwardRef, SVGProps } from 'react';

interface ReorderBoldProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const ReorderBold = forwardRef<SVGSVGElement, ReorderBoldProps>(
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
          d="M9.446 3.25c-1.133 0-2.058 0-2.79.098-.763.103-1.425.325-1.954.854s-.751 1.19-.854 1.955c-.098.73-.098 1.656-.098 2.79v6.06c-.465.013-.76.056-1 .194a1.5 1.5 0 0 0-.549.549C2 16.098 2 16.565 2 17.5s0 1.402.201 1.75a1.5 1.5 0 0 0 .549.549C3.098 20 3.565 20 4.5 20s1.402 0 1.75-.201a1.5 1.5 0 0 0 .549-.549C7 18.902 7 18.435 7 17.5s0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.549c-.24-.138-.535-.181-1-.195V9c0-1.2.002-2.024.085-2.643.08-.598.224-.89.428-1.094s.496-.348 1.094-.428C7.476 4.752 8.3 4.75 9.5 4.75h5c1.2 0 2.024.002 2.643.085.598.08.89.224 1.094.428s.348.496.428 1.094c.083.619.085 1.443.085 2.643v1.19l-.72-.72a.75.75 0 1 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0l2-2a.75.75 0 1 0-1.06-1.06l-.72.72V8.945c0-1.133 0-2.058-.098-2.79-.103-.763-.325-1.425-.854-1.954s-1.19-.751-1.955-.854c-.73-.098-1.656-.098-2.79-.098z"
        ></path>
        <path
          fill={color}
          d="M9.701 15.75c-.201.348-.201.815-.201 1.75s0 1.402.201 1.75a1.5 1.5 0 0 0 .549.549c.348.201.815.201 1.75.201s1.402 0 1.75-.201a1.5 1.5 0 0 0 .549-.549c.201-.348.201-.815.201-1.75s0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.549C13.402 15 12.935 15 12 15s-1.402 0-1.75.201a1.5 1.5 0 0 0-.549.549M17 17.5c0-.935 0-1.402.201-1.75a1.5 1.5 0 0 1 .549-.549C18.098 15 18.565 15 19.5 15s1.402 0 1.75.201a1.5 1.5 0 0 1 .549.549c.201.348.201.815.201 1.75s0 1.402-.201 1.75a1.5 1.5 0 0 1-.549.549c-.348.201-.815.201-1.75.201s-1.402 0-1.75-.201a1.5 1.5 0 0 1-.549-.549C17 18.902 17 18.435 17 17.5"
        ></path>
      </svg>
    );
  },
);

ReorderBold.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default ReorderBold;
