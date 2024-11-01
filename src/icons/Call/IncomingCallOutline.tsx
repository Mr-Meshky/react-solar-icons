import React, { forwardRef, SVGProps } from 'react';

interface IncomingCallOutlineProps extends SVGProps<SVGSVGElement> {
  variant?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const IncomingCallOutline = forwardRef<SVGSVGElement, IncomingCallOutlineProps>(
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
          d="M8.986 3.477C7.972 2.043 5.944 1.8 4.718 3.092l-1.57 1.653c-.536.564-.943 1.347-.894 2.261.1 1.85.884 5.634 5.018 9.986 4.429 4.663 8.654 4.898 10.478 4.717.747-.073 1.352-.472 1.795-.939l1.42-1.495c1.305-1.374.925-3.673-.707-4.613l-1.911-1.1c-1.099-.632-2.46-.45-3.335.47l-.408.43a.6.6 0 0 1-.294.006c-.402-.066-1.27-.42-2.703-1.929-1.428-1.503-1.78-2.428-1.846-2.884-.032-.22 0-.335.013-.372l.003-.006.244-.257c.968-1.019 1.036-2.613.226-3.76zm-3.18.648c.522-.55 1.443-.507 1.955.218l1.26 1.783c.423.597.358 1.392-.087 1.86l-.287.303.532.505a26 26 0 0 0-.533-.504l-.002.002-.003.003-.006.006-.013.015a1 1 0 0 0-.104.14c-.052.082-.109.19-.157.324-.098.275-.15.639-.084 1.093.13.892.715 2.091 2.242 3.7 1.523 1.603 2.673 2.233 3.55 2.375.451.074.816.015 1.092-.094a1.5 1.5 0 0 0 .422-.25l.035-.034.014-.014.007-.006.003-.003.001-.002s.002-.001-.526-.502l.528.5.455-.479c.385-.406.986-.497 1.499-.202l1.91 1.1c.821.473.982 1.635.369 2.28l-1.42 1.495c-.28.294-.572.452-.855.48-1.435.141-5.18.02-9.244-4.258-3.876-4.081-4.526-7.523-4.607-9.033-.022-.4.152-.8.484-1.148z"
          clip-rule="evenodd"
        ></path>
        <path d="M18 9.75a.75.75 0 1 0 0-1.5h-1.19l2.72-2.72a.75.75 0 1 0-1.06-1.06l-2.72 2.72V6a.75.75 0 1 0-1.5 0v3c0 .414.336.75.75.75z"></path>
      </svg>
    );
  },
);

IncomingCallOutline.defaultProps = {
  variant: 'Linear',
  color: 'currentColor',
  size: 24,
};

export default IncomingCallOutline;
