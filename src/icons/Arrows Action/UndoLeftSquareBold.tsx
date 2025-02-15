import React, { forwardRef, SVGProps } from 'react';

interface UndoLeftSquareBoldProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const UndoLeftSquareBold = forwardRef<SVGSVGElement, UndoLeftSquareBoldProps>(
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
          d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.716 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464m5.795 4.51A.75.75 0 1 0 8.24 6.872l-2.25 2.077a.75.75 0 0 0 0 1.102l2.25 2.077a.75.75 0 1 0 1.018-1.102l-.84-.776h5.62c.699 0 1.168 0 1.526.036.347.034.507.095.614.164.148.096.275.223.37.371.07.106.13.267.165.614.035.358.036.827.036 1.526s0 1.169-.036 1.527c-.035.346-.095.507-.164.614a1.25 1.25 0 0 1-.371.37c-.107.07-.267.13-.614.165-.358.035-.827.036-1.526.036H9.5a.75.75 0 1 0 0 1.5h4.576c.652 0 1.196 0 1.637-.044.462-.046.89-.145 1.28-.397.327-.211.605-.49.816-.816.252-.39.351-.818.397-1.28.044-.441.044-.985.044-1.637v-.075c0-.652 0-1.196-.044-1.637-.046-.462-.145-.891-.397-1.28a2.75 2.75 0 0 0-.816-.817c-.39-.251-.818-.35-1.28-.396-.44-.044-.985-.044-1.637-.044H8.418z"
          clip-rule="evenodd"
        ></path>
      </svg>
    );
  },
);

UndoLeftSquareBold.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default UndoLeftSquareBold;
