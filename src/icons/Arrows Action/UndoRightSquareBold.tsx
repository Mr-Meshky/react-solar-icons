import React, { forwardRef, SVGProps } from 'react';

interface UndoRightSquareBoldProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const UndoRightSquareBold = forwardRef<SVGSVGElement, UndoRightSquareBoldProps>(
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
          d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.716 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464M15.76 6.873a.75.75 0 1 0-1.018 1.102l.84.776H9.925c-.652 0-1.196 0-1.637.043-.462.046-.89.146-1.28.397a2.75 2.75 0 0 0-.816.817c-.252.389-.351.818-.397 1.28-.044.44-.044.985-.044 1.637V13c0 .652 0 1.196.044 1.637.045.462.145.89.397 1.28.21.327.49.605.816.816.39.252.818.351 1.28.397.44.044.985.044 1.637.044H14.5a.75.75 0 0 0 0-1.5H9.962c-.7 0-1.169-.001-1.527-.037-.347-.034-.507-.095-.614-.164a1.25 1.25 0 0 1-.37-.37c-.07-.107-.13-.268-.165-.614-.035-.358-.036-.828-.036-1.527s0-1.168.036-1.527c.035-.346.096-.507.164-.613a1.25 1.25 0 0 1 .371-.371c.107-.069.267-.13.614-.164.358-.035.827-.036 1.527-.036h5.62l-.84.776a.75.75 0 1 0 1.017 1.102l2.25-2.077a.75.75 0 0 0 0-1.102z"
          clip-rule="evenodd"
        ></path>
      </svg>
    );
  },
);

UndoRightSquareBold.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default UndoRightSquareBold;
