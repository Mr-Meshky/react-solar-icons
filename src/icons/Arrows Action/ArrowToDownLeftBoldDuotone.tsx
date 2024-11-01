import React, { forwardRef, SVGProps } from 'react';

interface ArrowToDownLeftBoldDuotoneProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const ArrowToDownLeftBoldDuotone = forwardRef<
  SVGSVGElement,
  ArrowToDownLeftBoldDuotoneProps
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
        d="M17.53 13.97a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-5-5a.75.75 0 1 1 1.06-1.06L12 18.44l4.47-4.47a.75.75 0 0 1 1.06 0"
        clip-rule="evenodd"
      ></path>
      <g fill={color} opacity=".5">
        <path d="M12.75 9.5c0-.953-.28-2.367-1.141-3.563C10.719 4.702 9.244 3.75 7 3.75a.75.75 0 0 0 0 1.5c1.756 0 2.78.715 3.391 1.563.639.887.859 1.974.859 2.687v8.19l.75.75.75-.75zM12.198 20.224"></path>
      </g>
    </svg>
  );
});

ArrowToDownLeftBoldDuotone.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default ArrowToDownLeftBoldDuotone;
