import React, { forwardRef, SVGProps } from 'react';

interface EndCallBoldDuotoneProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const EndCallBoldDuotone = forwardRef<SVGSVGElement, EndCallBoldDuotoneProps>(
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
          d="M8 12.862v.616c0 .853-.577 1.604-1.42 1.852l-2 .586C3.296 16.292 2 15.363 2 14.065v-1.923c0-.49.125-.971.44-1.353C3.174 9.905 4.88 8.282 8 7.478zm8 0v.388c0 .957.723 1.77 1.7 1.913l2 .293c1.21.177 2.3-.73 2.3-1.913v-2.125c0-.586-.184-1.164-.63-1.562-.817-.73-2.492-1.88-5.37-2.474z"
          clip-rule="evenodd"
        ></path>
        <path
          d="M12 11.397c4 0 4 1.465 4 1.465v-5.48C14.862 7.148 13.536 7 12 7s-2.862.185-4 .478v5.384s0-1.466 4-1.466"
          opacity=".5"
        ></path>
      </svg>
    );
  },
);

EndCallBoldDuotone.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default EndCallBoldDuotone;
