import React, { forwardRef, SVGProps } from 'react';

interface UndoLeftRoundBoldDuotoneProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const UndoLeftRoundBoldDuotone = forwardRef<
  SVGSVGElement,
  UndoLeftRoundBoldDuotoneProps
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
      <path
        fill={color}
        fill-rule="evenodd"
        d="M7.53 3.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06L5.06 7l2.47-2.47a.75.75 0 0 0 0-1.06"
        clip-rule="evenodd"
      ></path>
      <path
        fill={color}
        d="M5.81 6.25H15a5.75 5.75 0 0 1 0 11.5H8a.75.75 0 0 1 0-1.5h7a4.25 4.25 0 0 0 0-8.5H5.81L5.06 7z"
        opacity=".5"
      ></path>
    </svg>
  );
});

UndoLeftRoundBoldDuotone.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default UndoLeftRoundBoldDuotone;
