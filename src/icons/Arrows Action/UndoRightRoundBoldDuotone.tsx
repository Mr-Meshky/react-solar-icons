import React, { forwardRef, SVGProps } from 'react';

interface UndoRightRoundBoldDuotoneProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const UndoRightRoundBoldDuotone = forwardRef<
  SVGSVGElement,
  UndoRightRoundBoldDuotoneProps
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
        d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12"
        opacity=".5"
      ></path>
      <path
        fill={color}
        fill-rule="evenodd"
        d="M14.699 6.915a.75.75 0 0 1 1.06-.043l2.25 2.077a.75.75 0 0 1 0 1.102l-2.25 2.077a.75.75 0 0 1-1.018-1.102l.84-.776h-5.62a2.712 2.712 0 1 0 0 5.423H14.5a.75.75 0 0 1 0 1.5H9.962a4.211 4.211 0 1 1 0-8.423h5.62l-.84-.776a.75.75 0 0 1-.043-1.06"
        clip-rule="evenodd"
      ></path>
    </svg>
  );
});

UndoRightRoundBoldDuotone.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default UndoRightRoundBoldDuotone;
