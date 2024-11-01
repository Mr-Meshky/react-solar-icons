import React, { forwardRef, SVGProps } from 'react';

interface PhoneBoldDuotoneProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const PhoneBoldDuotone = forwardRef<SVGSVGElement, PhoneBoldDuotoneProps>(
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
          fill-rule="evenodd"
          d="m16.1 13.359.456-.453c.63-.626 1.611-.755 2.417-.317l1.91 1.039c1.227.667 1.498 2.302.539 3.255l-1.42 1.412c-.362.36-.81.622-1.326.67-1.192.111-3.645.051-6.539-1.643zm-5.91-5.876.287-.286c.707-.702.774-1.83.157-2.654L9.374 2.86C8.61 1.84 7.135 1.705 6.26 2.575l-1.57 1.56c-.433.432-.723.99-.688 1.61.065 1.14.453 3.22 2.149 5.776z"
          clip-rule="evenodd"
        ></path>
        <path
          d="M12.063 11.497c-2.946-2.929-1.88-4.008-1.873-4.014l-4.039 4.039c.667 1.004 1.535 2.082 2.664 3.205 1.14 1.133 2.26 1.974 3.322 2.595L16.1 13.36s-1.082 1.077-4.037-1.862"
          opacity=".6"
        ></path>
      </svg>
    );
  },
);

PhoneBoldDuotone.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default PhoneBoldDuotone;
