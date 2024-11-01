import React, { forwardRef, SVGProps } from 'react';

interface UndoRightSquareBoldDuotoneProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const UndoRightSquareBoldDuotone = forwardRef<
  SVGSVGElement,
  UndoRightSquareBoldDuotoneProps
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
        d="M14.699 6.915a.75.75 0 0 1 1.06-.043l2.25 2.077a.75.75 0 0 1 0 1.102l-2.25 2.077a.75.75 0 0 1-1.018-1.102l.84-.776h-5.62c-.699 0-1.168.001-1.526.037-.347.034-.507.095-.614.164a1.25 1.25 0 0 0-.37.37c-.07.107-.13.268-.165.614-.035.358-.036.828-.036 1.527s0 1.168.036 1.527c.035.346.096.507.164.613.096.149.223.275.371.371.107.069.267.13.614.164.358.035.827.036 1.527.036H14.5a.75.75 0 0 1 0 1.5H9.924c-.652 0-1.196 0-1.637-.043-.462-.046-.89-.146-1.28-.397a2.75 2.75 0 0 1-.816-.817c-.252-.389-.352-.818-.397-1.28-.044-.44-.044-.985-.044-1.637v-.075c0-.652 0-1.196.044-1.637.046-.462.145-.89.397-1.28a2.75 2.75 0 0 1 .816-.816c.39-.252.818-.351 1.28-.397.44-.044.985-.044 1.637-.044h5.658l-.84-.776a.75.75 0 0 1-.043-1.06"
        clip-rule="evenodd"
      ></path>
    </svg>
  );
});

UndoRightSquareBoldDuotone.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default UndoRightSquareBoldDuotone;
